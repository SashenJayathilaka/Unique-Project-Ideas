"use strict";
const logDetails = (uid, item) => {
    console.log('${item} has a uid of ${uid}');
};
const great = (user) => {
    console.log('${user.name} Says Hello');
};
const greatAgain = (user) => {
    console.log('${user.name} Says Hello');
};
console.log(logDetails);
console.log(great);
console.log(greatAgain);
