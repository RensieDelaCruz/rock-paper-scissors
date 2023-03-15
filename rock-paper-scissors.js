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
let playerSelection = (prompt("Choose one (Rock, Paper or Scissors): ")).toLowerCase();
let computerSelection = getComputerChoice();

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



