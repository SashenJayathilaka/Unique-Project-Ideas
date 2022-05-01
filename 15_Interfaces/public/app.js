"use strict";
const me = {
    name: "Hasindu",
    age: 20,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log("I spent", amount);
        return amount;
    }
};
const greatPerson = (person) => {
    console.log("Hello", person.name);
};
greatPerson(me);
console.log(me);
