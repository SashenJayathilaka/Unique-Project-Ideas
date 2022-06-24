// explicit types
var charater;
var age;
var isLogging;
charater = "Hasindu";
age = 20;
isLogging = true;
console.log("Name" + charater);
console.log("Age = " + age);
console.log(isLogging);
// arrays
var ninja = [];
ninja.push("Hasindu");
console.log(ninja);
var SecondNinja;
SecondNinja = ["Hasindu", "Tom"];
console.log(SecondNinja);
// union types
var mixed = [];
mixed.push("Hello World");
mixed.push(20);
mixed.push(true);
console.log(mixed);
var uid;
uid: '123';
uid: 123;
// object 
var thirdNinja;
thirdNinja = { name: "Hasindu", age: 20 };
/*
let thirdNinja {
    name: string,
    age:number,
    betColor:String;
}
thirdNinja = {name : "sashen", age: 20, }*/
console.log(thirdNinja);
