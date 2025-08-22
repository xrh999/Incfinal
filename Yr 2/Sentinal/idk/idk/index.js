const express = require('express');
const PORT = 80;
const app = express();

const routes = require('./routes')
const path = require("node:path")

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// set up routes
app.use("/static", express.static("static"))
app.use(routes)

// start the server
app.listen(PORT, () => {
  console.log(`App is listening on ${PORT}`)
})