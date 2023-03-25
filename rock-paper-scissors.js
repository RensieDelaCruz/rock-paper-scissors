const containerDiv = document.querySelector('#container');

const buttons = document.querySelectorAll('.buttonContainer button');
buttons.forEach((button) => {
    button.addEventListener('click', game);
});

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

function game(e) {
    let playerSelection = e.target.id;
    let computerSelection = getComputerChoice();

    const buttonContainer = document.querySelector('.buttonContainer');
    const playerDiv = document.querySelector('#playerSelection');
    const computerDiv = document.querySelector('#computerSelection');
    const roundResultDiv = document.querySelector('#roundResult');
    const playerScoreDiv = document.querySelector('#playerScore');
    const computerScoreDiv = document.querySelector('#computerScore');

    const finalResultDiv = document.createElement('div');

    playerDiv.textContent = `Player: ${playerSelection}`;
    computerDiv.textContent = `Computer: ${computerSelection}`;
    roundResultDiv.textContent = `Round Result: ${playRound(playerSelection, computerSelection)}`;
    playerScoreDiv.textContent = `Player Score: ${playerScore}`;
    computerScoreDiv.textContent = `Computer Score: ${computerScore}`;

    if (playerScore === 5) {
        finalResultDiv.textContent = 'You Won! Lesssgoooo!';
        containerDiv.appendChild(finalResultDiv);
        containerDiv.removeChild(buttonContainer);
        tryAgain();
    } else if (computerScore === 5) {
        finalResultDiv.textContent = 'You Lose! Huhu, better luck next time!';
        containerDiv.appendChild(finalResultDiv);
        containerDiv.removeChild(buttonContainer);
        tryAgain();
    }
}

function tryAgain() {
    const tryAgainButton = document.createElement('button');
    tryAgainButton.textContent = 'Try Again';
    tryAgainButton.addEventListener('click', () => {
        document.location.reload();
    });
    containerDiv.appendChild(tryAgainButton);
}

