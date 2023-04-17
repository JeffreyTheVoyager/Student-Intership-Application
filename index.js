const { config } = require('dotenv')
const express = require('express')
const sqlite3 = require('sqlite3').verbose()
require('dotenv').config()

const app = express()

app.set('view engine', 'pug')
app.use(express.static('public'))
app.use(express.urlencoded({extended: false}))

/* Home */
app.get('/', (req, res)=>{
    res.send(`Hello World`)
})


/* Login */
app.get('/login', (req, res)=>{
    res.render('login.pug')
})

app.post('/login', (req, res)=>{
    const {name} = req.body
    insertStudent(name)
    res.redirect('/')
})


const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log(`Server started on port: ${PORT}`))