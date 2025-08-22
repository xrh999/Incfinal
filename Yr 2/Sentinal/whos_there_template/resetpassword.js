const express = require('express')

const utils = require('./utils')
const { readUserData, updateUserData} = require('./data')

const router = express.Router()

router.get("/resetpassword", (req, res) => {
  
})


module.exports = router;