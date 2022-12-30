var num1 = window.prompt("Enter first number");
var num2 = window.prompt("Enter another number");
var math = window.prompt("Enter operator you want (+, -, *, /)");

num1  = parseFloat(num1);
num2 = parseFloat(num2);


if (math == "+" ) {
    document.write(num1 + num2);
}
else if (math == "-") {
    document.write(num1 - num2);
}
else if (math == "*") {
    document.write(num1 * num2);
}
else if (math == "/") {
    document.write(num1 / num2);
}
else{
    document.write('Sorry You enter wrong operator try again!')
}