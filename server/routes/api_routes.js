const router = require('express').Router()
const api_controller = require('../controllers/api_controller')

// create a note
router.post('/notes', api_controller.createNote)

// get all noteas
router.get('/notes', api_controller.getAllNotes)

// get one note by id
router.get('/note/:id', api_controller.getNote)

// update a note by id
router.put('/note/:id', api_controller.updateNote)

// delete a note
router.delete('/note/:id', api_controller.deleteNote)

module.exports = router