console.log("Hello world")
console.log("Hello world")
// console.log("Hello world")
// console.log("Hello world")

// how to write comment


// variables

var b = "Good morning";
console.log(b)

/* var a = 45;
console.log(a) */

var d = prompt('What is Your Name?')
document.getElementById('javac').innerHTML = "My name is = " + d;

document.getElementById('someText').innerHTML = "Hey " + d;

var c = prompt('First subject Mark');
document.getElementById('java').innerHTML = 'My first subject mark is = ' + c;

var mark1 = prompt("Second Subject Mark");
document.getElementById('mark').innerHTML = 'My second subject mark is = ' + mark1;

var mark2 = prompt("Third subject Mark")
document.getElementById('avg').innerHTML = "My third subject mark = " + mark2;

var num1 = parseInt (c);
var num2 = parseInt(mark1);
var num3 = parseInt(mark2);

var avg = num1 + num2 + num3;
var avg_marks = (avg / 3);
document.getElementById('avg2').innerHTML = "My Avg mark is = " + avg_marks;

if (c <= 100 && mark1 <= 100 && mark2 <= 100) {
    if (85 <= avg_marks && avg_marks <= 100 ) {
        document.getElementById('first').innerHTML = "My grade is = A+ ";
    }
    else if (75 <= avg_marks && avg_marks < 85) {
        document.getElementById('first').innerHTML = "My grade is = A ";
    }
    else if (70 <= avg_marks && avg_marks < 75) {
        document.getElementById('first').innerHTML = "My grade is = A- ";
    }
    else if (65 <= avg_marks && avg_marks < 70) {
        document.getElementById('first').innerHTML = "My grade is = B+ ";
    }
    else if (60 <= avg_marks && avg_marks < 65) {
        document.getElementById('first').innerHTML = "My grade is = B ";
    }
    else if (55 <= avg_marks && avg_marks < 60) {
        document.getElementById('first').innerHTML = "My grade is = B- ";
    }
    else if (50 <= avg_marks && avg_marks < 55) {
        document.getElementById('first').innerHTML = "My grade is = C+ ";
    }
    else if (45 <= avg_marks && avg_marks < 50) {
        document.getElementById('first').innerHTML = "My grade is = C ";
    }
    else if (40 <= avg_marks && avg_marks < 45) {
        document.getElementById('first').innerHTML = "My grade is = C- ";
    }
    else if (35 <= avg_marks && avg_marks < 40) {
        document.getElementById('first').innerHTML = "My grade is = D ";
    }
    else{
        document.getElementById('first').innerHTML = "My grade is = F ";
    }   
}else{
    document.getElementById('first').innerHTML = "Your Mark is not valid";
}