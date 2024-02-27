const express = require('express')
const db = require('./config/connection')
const path = require("path")

const app = express()
const PORT = process.env.PORT || 3305

// import routes
const api_routes = require('./routes/api_routes')

// open middleware channels
app.use(express.json())

// Load routes
app.use("/api", api_routes)


if (process.env.NODE_ENV === 'production'){
    app.use(express.static('../client/dist'))
    
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/dist/index.html'))
    })
}

// Confirm the DB connection
db.on('open', ()=> {
    // Start the server
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
})
