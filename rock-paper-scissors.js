/*
Create a counter for both player's and computer's score
Get an input from the user
Get a random choice from the computer from function getComputerChoice
Compare the 2 choices in a function called playRound
playRound should return the winner of that round
Write a new function called game() that will call the playRound that keeps the score and reports a winner or loser at the end
*/

let playerScore = 0;
let computerScore = 0;

/*
Function that will choose a random choice for the computer.
I used the Math.floor() to round down the value that the
Math.random() will give me. That will give me a random number between
0-2 that will be use in a switch case to choose the corresponding choice.
*/
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    let computerChoice;

    switch (choice) {
        case 0:
            computerChoice = "rock";
            break;
        case 1:
            computerChoice = "paper";
            break;
        case 2:
            computerChoice = "scissors";
            break;
    }
    return computerChoice;
}


/*
Function that will play one round of rock-paper-scissors
*/
function playRound(pSelection, cSelection) {

    let message;

    if ((pSelection === "rock" && cSelection === "rock") || (pSelection === "paper" && cSelection === "paper") || (pSelection === "scissors" && cSelection === "scissors")) {
        message = "It's a tie";
    } else if (pSelection === "rock" && cSelection === "scissors") {
        message = "You Win! Rock beats Scissors";
        playerScore++;
    } else if (pSelection === "rock" && cSelection === "paper") {
        message = "You Lose! Paper beats Rock";
        computerScore++;
    } else if (pSelection === "paper" && cSelection === "rock") {
        message = "You Win! Paper beats Rock";
        playerScore++;
    } else if (pSelection === "paper" && cSelection === "scissors") {
        message = "You Lose! Scissors beats Paper";
        computerScore++;
    } else if (pSelection === "scissors" && cSelection === "paper") {
        message = "You Win! Scissors beats Paper";
        playerScore++;
    } else if (pSelection === "scissors" && cSelection === "rock") {
        message = "You Lose! Rock beats Scissors";
        computerScore++;
    } else {
        message = "PLEASE ENTER A VALID CHOICE";
    }

    return message;
}

function game() {

    for (let i = 1; i <= 5; i++) {
        let playerSelection = (prompt("Choose one (Rock, Paper or Scissors): ")).toLowerCase();
        let computerSelection = getComputerChoice();
        console.log("Round " + i);
        console.log("Player: " + playerSelection);
        console.log("Computer: " + computerSelection);
        console.log("Round Result: " + playRound(playerSelection, computerSelection));
        console.log("Player Score: " + playerScore + "\tComputer Score: " + computerScore);
    }

    if (playerScore > computerScore) {
        return "Result: Player Won!";
    } else if (playerScore < computerScore) {
        return "Result: Computer won!";
    } else if (playerScore === computerScore) {
        return "Result: It's a draw!";
    }
}

console.log(game());
