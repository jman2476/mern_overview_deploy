import axios from 'axios'
import { useState, useEffect } from 'react'

function NoteForm({
    setShowNoteForm, 
    setNotes, 
    editNote, 
    setEditNote}) {
    const [noteText, setNoteText] = useState('')

    useEffect(() => {
        if(editNote) {
            setNoteText(editNote.text)
        }
    }, [])

    const createOrEditNote = async (event) => {
        event.preventDefault() // stops the form from submitting
        
        let res

        if(!editNote) {
            res = await axios.post('/api/notes', {
                text: noteText
            })
            setNotes((oldState) => {
               return [...oldState, res.data]
            })
        } else {
            res = await axios.put(`/api/note/${editNote._id}`, {
                text: noteText
            })
            setNotes((oldState) => {
                editNote.text = noteText
                return [...oldState]
             })
        }

        closeModal()
    }

    const closeModal = () => {
        setShowNoteForm(false)
        setEditNote(null)
    }

    const handleInputChange = (e) => {
        setNoteText(e.target.value)
        // setEditNote({
        //     ...editNote,
        //     text: noteText
        // })
    }

    return (
        <div className="note-form">
            <h1 className='text-center'>{editNote? "Edit" : "Create"} Note</h1>

            <form className="column" onSubmit={createOrEditNote}>
                <input 
                    onChange={handleInputChange} 
                    type="text" 
                    placeholder="Enter your note here"
                    value={noteText}/>
                <button >{editNote? 'Save' : 'Create'} Note</button>
                <button onClick={closeModal} className='cancel-btn'>Abandon Hope</button>
            </form>
        </div>
    )
}

export default NoteForm