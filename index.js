const { config } = require('dotenv')
const express = require('express')
const client = require('./db/db_connection.js')
const student = require('./db/src/student/controller.js')
require('dotenv').config()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

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
app.get('/', (req, res)=>{
    res.send(`Hello World`)
})


/* Login */
app.get('/login', (req, res)=>{
    res.render('login.pug')
})

app.post('/login', (req, res)=>{
    student.addStudents(req, res)    
    res.redirect('/')
})


const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log(`Server started on port: ${PORT}`))
connect(client)