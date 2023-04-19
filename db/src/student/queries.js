const getStudents = "SELECT * FROM student"
const addStudents = "INSERT INTO student (stu_id, name) VALUES ($1, $2)"

module.exports = {
    getStudents,
    addStudents
}