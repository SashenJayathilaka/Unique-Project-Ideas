// var phrase = "String are cool";


var Person = {
    name: "Hasindu",
    age: 23,
    isMale: true,
    occupation: "Programmer",
    printName: function () {
        document.write("<h1>" + this.occupation + "</h1>");
    }
};
Person.printName();



/*
Person.name = "Tom";
document.write(Person.name);
document.write(Person.age);
*/

// document.write(phrase.length)