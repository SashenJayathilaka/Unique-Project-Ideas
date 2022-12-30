/*
var fruits = [
    "Apples", 
    24, 
    true
];
*/
var fruits = "Apples , Orange, Peaches";
fruits = fruits.split(",");   // !

document.write(fruits[0]);
document.write("<br>");
document.write(fruits[2]);
document.write("<br>");
document.write(fruits.length);
document.write("<br>");
document.write(fruits[1]);
document.write("<br>");
document.write(fruits[2]);