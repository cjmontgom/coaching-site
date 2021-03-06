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
make quick router work for second blog post with nested routing
make working cards for blog posts on contents page
decide on how urls will be with blogs. number? title?
have json blog posts and create them through passing in props to blog component

move Form from every blog to main blog content render

* put necessary fonts in html link tag instead of install all .woffs
* make form component better and strongly typed
* make server object oriented and split out routes/ controllers
* sort newsletter sign-up section call to server
* style newsletter sign-up section
* make quote better on mobile optimised. (background colour? no quotations?)
* add loader circle for image
* make form/ signup and server files strongly typed 
* add tests
* move device sizes from types file into theme.ts

* save blog posts in a db and access through a backend on loading the blog


