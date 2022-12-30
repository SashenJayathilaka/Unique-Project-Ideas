const computerChoiceDisplay =  document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice')
document.getElementById('user-choice').style.color = 'blue';
const resultDisplay = document.getElementById('result');
let userChoice
let computerChoice
let getResult

const possibleChoices = document.querySelectorAll('button');

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {

    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice

    randToRsInt();
    getResult();


    function randToRsInt() {
        const randomNumber = Math.floor(Math.random() * 3); //possibleChoices length

        if (randomNumber === 1) {
            computerChoice = 'Rock'
        }

        else if (randomNumber === 2) {
            computerChoice = "Paper"
        }
        else {
            computerChoice = 'Scissors'
        }

        console.log(computerChoice)

        computerChoiceDisplay.innerHTML = computerChoice;
    }
    
    /*
    function numberToChoice(number) {
        return ['Rock', 'Paper', 'Scissors'][number];
    }
    */

    function getResult() {

        if (computerChoice === userChoice) {
            result = 'You Tie!'
            document.getElementById('result').style.color = "yellow"
        }
        else if (computerChoice === 'Rock' && userChoice === 'Paper') {
            result = 'You Won!'
            document.getElementById('result').style.color = "green"
        }
        else if (computerChoice === 'Paper' && userChoice === 'Rock') {
            result = 'You Lost!'
            document.getElementById('result').style.color = "red"
        }
        else if (computerChoice === 'Paper' && userChoice === 'Scissors') {
            result = 'You Won!'
            document.getElementById('result').style.color = "green"
        }
        else if (computerChoice === 'Rock' && userChoice === 'Scissors') {
            result = 'You Lost!'
            document.getElementById('result').style.color = "red"
        }
        else if (computerChoice === 'Scissors' && userChoice ==='Rock') {
            result = 'You Won!'
            document.getElementById('result').style.color = "green"
        }
        else if (computerChoice === 'Scissors' && userChoice ==='Paper') {
            result = 'You Lost!'
            document.getElementById('result').style.color = "red"
        }
        else{
            result = ""
        }

        
        
        resultDisplay.innerHTML = result;
    }


}));