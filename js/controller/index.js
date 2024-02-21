const getStudentInfo = () => {
    let code = document.getElementById('code').value;

    let name = document.getElementById('name').value;

    let email = document.getElementById('email').value;

    let math = document.getElementById('math').value;

    let physics = document.getElementById('physics').value;

    let chemistry = document.getElementById('chemistry').value;

    let newStudent = new Student (
        code,
        name, 
        email,
        math,
        physics,
        chemistry,
    )

    return newStudent
}

const editStudent = (code) => {
    const studentsFromLocal = getStudentsLocal();

    const alreadyEditedStudent = studentsFromLocal.find(student => Number(student.code) === code);

    document.getElementById('code').value = alreadyEditedStudent.code;

    document.getElementById('code').disabled = true;

    document.getElementById('name').value = alreadyEditedStudent.name;

    document.getElementById('email').value = alreadyEditedStudent.email;

    document.getElementById('math').value = alreadyEditedStudent.math;

    document.getElementById('physics').value = alreadyEditedStudent.physics;

    document.getElementById('chemistry').value = alreadyEditedStudent.chemistry;
}

const deleteStudent = (code) => {
    const studentFromLocal = getStudentsLocal();

    const alreadyDeletedStudents = studentFromLocal.filter(student => Number(student.code) !== code);

    setStudentsToLocal(alreadyDeletedStudents);
    renderStudents(alreadyDeletedStudents)
}

const renderStudents = (students) => {
    let contentHTML = '';
    for (let i = 0; i < students.length; i++) {
        let currentStudent = students[i];
        let contentTr = `
        <tr>
            <td>${currentStudent.code}</td>
            <td>${currentStudent.name}</td>
            <td>${currentStudent.email}</td>
            <td>${(Number(currentStudent.math) + Number(currentStudent.physics) + Number(currentStudent.chemistry)) / 3}</td>
            <td>
                <button onClick = 'editStudent(${currentStudent.code})'>Edit</button>

                <button onClick = 'deleteStudent(${currentStudent.code})'>Delete</button>
            </td>
        </tr>
        `;
        contentHTML += contentTr;
    }

    document.getElementById('student-table').innerHTML = contentHTML;
}

const setStudentsToLocal = (students) => {
    let jsonStudent = JSON.stringify(students);
    localStorage.setItem('STUDENT_LOCAL', jsonStudent)
}

const getStudentsLocal = () => {
    let jsonStudent = localStorage.getItem('STUDENT_LOCAL');
    return JSON.parse(jsonStudent)
}