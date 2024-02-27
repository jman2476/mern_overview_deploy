import { useEffect, useState } from 'react'
import axios from 'axios'
import dayjs from 'dayjs'

function Home({
    setShowNoteForm,
    notes,
    setNotes,
    setEditNote }) {


    useEffect(() => {
        axios.get('/api/notes')
            .then((res) => {
                setNotes(res.data)


            })
    }, [])

    const handleEditNote = (note) => {
        setEditNote(note)
        setShowNoteForm(true)
    }

    const handleDeleteNote = async (note_id, index) => {
        // console.log(note)
        // Show a confirmation dialog before deleting the note
        const confirmDelete = window.confirm('Are you sure you want to delete this note?');

        if (confirmDelete) {
            await axios.delete(`/api/note/${note_id}`)

            notes.splice(index, 1)

            setNotes([...notes])

        }
        setEditNote(null)
    }

    return (
        <main>
            <h1>Home</h1>

            {!notes.length && <h2>No notes have been added</h2>}

            {notes.map((note, index) => (
                <div key={note._id} className="note">
                    <h3>{note.text}</h3>
                    <p>Created On: {dayjs(note.createAt).format('MM/DD/YYYY hh:mm a')}</p>
                    <button
                        onClick={() => handleEditNote(note)}
                        className="edit-btn">
                        Edit Note
                    </button>
                    <button
                        className="delete-btn"
                        onClick={() => handleDeleteNote(note._id, index)}>
                        Delete Note
                    </button>
                </div>
            ))}
        </main>
    )
}

export default Home