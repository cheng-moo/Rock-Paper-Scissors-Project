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
let result = document.querySelector('.result');
let buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', choose);
})
let comScore = document.querySelector('.comScore');
let playerScore = document.querySelector('.playerScore');
let com = 0;
let player = 0;
//Ending Container
const endGame = document.querySelector('.end');
//Round Counter and where to store it
let round = 1;
let rounds = document.querySelector('.round');

function choose (e) {
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
        console.log(resultText.textContent);
        ++round;
        console.log(round);
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
            this.removeEventListener('click', choose);
            endGame.classList.remove('hide');
            return;
       }
}

// function game () {
//     let round = 1
//     let playerScore = 0;
//     let computerScore = 0;
//     for (let i = 0; i < 5; i++) {
//         round++
//         let playerSelection = (prompt('Rock, Paper, Scissors?', '')).trim().toLowerCase();
//         let computerSelection = computerPlay();
//         if (playRound(playerSelection, computerSelection).includes('Win!')) {
//             playerScore++;
//         } else if (playRound(playerSelection, computerSelection).includes('Lose!')) {
//             computerScore++
//         } else if (playRound(playerSelection, computerSelection).includes('Draw')) {
//             playerScore++;
//             computerScore++;
//         } else if (playRound(playerSelection, computerSelection).includes('valid')) {
//             return 'You need to choose a valid selection';
//         }
//         console.log(`Player : ${playerScore}`)
//         console.log(`Computer : ${computerScore}`)

//     }
//     let winner;
//     if (playerScore > computerScore) {
//         winner = 'You Win The Game';
//     } else if (playerScore < computerScore) {
//         winner = 'You Lose The Game';
//     } else if (playerScore === computerScore) {
//         winner = 'Draw';
//     }
//     return winner;
// }
// console.log(game())