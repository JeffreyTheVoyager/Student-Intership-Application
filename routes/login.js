const express = require('express')
const router = express.Router()
const {addStudents} = require('../db/src/student/controller')


router.get('/login', (req, res)=>{
    res.render('login.pug')
})

router.post('/login', (req, res)=>{
    addStudents(req, res)
})

module.exports = router;