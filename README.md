# Full Stack Boilerplate App

An application with minimal packages and dependencies to use as a starter for React/ Typescript projects, with NodeJS and an Express server for the back end.

### Development mode

In the development mode, we will have 2 servers running. The front end code will be served by the [webpack dev server](https://webpack.js.org/configuration/dev-server/) which helps with hot and live reloading. The server side Express code will be served by a node server using [nodemon](https://nodemon.io/) which helps in automatically restarting the server whenever server side code changes.

### Production mode

In the production mode, we will have only 1 server running. All the client side code will be bundled into static files using webpack and it will be served by the Node.js/Express application.

### Packages used

- Webpack - a modular build tool using loaders and plugins to turn the source code into executable files.
- Express - a web application framework for Node.js. Used to build the backend API's.
- Webpack-dev-server - a little Node.js Express server, which uses the webpack-dev-middleware to serve a webpack bundle for localhost.
- Babel - a JS transpiler that converts ES6 into ES5, which is more fully supported by browsers.
- Prettier - to make things pretty and formatted.
- Nodemon - to automatically restart the server when making changes to server side code.
- Jest - paired with react-testing-library for testing rendered components.
- Node-fetch - lightweight library for using the Fetch API in Node to make HTTP requests.

#### Quickstart

```
# Clone the repository
git clone https://github.com/cjmontgom/react-typescript-boilerplate

# Go inside the directory
cd react-typescript-boilerplate

# Install dependencies
npm install (or yarn install)

# Start the development server (server side and client side)
npm run dev

# Build for production
npm run build
```

#### Running tests

```
# Run tests
npm test

# Watch tests
npm test:watch
```