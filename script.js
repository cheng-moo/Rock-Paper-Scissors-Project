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