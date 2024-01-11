# Contributing

## Table of Contents

- [Environments](#environments)
- [Contributing](#contributing)
  - [Architecture](#architecture)
  - [Process](#process)
    - [Local Setup](#local-setup)
    - [Development](#development)
    - [Deploy to Production](#deploy-to-production)
  - [Naming Conventions](#naming-conventions)
    - [Git Naming](#git-naming)
    - [Filesystem Naming](#filesystem-naming)
  - [GraphQL](#graphql)
- [Scripts](#scripts)

## Environments

Name | Link | Status
---|---|---
Production | https://www.anatomydesignsystem.com | [![Netlify Status](https://api.netlify.com/api/v1/badges/61a5e8e4-0f4e-44c7-a2a2-1d9013d824e5/deploy-status)](https://app.netlify.com/sites/anatomydesignsystem/deploys)
Develop | https://develop--anatomydesignsystem.netlify.app | N/A

## Architecture
Detailed below is a brief map of the application detailing the important files and folders.
- **src/**
  - **assets/** Fonts & images
  - **pages/** Where all the docs code lives. Sub folders break app into sections based on the primary nav routes
    - **components/variants/** All the different implementations of component variants e.g. primary button and secondary button
  - **shared/** Components, custom hooks, and types used multiple times throughout the application
  - **styles/** Global stylesheets used both in docs and library
  - **utils/** Utility scripts for build and deploy purposes
  - **App.tsx** Handles routing, base layout, and setting idMap context

## Process

### Local Setup
1. Clone this repository.
2. Get the environment variables from a team member.<br />
*See [environment variables](#environment-variables) below*
3. Run `npm install`.
4. Run `npm start`.
5. Navigate to `localhost:3000`.

#### Environment Variables
```
REACT_APP_CONTENTFUL_SPACE_ID={contentful-space-id}
REACT_APP_CONTENTFUL_TOKEN={contentful-preview-api-key}
REACT_APP_CONTENTFUL_MANAGMENT_TOKEN={contentful-management-api-key}
REACT_APP_CONTENTFUL_ENVIRONMENT={current-working-environment-from-contentful}
REACT_APP_CONTENTFUL_PREVIEW=false // Set this to true if you want to see draft content from contentful
REACT_EDITOR=code
CONTENTFUL_API_TOKEN={contentful-api-token-for-automation}
REACT_APP_ALGOLIA_ID={algolia-search-id}
REACT_APP_ALGOLIA_KEY={algolia-search-key}
REACT_APP_ALGOLIA_INDEX={algolia-search-index-based-on-environment}
REACT_APP_DEVELOPMENT_MODE=development
MONGO_CONNECTION={mongodb-connection-string}
```

### Development
1. Ensure you have the latest from develop.
2. Branch off of develop.<br />
*See [naming conventions](#naming-conventions) below on how to name your branch.*
3. Reference latest mockups then implement changes.
4. Push your branch to origin and create a pull request (PR).<br />
*See [PR naming](#branches) guidelines below.*
5. PR can only be merged after it has been reviewed and all tests pass.

#### Testing

- Unit and integration tests live in `__tests__` folders near relevant code e.g. `src/utils/__tests__`
- End-to-end tests live in `cypress/e2e/`

##### Unit and Component Integration

To start the test runner, run

```
npm test
```

This will start the Jest test runner in watch mode. As you edit test files (and their corresponding component files), the runner re-runs your tests and notifies you of any failures.

##### End-to-end

To run E2E tests in Cypress, run

```
npm run cypress:open
```

This will open the Cypress app. In the home screen, choose "end to end" and run the appropriate test from the list.

#### Linting

##### Editor Setup

- VS Code Extensions:
  - Install "[EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)"
  - Install "[ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)"
  - Install "[Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.Prettier-vscode)"
  - Install "[Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
- Other Editors
  - Prettier: https://Prettier.io/docs/en/editors.html
  - EditorConfig: https://editorconfig.org/#download
  - ESLint: https://eslint.org/docs/latest/user-guide/integrations#editors
  - Stylelint: https://stylelint.io/user-guide/integrations/editor

**Note: You shouldn't need to customize the extensions, as each should read their respective `.XXlintrc` file to get configuration options. If your particular extension is not picking up the config files, make sure you restart your editor.**

##### Formatting Options

- Manual
  - Use Prettier's shortcut in your editor of choice.
  - Ex.: option + shift + f for VS Code on Macs
- Automated
  - Configure Prettier to format your code after each save.
  - VS Code: Settings > Format on Save.
  - You must ensure a default formatter is available. Make Prettier your default formatter by using the command palette (cmd + shift + P) > format document > configure default formatter > choose Prettier

##### Linting Options

- Manual
  - Run `npx eslint <file path>` on the command line for every file you change.
  - Run `npm run lint:styles` for stylelint.
- Automated
  - If you installed the ESlint and Stylelint extensions for your editor, you should be getting linting options already.
  - Please note: If you don't see stylelint errors in VS Code:
    - Go to settings
    - Search for "stylelint.config"
    - The option will not load, but will prompt you to open `settings.json`, open it.
    - Set the following rules:
      - "stylelint.config": null,
      - "css.validate": false,
      - "less.validate": false,
      - "scss.validate": false,
      - "stylelint.validate": ["css", "less", "postcss", "scss"]

#### Adding a primary section to the docs site
Steps for adding a site section that will be accessible from the primary navigation.
1. In Contentful, create a content model. [Reference authoring guide](https://bsc-ux-ui-creative.quip.com/EGl5AnVvgBua/Contentful-docs-site-authoring-guide).
2. Get idLookup data working for query in App component.
    1. Update `getCollections.graphql` following existing pattern.
    2. Update the TS interface IdLookup in `/types/docs.ts`.
    3. Update the following in `App.tsx`.
        1. `initialIdLookup` variable.
        2. Add another `createLookup` function call in `useEffect`.
3. Update TS interface in `/types/docs.ts`.
4. Create site section folder in `/pages`.
    1. Create Router, redirect to default route.
5. Add parent routing in `App.tsx`.
6. Add site section link in `navPrimary.tsx`.
7. Be sure to restart your local server to regen Contentful types and clear errors.

#### Adding grouped items to secondary nav
A grouped item is when you have nav items nested under a parent folder. The parent is not a location, it is a collapsible that reveals grouped items.

If there are already grouped items in the secondary nav in question, no development work is needed. Simply create/add options to the group field in the corresponding Contentful content.

If there are no grouped items then reference the following steps for adding a new secondary nav group.
1. In Contentful, create a group in the content model. [Reference authoring guide](https://bsc-ux-ui-creative.quip.com/EGl5AnVvgBua/Contentful-docs-site-authoring-guide).
2. In code, add the group support in `App.tsx`. Follow the pattern for existing group capable sections.
3. In code, add the additional conditional to check group value in the page router file. Reference other page router files for examples.

#### Adding a new field to an existing section
Steps for adding a new field to an existing section.
1. In Contentful, add field to content model. [Reference authoring guide](https://bsc-ux-ui-creative.quip.com/EGl5AnVvgBua/Contentful-docs-site-authoring-guide).
2. Update `get{Collection}.graphql`.
3. Be sure to restart your local server to regen Contentful types and clear errors.

#### Adding a component page
1. Add subfolder in `/pages/components` with a variants controller, e.g. `_ButtonController.tsx`.
2. Add variants.
    - Cases in switch case must match variant ids in Contentful (spacing and casing).
3. Add component to `Preview.tsx`.
    - Case in switch case must match docs site route for that component.
4. If the examples are external (e.g. primary nav), add the routes to those examples as ignores in SiteImprove.

### Release and deploy to production
1. In Contentful, point the master alias environment at the working environment.
This environment is now the production environment.
2. Delete the oldest backup environment.
3. Create a new environment off of master. This is the new working environment.
4. Go to the master environment then `Settings > API Keys > Anatomy Docs > Environments` and give the API access to the
new working environment.
5. Update local .env files with the new working environment name for `REACT_APP_CONTENTFUL_ENVIRONMENT`.
6. Update `REACT_APP_CONTENTFUL_ENVIRONMENT` environment variable in Netlify with new working environment name for deploy previews, branch deploys, and local development.
7. Update version number in package.json in a branch title `release/vX.Y.Z`.
8. Create pull request from release branch into develop.
9. Create pull request from develop into main.
10. Once all tests have passed and the preview is built and reviewed, the PR can be merged.
11. Create a release in Github attached to a new tag that matches the version number.

In the end we should have 3 environments including master, working environment, and the past 1 version of master.

### Netlify functions
1. If not already installed, install `netlify-cli` globally
2. Run `netlify dev`
3. Invoke functions either through function url or [netlify-cli](https://cli.netlify.com/commands/functions)

## Naming Conventions

### Prefixes
 - Library classes should be prefixed with `bsds-`.
 - Documentation classes should be prefixed with `docs-`.

### Git Naming

#### Branches
If the work is tied to a ticket, the branch should be named using the pattern `feature/ads-###` or `bug/ads-###`.
In any case where the work doesn't have a ticket, the ticket name can be replaced with a brief kebab-cased description.
If the changes are part of the deploy process, the branch should be named `deploy/{working-contentful-environment-name}`.

#### Pull Requests
Pull requests should start with the branch name, followed by a brief description of the work e.g. `feature/xcd-### Buttons`.

### Filesystem Naming

**camelCase:** folders, non-component JS files, hooks

**TitleCase:** components

**kebab-case:** assets

## GraphQL
You can build and test queries using GraphQL at the following link.

https://graphql.contentful.com/content/v1/spaces/{spaceID}/environments/{environment}/explore?access_token={accessToken}

spaceID, environment and accessToken can be found in your .env file or through the contentful dashboard.

## Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run generate-types`

Gets the typescript type interfaces from contentful to be used to properly type contentful data.\
This is run on start and build but can also be run manually.

### `npm run release-date`

Creates a file `src/utils/release-date.ts` with an exported date variable. This date is used for local storage data that
should expire on each release.\
This script runs on build, and also on start to avoid local storage issues in local
development.\
Try running this (or re-running start) if you suspect data is not updating due to local storage.

### `npm run sitemap`

Creates a sitemap in `public/sitemap.xml`. This runs on build.

### `npm run pre`

Runs necessary scripts for start and build. Will automatically run when needed.


### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Linters
- `lint:styles` - run stylelint
- `fix:styles` run stylelint and auto-fix styles
- `lint:scripts` - run eslint
- `fix:scripts` - run eslint and auto-fix scripts
- `format:check` - run prettier
- `format:write` - run prettier and auto-format files
- `lint:all` - run all linters and formatters

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
