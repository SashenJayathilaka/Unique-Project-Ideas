const cardArray = [
    {
        name: 'star-fish',
        img: 'images/31958260.jpg'
    },
    {
        name: 'octopus',
        img: 'images/31958261.jpg'
    },
    {
        name: 'Mackerel',
        img: 'images/31958262.jpg'
    },
    {
        name: 'Angelfish',
        img: 'images/31958263.jpg'
    },
    {
        name: 'red-fish',
        img: 'images/31958264.jpg'
    },
    {
        name: 'snail',
        img: 'images/31958265.jpg'
    },
    {
        name: 'star-fish',
        img: 'images/31958260.jpg'
    },
    {
        name: 'octopus',
        img: 'images/31958261.jpg'
    },
    {
        name: 'Mackerel',
        img: 'images/31958262.jpg'
    },
    {
        name: 'Angelfish',
        img: 'images/31958263.jpg'
    },
    {
        name: 'red-fish',
        img: 'images/31958264.jpg'
    },
    {
        name: 'snail',
        img: 'images/31958265.jpg'
    }
    

]

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector('#grid');
const scoreDisplay = document.querySelector('#result');
let cardChoices = [];
let cardsChoosersIds = [];
const cardsWon = []

function createBoard() {

    for (let i = 0; i < cardArray.length; i++) {
        const card =  document.createElement('img');   
        card.setAttribute('src', 'images/31958272.jpg');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        gridDisplay.appendChild(card);
    }
}

createBoard()

function checkMatch() {

    const cards = document.querySelectorAll('img');
    const optionOneId = cardsChoosersIds[0];
    const optionTwoId = cardsChoosersIds[1];

    if (optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/pure-white-background-85a2a7fd.jpg');
        cards[optionTwoId].setAttribute('src', 'images/pure-white-background-85a2a7fd.jpg');
        alert('You Have clicked the same Image!');
    }
    
    if (cardChoices[0] == cardChoices[1]) {
        alert('You Found a Match!');
        cards[optionOneId].setAttribute('src', 'images/pure-white-background-85a2a7fd.jpg');
        cards[optionTwoId].setAttribute('src', 'images/pure-white-background-85a2a7fd.jpg');
        cards[optionOneId].removeEventListener('click', flipCard);
        cards[optionTwoId].removeEventListener('click', flipCard);
        cardsWon.push(cardChoices);
    }else {
        cards[optionOneId].setAttribute('src', 'images/31958272.jpg');
        cards[optionTwoId].setAttribute('src', 'images/31958272.jpg');
        alert('Sorry! Try Again')
    }

    scoreDisplay.textContent = cardsWon.length;
    cardChoices = []
    cardsChoosersIds = []

    if (cardsWon.length == cardArray.length/2) {
        scoreDisplay.textContent = 'Congratulations You Found Them All!'
        document.getElementById('result').style.color = "green"
    }

}

function flipCard() {
    console.log(cardArray);
    const cardId =  this.getAttribute('data-id');
    cardChoices.push(cardArray[cardId].name);
    cardsChoosersIds.push(cardId);
    this.setAttribute('src', cardArray[cardId].img)

    if (cardChoices.length === 2) {
        setTimeout( checkMatch, 500);
    }
}