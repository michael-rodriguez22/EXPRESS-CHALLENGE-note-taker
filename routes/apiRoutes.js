const router = require("express").Router()
const { createNote, removeNote } = require("../lib/notes")
const { notes } = require("../db/db.json")

router.get("/notes", (req, res) => {
  //   return all notes
})

router.post("/notes", (req, res) => {
  // create note
})

router.delete("/notes/:id", (req, res) => {
  // delete note
})

module.exports = router
