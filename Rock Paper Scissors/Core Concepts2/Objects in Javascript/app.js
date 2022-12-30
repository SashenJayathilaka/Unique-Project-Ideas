let students = {
    first: 'Sashen', 
    last: 'Hasindu', 
    age: 20, 
    hight: 170,
    studentInfo: function() {
        return this.first + '\n' + this.last + '\n' + this.age
    }
};

console.log(students.first)
console.log(students.last)
console.log(students.first = 'Tom')
console.log(students.age)
console.log(students.studentInfo())