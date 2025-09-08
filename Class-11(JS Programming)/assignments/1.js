/*
Create a student records manager using an array of objects. 
Implement a function manageStudents that:

Takes an array of student objects and an operation.

    "add" → Adds a student { name, age } to the list.
    "get" → Returns the list of all students.

    function manageStudents(studentInp, operation) {

*/

function manageStudents(studentInp, operation) {
    if (operation === "add") {
    for (let i = 0; i < studentInp.length; i++) {
      students.push(studentInp[i]);
    }
    return `Students have been added`;
  } else if (operation === "get") {
    return students;
  }
}