# Coaching website

Deployed at www.montasherycoaching.com. Served by Heroku.

A React front end served by a simple Express server, bundled by Babel and Webpack.
Formspree (a third party service) deals with the form submissions and sends them via email to the website owners inbox. It's as simple as an Axios HTTP post request.
Repo is deployment ready using Heroku.

### Packages and libraries used

- Webpack - a modular build tool using loaders and plugins to turn the source code into executable files.
- Express - a web application framework for Node.js. Used to build the backend API's.
- Webpack-dev-server - a little Node.js Express server, which uses the webpack-dev-middleware to serve a webpack bundle for localhost.
- Babel - a JS transpiler that converts ES6 into ES5, which is more fully supported by browsers.
- Prettier - to make things pretty and formatted.
- Jest - paired with react-testing-library for testing rendered components.
- Node-fetch - lightweight library for using the Fetch API in Node to make HTTP requests.
- Formspree - deals with the server side of the form

#### Quickstart

```
# Clone the repository
git clone https://github.com/cjmontgom/coaching-site

# Go inside the directory
cd coaching-site

# Install dependencies
npm install (or yarn install)

# Start the development server (server side and client side)
npm run dev

# Build for production
npm run build
```
Deploy app on Heroku
https://devcenter.heroku.com/articles/git


####To-do
* add newsletter sign-up section
* get rid of shadows
* add A-NAME montasherycoaching.com
* make quote better on mobile optimised. (background colour? no quotations?)
* add loader circle for image and compress image size
* make form and server files strongly typed 
* add tests


