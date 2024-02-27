function Header({setShowNoteForm}) {

    const showModal = () => setShowNoteForm(true)

    return (
        <header className="row justify-between align-center">
            <h2>MERN basics</h2>

            <nav>
                <a href="/">Home</a>
                <button onClick={showModal} className="create-btn">Create Note</button>
                
            </nav>
        </header>
    )
}

export default Header