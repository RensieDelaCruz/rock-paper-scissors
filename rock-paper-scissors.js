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
    } else if ((pSelection === "rock" && cSelection === "scissors")
        || (pSelection === "paper" && cSelection === "rock")
        || (pSelection === "scissors" && cSelection === "paper")) {
        message = `You Win! ${pSelection} beats ${cSelection}`;
        playerScore++;
    } else if ((pSelection === "rock" && cSelection === "paper")
        || (pSelection === "paper" && cSelection === "scissors")
        || (pSelection === "scissors" && cSelection === "rock")) {
        message = `You Lose! ${cSelection} beats ${pSelection}`;
        computerScore++;
    } else {
        message = "PLEASE ENTER A VALID CHOICE";
    }

    return message;
}

function game(e) {
    let playerSelection = e.target.id;
    let computerSelection = getComputerChoice();

    const playerPhotoContainer = document.querySelector('#player.photo-container');
    const playerChoicePhoto = document.querySelector('.player-choice-photo');
    const computerPhotoContainer = document.querySelector('#computer.photo-container');
    const computerChoicePhoto = document.querySelector('.computer-choice-photo');

    displayChoice(playerSelection, playerPhotoContainer, playerChoicePhoto);
    displayChoice(computerSelection, computerPhotoContainer, computerChoicePhoto);

    const buttonContainer = document.querySelector('.buttonContainer');
    const resultDiv = document.querySelector('#result');
    const playerScoreDiv = document.querySelector('#playerScore');
    const computerScoreDiv = document.querySelector('#computerScore');

    const finalResultDiv = document.createElement('div');

    resultDiv.textContent = `${playRound(playerSelection, computerSelection)}`;
    playerScoreDiv.textContent = `Score: ${playerScore}`;
    computerScoreDiv.textContent = `Score: ${computerScore}`;

    if (playerScore === 5) {
        resultDiv.textContent = 'You Won! Lesssgoooo!';
        containerDiv.removeChild(buttonContainer);
        tryAgain();
    } else if (computerScore === 5) {
        resultDiv.textContent = 'Loser! Better luck next time';
        containerDiv.removeChild(buttonContainer);
        tryAgain();
    }
}

function tryAgain() {
    const tryAgainButton = document.createElement('button');
    tryAgainButton.textContent = 'Try Again';
    tryAgainButton.style.alignSelf = 'center';
    tryAgainButton.style.marginTop = '20px';
    tryAgainButton.addEventListener('click', () => {
        document.location.reload();
    });
    containerDiv.appendChild(tryAgainButton);
}

function displayChoice(choice, parent, child) {
    const newChoicePhoto = document.createElement('img');
    const className = child.getAttribute('class');

    if (choice === 'rock') {
        newChoicePhoto.setAttribute('src', 'images/rock.png');
        newChoicePhoto.setAttribute('alt', 'emoji photo of a rock');
        newChoicePhoto.classList.add(className);
        parent.replaceChild(newChoicePhoto, child);
    } else if (choice === 'paper') {
        newChoicePhoto.setAttribute('src', 'images/paper.png');
        newChoicePhoto.setAttribute('alt', 'emoji photo of a paper');
        newChoicePhoto.classList.add(className);
        parent.replaceChild(newChoicePhoto, child);
    } else if(choice === 'scissors') {
        newChoicePhoto.setAttribute('src', 'images/scissors.png');
        newChoicePhoto.setAttribute('alt', 'emoji photo of a scissors');
        newChoicePhoto.classList.add(className);
        parent.replaceChild(newChoicePhoto, child);
    }
}