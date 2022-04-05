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
function game () {
    let round = 1
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        round++
        let playerSelection = (prompt('Rock, Paper, Scissors?', '')).trim().toLowerCase();
        let computerSelection = computerPlay();
        if (playRound(playerSelection, computerSelection).includes('Win!')) {
            playerScore++;
        } else if (playRound(playerSelection, computerSelection).includes('Lose!')) {
            computerScore++
        } else if (playRound(playerSelection, computerSelection).includes('Draw')) {
            playerScore++;
            computerScore++;
        } else if (playRound(playerSelection, computerSelection).includes('valid')) {
            return 'You need to choose a valid selection';
        }
        console.log(`Player : ${playerScore}`)
        console.log(`Computer : ${computerScore}`)

    }
    let winner;
    if (playerScore > computerScore) {
        winner = 'You Win The Game';
    } else if (playerScore < computerScore) {
        winner = 'You Lose The Game';
    } else if (playerScore === computerScore) {
        winner = 'Draw';
    }
    return winner;
}
console.log(game())