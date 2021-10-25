const router = require("express").Router()
const notes = require("../db/db.json")
const { createNote, removeNote } = require("../lib/notes")

router.get("/notes", (req, res) => {
  res.json(notes)
})

router.post("/notes", (req, res) => {
  createNote(req.body, notes)
  res.status(200).json(req.body)
})

router.delete("/notes/:id", (req, res) => {
  removeNote(req.params.id, notes)
  res.status(200).json(notes)
})

module.exports = router
