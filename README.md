# Anatomy

Anatomy is Boston Scientific's design system. It's goal is to create a unified look and feel accross Boston Scientific applications. It also promotes design and development best practices and accessibility standards.

## Environments

Name | Link | Status
---|---|---
Production | https://www.anatomydesignsystem.com | [![Netlify Status](https://api.netlify.com/api/v1/badges/61a5e8e4-0f4e-44c7-a2a2-1d9013d824e5/deploy-status)](https://app.netlify.com/sites/anatomydesignsystem/deploys)
Develop | https://develop--anatomydesignsystem.netlify.app | N/A

## Contributing

### Architecture
Detailed below is a brief map of the application detailing the important files and folders.
- **src/**
  - **assets/** Fonts & images
  - **components/** Where all the docs code lives. Sub folders break app into sections based on the primary nav routes
    - **App.js** Handles routing, base layout, and setting idMap context
    - **shared/** Components used multiple times throughout the application
    - **codeStandards/** Code Standards documentation
    - **components/** Component documentation
      - **variations/** All the different implementations of component variations e.g. primary button and secondary button
  - **hooks/** Custom hooks
  - **styles/** Global stylesheets

### Process

#### Local Setup
1. Clone this repository.
2. Get the environment variables from Contentful or a team member.<br />
*See [environemnt variables](#environment-variables) below*
3. Run `npm install`.
4. Run `npm start`.
5. Navigate to `localhost:3000`.

##### Environment Variables
```
REACT_APP_CONTENTFUL_SPACE_ID={contentful-space-id}
REACT_APP_CONTENTFUL_TOKEN={contentful-preview-api-key}
REACT_APP_CONTENTFUL_MANAGMENT_TOKEN={contentful-management-api-key}
REACT_APP_CONTENTFUL_ENVIRONMENT={current-dev-env-from-contentful}
REACT_APP_CONTENTFUL_PREVIEW=false // Set this to true if you want to see draft content from contentful
REACT_EDITOR=code
```

#### Development
1. Ensure you have the latest from develop.
2. Branch off of develop.<br />
*See [naming conventions](#naming-conventions) below on how to name your branch.*
3. Reference Abstract for latest mockups then implement changes.
4. Push your branch to origin and create a pull request (PR).<br />
*See [PR naming](#branches) guidelines below.*
5. PR can only be merged after it has been reviewed and all tests pass.

#### Deploy to Production
1. In Contentful, point the master alias environment at the working environment.
This environment is now the production environment.
2. Delete the oldest backup environment.
3. Create a new environment off of master. This is the new working environment.
4. Go to the master environment then `Settings > API Keys > Anatomy Docs > Environments` and give the API access to the
new working environment.
5. Update local .env files with the new working environment name.
6. Update netlify.toml with new working environment name in a branch i.e. `deploy/{environment-name}`. Commit/push changes and create/merge branch into develop.
7. Create pull request from develop into master.
8. Once all tests have passed and the preview is built and reviewed, the PR can be merged.

In the end we should have 4 environments including master, working environment, and the past 2 versions of master.

### Naming Conventions

#### Git Naming

##### Branches
If the work is tied to a ticket, the branch should be named using the pattern `feature/xdc-###` or `bug/xdc-###`.
In any case where the work doesn't have a ticket, the ticket name can be replaced with a brief kebab-cased description.
If the changes are part of the deploy process, the branch should be named `deploy/{working-contentful-envrionment-name}`

##### Pull Requests
Pull requests should start with the branch name, followed by a brief description of the work e.g. `feature/xcd-### Buttons`.

#### Filesystem Naming

**camelCase:** folders, non-component JS files, hooks

**TitleCase:** components

**kebab-case:** assets

### GraphQL
You can build and test queries using GraphQL at the following link.

https://graphql.contentful.com/content/v1/spaces/{spaceID}/explore?access_token={accessToken}

spaceID and accessToken can be found in your .env file or through the contentful dashboard.

## Available Scripts

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

Gets the typescript type interfaces from contentful to be used to properly type contentful data. This is run on start and build but can also be run manually.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

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
