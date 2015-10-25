////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
	 // Write an expression that operates on a variable called `move`
	 // If a `move` has a value, your expression should evaluate to that value.
	// However, if `move` is not specified / is null, your expression should equal `getInpupt'
	if (move = null) {
		return getInput;
	 } else {
		 return (move's value');
	}	
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
	if (move = null) {
		return randomplay;
	 } else {
		 return (move's value');
	}	
}
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
function getWinner(playerMove,computerMove) {
    var winner;
	if ((playerMove === 'paper' && computerMove === 'rock') || 
		(playerMove === 'rock' && computerMove === 'scissors') || 
		(playerMove === 'scissors' && computerMove === 'paper')) {
		winner = 'player';
	} else if (playerMove === computerMove) {
	    winner = 'tie';
	} else {
	    winner = 'computer';
	} 
	return winner;
}	




function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    
	// Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    var playerMove;
    var computerMove;
    var roundNum = 0;
    var winner;
    var wins = 5;
 
    while (playerWins < wins && computerWins < wins) {
        roundNum++;
 
        // initialize move
        playerMove = getPlayerMove();
        computerMove = getComputerMove();
        console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
 
        // winner for current round
        winner = getWinner(playerMove, computerMove);
        if (winner === 'Player') {
            playerWins+;
        } 
        else if (winner === 'Computer') {
            computerWins+;
        }
        else {
            playerWins = playerWins;
            computerWins = computerWins;
        }
        console.log('Winner for round ' + roundNum + ' is ' + winner);
        console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
    }
 
    // displays overall winner
    if (playerWins > computerWins) {
        console.log('Player wins!\n');
    }
    else {
        console.log('Computer wins!\n');
    }
    return [playerWins, computerWins];
}

