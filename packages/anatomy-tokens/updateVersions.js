import fs from 'fs';

const readme = fs.readFileSync('README.md', {
  encoding: 'utf8'
});

fs.writeFileSync(
  'README.md',
  readme.replaceAll(/anatomy-tokens@\d+\.\d+\.\d+/g, `anatomy-tokens@${process.env.npm_package_version}`)
);
