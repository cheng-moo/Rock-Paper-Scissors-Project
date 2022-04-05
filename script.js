function computerPlay () {
    const choices = ['rock','paper','scissors'];
    let comChoice = choices[Math.floor(Math.random()*3)];
    return comChoice;
}
//console.log(computerPlay())
function playRound (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {return 'Draw'}
    switch (playerSelection) {
        case 'rock':
              if(computerSelection === 'paper') return 'You Lose! Paper beats Rock';
              if(computerSelection === 'scissors') return 'You Win! Rock beats Scissors';
              break;
        case 'paper':
            if(computerSelection === 'rock') return 'You Win! Paper beats Rock';
            if(computerSelection === 'scissors') return 'You Lose! Scissors beats Paper';
            break;
        case 'scissors':
            if(computerSelection === 'paper') return 'You Win! Scissors beats Paper';
            if(computerSelection === 'rock') return 'You Lose! Rock beats Scissors';
            break;
        default: 
            return 'You need to choose a valid selection';
    }
}
// const playerSelection = 'rock';
// const computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection));
let com = 0;
let player = 0;
let result = document.querySelector('.result');
let buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', choose);
})
let comScore = document.querySelector('.comScore');
let playerScore = document.querySelector('.playerScore');

//Ending Container
const endGame = document.querySelector('.end');
//Round Counter and where to store it
let round = 1;
let rounds = document.querySelector('.round');

function choose (e) {
    // console.log(com);
    if (round < 5) {
    let resultText = document.createTextNode('')
    //empty the result text for each click
    result.textContent = ''
    //Store the playerSelection value in a variable
    let playerSelection;
    
    if (e.target.classList.contains('rock')) {
        playerSelection = e.target.textContent;
    } else if (e.target.classList.contains('paper')) {
        playerSelection = e.target.textContent;
    } else if (e.target.classList.contains('scissors')) {
        playerSelection = e.target.textContent;
    }

    // console.log(playRound(playerSelection.toLowerCase(), computerPlay()))
    //Use this var to playRound to add the result to the new created resultText 
       resultText.textContent = playRound(playerSelection.toLowerCase(), computerPlay())
       //append the resultText in result element
        result.appendChild(resultText);
        // console.log(resultText.textContent);
        ++round;
        // console.log(round);
        rounds.textContent = `Round: ${round}`
        if (resultText.textContent.includes('Lose!')) {
            com++
            comScore.textContent = com; 
        } else if (resultText.textContent.includes('Win!')) {
            player++
            playerScore.textContent = player;
        } else if (resultText.textContent.includes('Draw')) {
            com++
            comScore.textContent = com;
            player++
            playerScore.textContent = player;

        }
    } else {
        buttons.forEach(button => {
            button.removeEventListener('click',choose);
        })
        endGame.classList.remove('hide');
        endGame.appendChild(winner())
        
    }
}
function winner () {
    let winner = document.createElement('div');
    winner.className = 'winner';
    if (com > player) {
        winner.textContent = 'You Lose! :(';
        winner.style.color = "#a93030";
    } else if (com < player) {
        winner.textContent = 'You Win! :)';
        winner.style.color = 'green'
    } else if (com === player) {
        winner.textContent = 'Draw';
    }
    return winner;
}

