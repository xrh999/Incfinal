const express = require('express')

const utils = require('./utils')
const { readUserData , hash } = require('./data')

const router = express.Router()

router.get("/login", (req, res) => {
  const username = req.query.username
  const password = req.query.password

  // User data from JSON file
  const storedData = readUserData()
  const user = storedData.find(u => u.username === username && u.password === hash(password));


  /*
  YOUR CODE HERE.
  If the credentials are correct, show the "Log in successful" message.
  Otherwise show "Username or password incorrect" message.
  */

  if (user) {
    res.send("Log in successful")
  } else {
    res.send("Username or password incorrect")
  }
  
})

module.exports = router;