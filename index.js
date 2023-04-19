const { config } = require('dotenv')
const express = require('express')
const client = require('./db/db_connection.js')
const cookieParser = require('cookie-parser')
const {cookieJwtAuth} = require('./middleware/cookieJwtAuth.js')
require('dotenv').config()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())

// Postgres Connection
async function connect(client){
    try {
        await client.connect()
        console.log('Client connect')
    } catch (err) {
       console.log(err) 
    }
}

app.set('view engine', 'pug')
app.use(express.static('public'))

/* Home */
app.get('/', cookieJwtAuth, (req, res)=>{
    res.send(`Hello World`)
})

/* Login */
app.use('/', require('./routes/login.js'))


const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log(`Server started on port: ${PORT}`))
connect(client)