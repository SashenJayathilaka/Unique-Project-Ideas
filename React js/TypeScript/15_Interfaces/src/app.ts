// interfaces
 interface IsPerson {

     name: String;
     age: number;
     speak(a: string): void;
     spend(a: number):number; 
 }

 const me: IsPerson = {
     name: "Hasindu",
     age: 20,
     speak(text: string): void {
         console.log(text);
     },
     spend(amount: number): number {
        console.log("I spent" , amount);
        return amount
     }
 };
const greatPerson = (person: IsPerson) => {
    console.log("Hello" , person.name);
}

greatPerson(me);
console.log(me);