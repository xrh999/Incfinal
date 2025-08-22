const express = require('express')

const utils = require('./utils')
const userData = require('./data')

const router = express.Router()

router.get("/login", (req, res) => {
  username1 = req.query.username
  password1 = req.query.password
  if (username1 === userData.username && password1 === userData.password) {
    res.send("Logged in successfully!")
  } else {
    res.send("Invalid username or password given!")
  }
})

module.exports = router;