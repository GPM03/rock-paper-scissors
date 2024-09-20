const buttonRock = document.querySelector(".rock");
const buttonPaper = document.querySelector(".paper");
const buttonScissor = document.querySelector(".scissor");

const roundResult = document.querySelector(".round-result");
const displayHumanScore = document.querySelector(".human-score");
const displayRound = document.querySelector(".round");
const displayComputerScore = document.querySelector(".computer-score")
const displayTies = document.querySelector(".ties");
const displayResult = document.querySelector(".game-result");

let round = 0;
let computerScore = 0;
let humanScore = 0;
let ties = 0;

function getComputerChoice() {
    let choice = Math.random();
    if (choice <= 0.333) {
        return "rock"
    } else if (choice > 0.333 && choice <= 0.666) {
        return "paper"
    } else {
        return "scissor"
    }
}

function playGame(computerChoice, humanChoice) {

    function playRound() {
    
        if (computerChoice === humanChoice) {
            roundResult.textContent = `Tie!`;
            ties++;
            displayTies.textContent = `Ties: ${ties}`;

        } else if (computerChoice === "rock" && humanChoice === "paper") {
            roundResult.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
            humanScore++;
            displayHumanScore.textContent = `Player: ${humanScore}`;

        } else if (computerChoice === "paper" && humanChoice === "scissor") {
            roundResult.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
            humanScore++;
            displayHumanScore.textContent = `Player: ${humanScore}`;
            
        } else if (computerChoice === "scissor" && humanChoice === "rock") {
            roundResult.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
            humanScore++;
            displayHumanScore.textContent = `Player: ${humanScore}`;

        } else if (humanChoice === "rock" && computerChoice === "paper") {
            roundResult.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
            computerScore++;
            displayComputerScore.textContent = `Computer: ${computerScore}`;

        } else if (humanChoice === "paper" && computerChoice === "scissor") {
            roundResult.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
            computerScore++;
            displayComputerScore.textContent = `Computer: ${computerScore}`;

        } else if (humanChoice === "scissor" && computerChoice === "rock") {
            roundResult.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
            computerScore++;
            displayComputerScore.textContent = `Computer: ${computerScore}`;

        } else {
            roundResult.textContent = "Wrong input!";
        }

        round++;
        displayRound.textContent = `Round: ${round}`;

    }

    playRound();

    if (computerScore === humanScore) {
        displayResult.textContent = "It's a tie!";
    } else if (computerScore > humanScore) {
        displayResult.textContent = "You lose!";
    } else {
        displayResult.textContent = "You win!";
    }
}

buttonRock.addEventListener("click", () => {
    playGame(getComputerChoice(), "rock");
});

buttonPaper.addEventListener("click", () => {
    playGame(getComputerChoice(), "paper");
});

buttonScissor.addEventListener("click", () => {
    playGame(getComputerChoice(), "scissor");
});