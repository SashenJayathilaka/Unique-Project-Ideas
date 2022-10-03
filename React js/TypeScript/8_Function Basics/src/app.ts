/*
let  great = () => {
    console.log("Hello World");
}
*/

let great:Function;


great = () => {
    console.log("hello World");
}

const add = (a: number, b: number, c: number | string = 10): void => {
    console.log(a + b);
    console.log(c);
}

add(5 , 10, '20');

const minus = (a: number, b:number): number => {
    return a + b;
}

let result = minus(10, 7);
// result = "somthing else";

console.log(result);