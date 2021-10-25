const { nanoid } = require("nanoid")
const fs = require("fs")
const path = require("path")

function createNote(note, notesArr) {
  note.id = nanoid(36)
  notesArr.push(note)
  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify(notesArr, null, 2)
  )
}

function removeNote(id, notesArr) {
  let result = notesArr.filter(element => element.id !== id)
  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify(result, null, 2)
  )
}

module.exports = {
  createNote,
  removeNote,
}
