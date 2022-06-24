"use strict";
/*
let  great = () => {
    console.log("Hello World");
}
*/
let great;
great = () => {
    console.log("hello World");
};
const add = (a, b, c = 10) => {
    console.log(a + b);
    console.log(c);
};
add(5, 10, '20');
const minus = (a, b) => {
    return a + b;
};
let result = minus(10, 7);
// result = "somthing else";
console.log(result);
