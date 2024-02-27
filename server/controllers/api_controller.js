const Note = require('../models/Note')

module.exports = {
    async createNote(req, res) {
        try {
            const note = await Note.create(req.body)

            res.json(note)
        } catch (err) {
            console.log(err)
        }
    },

    async getAllNotes(req, res) {
        try {
            const notes = await Note.find()

            res.json(notes)
        } catch (err) {
            console.log(err)
        }
    },

    async getNote(req, res) {
        try {
            const note_id = req.params.id

            const resNote = await Note.findById(note_id)

            res.json(resNote)
        } catch (err) {
            console.log(err)
        }
    },

    async updateNote(req, res) {
        try {
            const note_id = req.params.id
            const newText = req.body

            const newNote = await Note.findByIdAndUpdate(note_id, newText)

            res.json(newNote)
        } catch (err) {
            console.log(err)
        }
    },

    async deleteNote(req, res) {
        try {
            const note_id = req.params.id
            
            await Note.findByIdAndDelete(note_id)

            res.json({
                message: `Note ${note_id} was deleted successfully`
            })
        } catch (err) {
            console.log(err)
            console.log('error deleting note')
        }
    }

}