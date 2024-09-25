const buttonRock = document.querySelector(".rock");
const buttonPaper = document.querySelector(".paper");
const buttonScissor = document.querySelector(".scissor");

const results = document.querySelector(".results");
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

function playRound(computerChoice, humanChoice) {
    
    if (computerChoice === humanChoice) {
        roundResult.textContent = `Tie! both chose ${computerChoice}`;
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
    displayRound.textContent = `Round ${round}`;

    if (round >= 5) {
        if (computerScore > humanScore) {
            displayResult.textContent = "Game result: You lost!"
        } else if (computerScore < humanScore) {
            displayResult.textContent = "Game result: You won!"
        } else {
            displayResult.textContent = "Game result: Tie!"
        }
    
        buttonRock.style.display = "none";
        buttonPaper.style.display = "none";
        buttonScissor.style.display = "none";
    
        const resetBtn = document.createElement("button");
        resetBtn.textContent = "play again?";
        results.appendChild(resetBtn);
        resetBtn.addEventListener("click", ()=> {
            results.removeChild(resetBtn);

            round = 0;
            computerScore = 0;
            humanScore = 0;
            ties = 0;
    
            roundResult.textContent = "";
            displayHumanScore.textContent = "Player:";
            displayRound.textContent = "Round";
            displayComputerScore.textContent = "Computer:";
            displayTies.textContent = "Ties:";
            displayResult.textContent = "";

            buttonRock.style.display = "inline-block";
            buttonPaper.style.display = "inline-block";
            buttonScissor.style.display = "inline-block";
        })
        
    }

}

buttonRock.addEventListener("click", () => {
    playRound(getComputerChoice(), "rock");
});

buttonPaper.addEventListener("click", () => {
    playRound(getComputerChoice(), "paper");
});

buttonScissor.addEventListener("click", () => {
    playRound(getComputerChoice(), "scissor");
});