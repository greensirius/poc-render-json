# Vision UI

A framework for building user interfaces for Android, iOS and Web by authoring pure JSON.

Built on React Native (and react-native-web) using TypeScript, this project will load a set of configuration files (JSON files) describing views, navigation, actions, data models and more.

From the configuration, a fully function application can be rendered.

## Getting Started

In the project directory, you should start by running `yarn` to install dependencies.

```sh
yarn
```

Run the application for mobile devices (or iOS simulator):

```sh
yarn start:expo
```

Run the application in a web browser:

```sh
yarn start:web
```

Edit JSON files within the `app/` directory and when you save the file, your browser should automatically reload the UI.

### Deploying for web

```sh
yarn build:web
```

Builds the app for production to the `build` folder.

It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

Your app is ready to be deployed!
