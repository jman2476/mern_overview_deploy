import { useState } from 'react'
import Header from './components/Header'
import {Routes, Route} from 'react-router-dom'

import Home from './pages/Home'
import NoteForm from './pages/NoteForm'
import NotFound from './pages/NotFound'

function App() {
  const [showNoteForm, setShowNoteForm] = useState(false)
  const [notes, setNotes] = useState([])
  const [editNote, setEditNote] = useState(null)

  return (
    <>
      <Header setShowNoteForm={setShowNoteForm}/>

      {showNoteForm && 
        <NoteForm 
          setShowNoteForm={setShowNoteForm} 
          setNotes={setNotes}
          editNote={editNote}
          setEditNote={setEditNote}/>}

      <Routes>
        <Route 
          path="/" 
          element={
            <Home 
              notes={notes} 
              setNotes={setNotes}
              setEditNote={setEditNote}
              setShowNoteForm={setShowNoteForm}/>}>
            
        </Route>
        
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  )
}

export default App
