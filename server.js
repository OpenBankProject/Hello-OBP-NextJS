const express = require('express')
const next = require('next')
const dev = process.env.NODE_ENV !== 'production'
// Create the Express-Next App
const app = next({ dev })
const handle = app.getRequestHandler()
//Start the app
app.prepare()
//Start Express server and serve the
    .then(() => {
        const server = express()
        server.get('*', (req, res) => {
            return handle(req, res)
        })
        server.get('/login', (req, res) => {
            res.send('taik lu')
        })
        server.listen(4000, (err) => {
            if (err) throw err
        })
    })
    .catch((ex) => {
        console.error(ex.stack)
        process.exit(1)
    })