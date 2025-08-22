const express = require('express')

const utils = require('./utils')
const { readUserData, updateUserData} = require('./data')

const router = express.Router()

router.get("/register", (req, res) => {
  const username1 = req.query.newusername
  const password1 = req.query.newpassword
  const qnnum = req.query.qnnum
  const qnans = req.query.qnans
  const storedData = readUserData()
  updateUserData(username1,password1,qnnum,qnans)
  res.send("new user created")

})


module.exports = router;