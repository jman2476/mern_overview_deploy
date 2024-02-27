const {Schema, model} = require("mongoose")

// define the schema
const noteSchema = new Schema({
    text: {
        type: String,
        required: true,
        min: [4, 'Your note must be at least 4 characters in length']
    }
},{
    timestamps: true
})

// make the model
const Note = model('Note', noteSchema)

module.exports = Note