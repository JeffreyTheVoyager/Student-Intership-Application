const pool = require('../../db_connection.js')
const queries = require('./queries.js')
const crypto = require('crypto')

const getStudents = (req, res) =>{
    pool.query(queries.getStudents, (err, stu)=>{
        if(err){
            throw err
        }
        res.status(200).json(stu.rows)
    })
}

exports.addStudents = async (req, res) =>{
    const n = crypto.randomInt(0, 100000)
    const {name} = req.body;

    pool.query(queries.addStudents, [n, name], (err, results) =>{
        if(err) throw err
        res.status(201).send('Student Created Successfully')
    })
}