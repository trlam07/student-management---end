
let students = getStudentsLocal() || [];
console.log(students)

if (students.length > 0) {
    renderStudents(students)
}

const addNewStudent = () => {
    let newStudent = getStudentInfo();
    students.push(newStudent);
    setStudentsToLocal(students);
    renderStudents(students);
    document.getElementById('student-form').reset();
}

const resetStudents = () => {
    students = [];
    renderStudents(students);
    localStorage.removeItem('STUDENT_LOCAL')
}

const saveChange = () => {
    const alreadyEditedStudent = getStudentInfo();

    const editedStudents = students.map(student => {
        if (student.code !== alreadyEditedStudent.code) {
            return student
        } else {
            return alreadyEditedStudent
        }
    })

    setStudentsToLocal(editedStudents);
    renderStudents(editedStudents);
    document.getElementById('code').disabled = false;
    document.getElementById('student-form').reset();
}