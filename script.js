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

function getHumanChoice() {
    let choice = prompt("Type rock, paper or scissors");
    return choice.toLowerCase()
}

function playGame() {
    let computerScore = 0;
    let humanScore = 0;

    function playRound() {
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();
    
        if (computerChoice === humanChoice) {
            console.log(`CPU chose ${computerChoice}. It's a draw!`);
        } else if (computerChoice === "rock" && humanChoice === "paper") {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            return humanScore++
        } else if (computerChoice === "paper" && humanChoice === "scissor") {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            return humanScore++
        } else if (computerChoice === "scissor" && humanChoice === "rock") {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            return humanScore++
        } else if (humanChoice === "rock" && computerChoice === "paper") {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            return computerScore++
        } else if (humanChoice === "paper" && computerChoice === "scissor") {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            return computerScore++
        } else if (humanChoice === "scissor" && computerChoice === "rock") {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            return computerScore++
        } else {
            console.log("Wrong input!");
        }
    }

    for (let i = 1; i <= 5; i++) {
        console.log(`Round ${i}`)
        playRound();
        console.log(`Your score: ${humanScore}`);
        console.log(`Computer score: ${computerScore}`);
    }

    if (computerScore === humanScore) {
        console.log("Draw!");
    } else if (computerScore > humanScore) {
        console.log("You lose!");
    } else {
        console.log("You win!");
    }


}

playGame();