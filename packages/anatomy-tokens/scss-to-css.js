import fs from 'fs';
import sass from 'sass';
import path from 'path';
import postcss from 'postcss';
import cssnano from 'cssnano';
import combineSelectors from 'postcss-combine-duplicated-selectors';

// These match scss breakpoints variables. If those change, these also need to change.
const breakpoints = {
  'breakpoint-sm-min': '36rem',
  'breakpoint-md-min': '48rem',
  'breakpoint-lg-min': '62rem',
  'breakpoint-xl-min': '75rem',
  'breakpoint-xxl-min': '87.5rem'
};

const paths = {
  src: 'src',
  build: 'build',
  lib: 'lib',
  get sass() {
    return this.src + '/sass';
  }
};

/**
 * Variables to be ignored when translating from scss variables to css variables.
 * These are ignored as there is no 1-1 equivalent way to do these in css.
 * This is used in convertVarInstances.
 */
const ignoredVars = ['fs-.+', 'space', 'key', 'key'];

/**
 * Checks to see if a folder of the provided name already exists. If not, it creates the folder.
 * @param {string} folderName
 */
const createFolder = (folderName) => {
  if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName);
  }
};

/**
 * Checks if the path points to a file.
 * @param {string} fileName
 * @return {boolean}
 */
const isFile = (fileName) => {
  return fs.lstatSync(fileName).isFile();
};

/**
 * Checks if the path points to a directory.
 * @param {string} fileName
 * @return {boolean}
 */
const isDirectory = (fileName) => {
  return fs.lstatSync(fileName).isDirectory();
};

/**
 * Recursively copies a directory and its contents.
 * @param {string} from
 * @param {string} to
 */
const copyDir = (from, to) => {
  createFolder(to);
  const dirContents = fs.readdirSync(from);
  dirContents.forEach((node) => {
    const fullPath = path.join(from, node);
    if (isFile(fullPath)) {
      fs.copyFileSync(fullPath, path.join(to, node));
    } else if (isDirectory(fullPath)) {
      copyDir(fullPath, path.join(to, node));
    }
  });
};

/**
 * Gets all the files in a directory. Filters out any sub-directories.
 * @param {string} dirPath
 * @return {string[]}
 */
const getFiles = (dirPath) => {
  return fs
    .readdirSync(dirPath)
    .map((fileName) => {
      return path.join(dirPath, fileName);
    })
    .filter(isFile);
};

/**
 * Converts all sass variable declarations into css custom property declarations.
 * e.g. $foo: 'bar' -> :root {--foo: 'bar'}
 * @param {string} scss
 * @return {string}
 */
const convertVarDeclarations = (scss) => {
  return scss.replaceAll(
    /\$([\w-]+):\s*([^;{]+)(?:[;\n]|(?=\s*\}))/g, // Regex to get all sass var declarations e.g. $foo: 'bar'
    (match) => {
      // Split variables into name and value
      const pair = [match.slice(0, match.indexOf(':')), match.slice(match.indexOf(':') + 1).replaceAll(';', '')];
      const name = pair[0].slice(1);
      const values = ((value) => {
        // If sass var has multiple values, split into multiple css custom properties e.g. space var
        if (value.trim().charAt(0) == '(') {
          return value
            .replaceAll('\n', '')
            .trim()
            .slice(1, -1)
            .split(',')
            .map((v) => v.trim())
            .filter((v) => v);
        } else {
          return [value.trim()];
        }
      })(pair[1]);

      // Create css custom property
      if (values.length > 1) {
        const valueString = values
          .map((value) => {
            const subName = value.split(':')[0];
            const subValue = value.split(':')[1];
            return `--${name}-${subName}: ${subValue};`;
          })
          .join('\n');
        return `:root {${valueString}}`;
      }
      return `:root {--${name}: ${values[0]}}`;
    }
  );
};

/**
 * Converts all sass variable instances into css custom property instances.
 * Parses through each character, looks for $ and collects chars in a buffer until a invalid var name character
 * is reached, or a : is reached. If a : is reached the buffer is added to the output with no modifications
 * and the buffer is emptied. If an invalid var name character is reached (whitespace, etc),
 * the variable in the buffer is converted to a css custom property.
 * e.g. $foo -> var(--foo)
 * @param {string} scss
 * @return {string}
 */
const convertVarInstances = (scss) => {
  let convertedScss = '';
  let buffer = '';
  for (const char of scss) {
    // Finds $ and starts the buffer
    if (char === '$') {
      buffer += char;
    } else {
      if (!buffer) {
        // Adds chars to output if no active buffer in progress
        convertedScss += char;
      } else {
        if (char === ':') {
          // Excludes variable declarations
          convertedScss += buffer + char;
          buffer = '';
        } else if (!char.match(/[a-zA-Z0-9_-]/)) {
          // Buffer complete
          if (ignoredVars.some((v) => buffer.slice(1).match(new RegExp(v)))) {
            // Ignores vars from ignoredVars array
            convertedScss += buffer + char;
            buffer = '';
          } else if (buffer.slice(1).match(/breakpoint-.+/)) {
            // Ignore breakpoint vars
            // Currently only used in media queries, since custom properties don't work in media queries,
            // we are swapping the scss vars for their rem values
            // If we need to use more custom properties in media queries or if we need to use breakpoint vars outside
            // of media queries, this will need to be changed to generalized solution
            convertedScss += breakpoints[buffer.slice(1)] + char;
            buffer = '';
          } else {
            // Converts scss var instance to css custom property instance at end of var name
            convertedScss += `var(--${buffer.slice(1)})${char}`;
            buffer = '';
          }
        } else {
          // Adds to buffer
          buffer += char;
        }
      }
    }
  }

  return convertedScss;
};

/**
 * Looks for all instance of the space function (excluding its declaration) and wraps them in the sass interpolator #{ }
 * @param {string} scss
 */
const convertSpaceFns = (scss) => scss.replaceAll(/\b(space\((?!\$key\)).*?)\)/g, (match) => `#{${match}}`);

/**
 * Converts sass tokens into equivalent css tokens where possible.
 *
 */
const buildCssFromSass = () => {
  // Create temporary build folders to write sass with css custom properties to
  createFolder(paths.build);
  createFolder(paths.build + '/variables');
  createFolder(paths.build + '/mixins');

  // Create lib folders
  createFolder(paths.lib);
  createFolder(paths.lib + '/css');

  // Convert sass variables to css custom properties and output to temporary build folder
  const varFiles = getFiles(paths.sass + '/variables');
  varFiles.forEach((file) => {
    const scss = fs.readFileSync(file, {
      encoding: 'utf8'
    });
    // Convert sass vars into css custom properties
    const convertedVars = convertSpaceFns(convertVarInstances(convertVarDeclarations(scss)));
    fs.writeFileSync(file.replace(paths.sass, paths.build), convertedVars);
  });

  // Copy over global and mixins to build folder
  fs.copyFileSync(paths.sass + '/tokens.scss', paths.build + '/tokens.scss');
  const mixinFiles = getFiles(paths.sass + '/mixins');
  mixinFiles.forEach((file) => {
    const scss = fs.readFileSync(file, {
      encoding: 'utf8'
    });
    // Convert sass var instances in mixins to use the newly converted css custom properties
    const convertedVars = convertSpaceFns(convertVarInstances(scss));
    fs.writeFileSync(file.replace(paths.sass, paths.build), convertedVars);
  });

  // Compiles sass (with converted variables) to css
  const compiledCSS = sass.compile(paths.build + '/tokens.scss');

  // Append css from src to bottom of compiled sass
  const srcCSS = fs.readFileSync(paths.src + '/css/tokens.css', {
    encoding: 'utf8'
  });
  const builtCSS = compiledCSS.css + '\n' + srcCSS;

  // Combine duplicate selectors
  postcss([combineSelectors()])
    .process(builtCSS, { from: paths.lib + '/css/tokens.css' })
    .then((result) => fs.writeFileSync(paths.lib + '/css/tokens.css', result.css));

  // Create minified css file
  postcss([cssnano()])
    .process(builtCSS, { from: paths.lib + '/css/tokens.css' })
    .then((result) => fs.writeFileSync(paths.lib + '/css/tokens.min.css', result.css));

  // Delete build directory
  fs.rmSync(paths.build, { recursive: true, force: true });
};

// Delete lib directory to start each build fresh
fs.rmSync(paths.lib, { recursive: true, force: true });

buildCssFromSass();
copyDir(paths.sass, paths.lib + '/sass');
copyDir(paths.src + '/fonts', paths.lib + '/fonts');
