const express = require('express')
const cors = require('cors')
const app = express()
const port = 7070
const bodyParser = require('body-parser')
const notes = require('./routes/notes/notes')

app.use(cors())
app.use(
  bodyParser.json({
    type(req) {
      return true
    },
  })
)
app.use('/notes', notes)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
