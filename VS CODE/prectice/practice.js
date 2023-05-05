/*

13. Write Javascript code to update array of student objects
Create an array of student objects like given below and complete the following functions to change the array of objects
Implement the following functions:
1. findStudentById(id) - returns student object for the given id if found else null
2. findStudentsByGender(gender) - returns array of students for the given gender
3. addStudent(id, name, total, gender) - add new student to list of students
4. deleteStudentById(id) - deletes the student from the array using id
5. printStudents - print the list of students row. Each row is in format:
ID: 1, Name: Ram (Male), Total: 72

*/
let  student=[{
Name:"Bablu",
Id:"99HEA",
gender: "male"

},
{
    Name:'Sheela',
    Id:"1A",
    gender: 'Female'

}
]

console.log(student)
console.log(student.Id)
console.log(student.gender)

let newstudent=[{
    ...student
}]
newstudent.Name="Ram"
newstudent.Id="1"
newstudent.gender="male"
//newstudent.student.Id=" "
//if(newstudent.Id=="1"){console.log("deletes")}

console.log(newstudent)
/*
var students = [
    { id: 1, name: 'Ram', total: 72, gender: 'Male' },
    { id: 2, name: 'Sheela', total: 75, gender: 'Female' },
    ]

*/
