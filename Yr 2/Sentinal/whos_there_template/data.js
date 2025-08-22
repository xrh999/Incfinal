const fs = require('fs')

function hash(thing){
  const md5 = require("md5")
  const hashed = md5(thing)
  return hashed
}

function readUserData() {
  // YOUR CODE HERE.
  // Read and parse the store.json file, and return the array inside.
  const data = fs.readFileSync('./store.json', 'utf-8')
  const parsedData = JSON.parse(data)
  return parsedData
}

function updateUserData(newuser, newpassword,qnnumber,qnanswer){
  const newUser = {
    username: newuser,
    password: hash(newpassword),
    qnnumber: qnnumber,
    qnanswer: qnanswer
  }
  const userData = readUserData()
  JSON.parse(fs.readFileSync("store.json"))
  const newUserData = userData.concat(newUser)
  fs.writeFileSync("store.json",JSON.stringify(newUserData))
}



module.exports = { readUserData, updateUserData, hash }