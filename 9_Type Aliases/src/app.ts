type StringOrNum = string | number;
type objWithName = {name: string, uid: StringOrNum}

const logDetails = (uid : StringOrNum, item: string) => {
    console.log('${item} has a uid of ${uid}');
}

const great = (user: objWithName) => {
    console.log('${user.name} Says Hello');
}


const greatAgain = (user: objWithName) => {
    console.log('${user.name} Says Hello');
}

console.log(logDetails);
console.log(great);
console.log(greatAgain);