// callback functions

function printName(firstname, cb, cb2){
    console.log(firstname)
    cb("Varkey")
    cb2("48")
}
function printLastName(lastName) {
  console.log(lastName);
}

function printAge(age) {
  console.log(age);
}

printName("Sunil", printAge, printLastName);
