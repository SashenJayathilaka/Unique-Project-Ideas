// let great: Function;



// example
let green: (a : string, b: string) => void;


green = (name: string, greeting: string) => {
    console.log('${name} says ${greeting}');
}

// example 02
let calc: (a: number,b: number,c: string) => number;


calc = (numOne: number, numTwo: number, action: string) => {
    if (action === 'add') {
     return numOne + numTwo;   
    }
    else {
        return numOne - numTwo;
    }
}

// example
let loginDetails: (obj: {name: string, age: number}) => void;

type person = {name: string, age: number};

loginDetails = (ninja: person) => {
    console.log('${ninga.name is ${ninja.age} years old')
}