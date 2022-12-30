// challenge 3

function rpsGame(yourChoice) {
    console.log(yourChoice);
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(randToRsInt());
    console.log(botChoice);
    results = decidedWinner(humanChoice, botChoice);
    console.log(results);
    message = finalMessage(results);
    console.log(message);
    rpsFrontEnd(yourChoice.id, botChoice, message)
}

function randToRsInt() {
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
    return ['rock', 'paper', 'Scissors'][number];
}

function decidedWinner(yourChoice, computerChoice) {
    var rpsDatabase = {
        'rock': {'Scissors': 1, 'rock': 0.5, 'paper': 0},
        'paper': {'rock': 1, 'paper': 0.5, 'Scissors': 0},
        'Scissors': {'paper': 1, 'Scissors': 0.5, 'rock': 0}
    }

    var yourScore = rpsDatabase[yourChoice] [computerChoice];
    var computerScore = rpsDatabase[computerChoice] [yourChoice];

    return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]) {
    if (yourScore === 0) {
        return {'message': 'You Lost!', 'color': 'red'}
    }
    else if (yourScore === 0.5) {
        return {'message': 'You Tie!', 'color': 'yellow'}
    }
    else {
        return {'message': 'You Win!', 'color': 'green'}
    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
    var imageDatabases = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'Scissors': document.getElementById('Scissors').src
    }
    // remove all the images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('Scissors').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imageDatabases[humanImageChoice] + "'height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1)'>"
    messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px;'>" + finalMessage['message'] + "</h1>"
    botDiv.innerHTML = "<img src='" + imageDatabases[botImageChoice] + "'height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1)'>"

    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
}