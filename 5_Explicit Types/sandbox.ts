// explicit types
let charater: string;
let age:number;
let isLogging: boolean;

charater = "Hasindu";
age = 20;
isLogging = true;

console.log("Name" + charater);

console.log("Age = " + age);

console.log(isLogging);


// arrays

let ninja: string[] = [];

ninja.push("Hasindu");

console.log(ninja);



let SecondNinja: string[];

SecondNinja = ["Hasindu" , "Tom"];


console.log(SecondNinja);

// union types
let mixed: (string|number|boolean)[] = [];

mixed.push("Hello World");
mixed.push(20);
mixed.push(true)


console.log(mixed);

let uid: string|number;

uid:'123';
uid: 123;

// object 
let thirdNinja: object;
thirdNinja = {name: "Hasindu", age: 20};

/*
let thirdNinja {
    name: string,
    age:number,
    betColor:String;
}
thirdNinja = {name : "sashen", age: 20, }*/

console.log(thirdNinja);