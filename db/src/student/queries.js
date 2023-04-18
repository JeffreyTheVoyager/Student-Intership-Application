const getStudents = "SELECT * FROM student"
const addStudents = "INSERT INTO student (stu_id, name, year) VALUES ($1, $2, $3)"

module.exports = {
    getStudents,
    addStudents
}