interface Student{
    firstName:string,
    lastName:string,
    age:number,
    location:string
}

const student_1 : Student = {
    firstName: "Benjamin",
    lastName: "Angmortey",
    age: 21,
    location: "Accra"
}

const student_2 : Student = {
    firstName: "Emmanuel",
    lastName: "Kwemu",
    age: 24,
    location: "Cape Coast"
}

const studentsList : Array<Student> = [student_1,student_2]

console.log(studentsList.length)