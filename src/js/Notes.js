const { v4: uuidv4 } = require('uuid')

class Notes {
  /**
   * Initializes a new instance of the Notes class.
   *
   * @param {Array<Object>} notes - An array of note objects. Each note object should have a 'content' property.
   *                                If the note object does not have an 'id' property, a unique id will be generated.
   * @return {undefined}
   */
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
