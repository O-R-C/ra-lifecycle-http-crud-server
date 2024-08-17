const express = require('express')
const router = express.Router()
const { v4: uuidv4 } = require('uuid')

const notes = [
  {
    id: uuidv4(),
    title: 'Note 1',
    text: 'Text 1',
  },
  {
    id: uuidv4(),
    title: 'Note 2',
    text: 'Text 2',
  },
  {
    id: uuidv4(),
    title: 'Note 3',
    text: 'Text 3',
  },
]

router.get('/', (req, res) => {
  res.send(JSON.stringify(notes))
})

module.exports = router
