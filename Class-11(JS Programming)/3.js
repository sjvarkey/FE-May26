const students = [
  { name: "Alice", score: 92 },
  { name: "Bob", score: 80 },
  { name: "Charlie", score: 60 },
  { name: "Sumit", score: 97 },
  { name: "Mrinal", score: 10 },
];

//group students in grades A, B, C as per the grades below:
// "A" (90-100)
// "B" (75-89)
// "C" (below 75)

// Interview Question of a startup - coditation System

// Return an object like:
// {
//   A: ["Alice" , 'Sumit'],
//   B: ["Bob"],
//   C: ["Charlie", "Mrinal"]
// }

//console.log(students[2].name);
const result = { A: [], B: [], C: [] };

function grade(students) {
  for (let student=0; student< students.length; student++){
    if (students[student].score >= 90) {
      result.A.push(students[student].name);
    } else if (students[student].score >= 75) {
      result.B.push(students[student].name);
    } else {
      result.C.push(students[student].name);
    }
  }
return result;
}

console.log(grade(students))
