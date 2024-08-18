const express = require('express')
const router = express.Router()

const notesData = require('../../src/js/notesData')
const Notes = require('../../src/js/Notes')
const notes = new Notes(notesData)

router.get('/', (req, res) => {
  const timeout = setTimeout(() => {
    res.send(JSON.stringify(notes.getNotes()))
  }, 2000)
})

router.post('/', (req, res) => {
  notes.addNote(req.body)
  res.status(204).send('Success')
})

router.delete('/:id', (req, res) => {
  notes.deleteNote(req.params.id)
  res.status(204).send('Success')
})

module.exports = router
