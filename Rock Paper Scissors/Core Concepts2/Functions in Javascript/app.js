// function

// create
function fun() {
    alert('this is a function');
}

// call
fun();



var yName = prompt('What is your name?')

function greeting(name) {
    var result = 'Hello ' + name // String concatenation
    console.log(result)
}

greeting(yName.toUpperCase())

// ad 2 numbers together in a function

function sumNumbers(num1 , num2) {
    var result = num1 + num2
    console.log(result)
}

sumNumbers(10 ,10)
// sumNumbers('Hello ','Tom')