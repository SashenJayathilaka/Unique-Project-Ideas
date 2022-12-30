let age = prompt('What is your age?')

if ( (age >= 18) && (age <= 35) ){
    status = 'Target demo'
}else{
    status = 'not my audience'
}

console.log(status)


// switch 

let days = prompt('Enter number');

let day = parseInt(days);

switch (day) {
    case 1:
        document.getElementById('day').innerHTML = 'Sunday' ;
        break;
    case 2:
        document.getElementById('day').innerHTML = 'Monday' ;
        break;
    case 3:
        document.getElementById('day').innerHTML = 'Tuesday' ;
        break;
    case 4:
        document.getElementById('day').innerHTML = 'Wednesday' ;
        break;
    case 5:
        document.getElementById('day').innerHTML = 'Thursday' ;
        break;
    case 6:
        document.getElementById('day').innerHTML = 'Friday' ;
        break;
    case 7:
        document.getElementById('day').innerHTML = 'Saturday' ;
        break;
    default:
        document.getElementById('day').innerHTML = 'You enter wrong number' ;
        break;
}