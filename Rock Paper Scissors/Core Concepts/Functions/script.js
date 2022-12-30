function sayHi(name, age) {       // name
    // var name = "Hasind";
    document.write("<h1>Hello " + name + "</h1>");
    document.write("<p>You are " + age + "</p>");
    // alert("Hey");
};
sayHi("Hasindu", 20);
sayHi("Tom", 45);
sayHi("Oscar", 32);



function addition(num1 , num2) {
    return num1 + num2;
};

var addedNumbers = addition(4, 5);

document.write (addedNumbers);