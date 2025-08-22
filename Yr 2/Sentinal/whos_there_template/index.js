const express = require('express')
const path = require("node:path")

const routes = require('./routes')
const login = require('./login')
const register = require('./register')
const resetpassword = require('./resetpassword')

const PORT = 80

const app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// set up body parser
app.use(express.urlencoded({ extended: true }))

// set up routes
app.use("/static", express.static("static"))
app.use(routes)
app.use(login)
app.use(register)
app.use(resetpassword)

// start the server
app.listen(PORT, () => {
  console.log(`App is listening on ${PORT}`)
})