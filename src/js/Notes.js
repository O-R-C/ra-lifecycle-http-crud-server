const { v4: uuidv4 } = require('uuid')

class Notes {
  constructor(notes = []) {
    this.notes = notes.map((note) => (note.id ? note : { ...note, id: uuidv4() }))
  }

  addNote(note) {
    this.notes.push({
      ...note,
      id: uuidv4(),
    })
  }

  getNotes() {
    return this.notes
  }

  deleteNote(id) {
    this.notes = this.notes.filter((note) => note.id !== id)
  }
}

module.exports = Notes
