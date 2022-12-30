let fruits = ['Lemon', 'Mango', 'Mangosteen', 'Pineapple', 'Raspberries', 'Strawberries', 'Watermelon', 'Cranberries'];
fruits = new Array ('Lemon', 'Mango', 'Mangosteen', 'Pineapple', 'Raspberries', 'Strawberries', 'Watermelon', 'Cranberries');

console.log(fruits);
alert(fruits[5]);

for (let index = 0; index < fruits.length; index++) {
    console.log(fruits[index]);
    
}

console.log('to string', fruits.toString());
console.log(fruits.join(' * '));
console.log(fruits.pop(), fruits);
console.log(fruits.push('Pineapple'), fruits)
console.log(fruits[5])
fruits[5] = 'New Fruit';
console.log(fruits);
fruits.shift(); // remove first element from list
fruits.unshift('kiwi');
console.log(fruits);

let vegetables = ['asparagus', 'tomato', 'broccoli'];
let allGroceries = fruits.concat(vegetables);
console.log(allGroceries);
console.log(allGroceries.slice[1 ,4]);
console.log(allGroceries.reverse());
console.log(allGroceries.sort())

let someNumbers = [5,8,9,6,3,4,5,78,9,25,11,45,32,78,12,12];
console.log(someNumbers.sort(function(a, b) {return a+b})); //ase
console.log(someNumbers.sort(function(a, b) {return a-b})); //dsc

let emptyArray = new Array();

for (let num = 0; num < 10; num++) {
    emptyArray.push(num);   
}
console.log(emptyArray);