const express = require('express')
const path = require('path')
const app = express()

app.use(express.static('./public'))

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, './public', 'index.html'))
})

const server = app.listen(process.env.PORT || 5000, function () {
  console.log('Server running at http://0.0.0.0:' + server.address().port)
})
