function sendError(res, err) {
  return res.status(404).send(err)
}

module.exports = { sendError }