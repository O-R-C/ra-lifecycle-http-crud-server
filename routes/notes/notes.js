const express = require('express')
const router = express.Router()

const Notes = require('../../src/js/Notes')
const notesData = require('../../src/js/notesData')
const notes = new Notes(notesData)

router.get('/', (req, res) => {
  const timeout = setTimeout(() => {
    res.send(JSON.stringify(notes.getNotes()))
  }, 2000)
})

router.post('/', (req, res) => {
  const note = {
    id: uuidv4(),
    content: req.body.content,
  }
  notes.push(note)
  res.send(note)
})

router.delete('/:id', (req, res) => {
  notes.deleteNote(req.params.id)
  res.status(204).send('Success')
})

module.exports = router
