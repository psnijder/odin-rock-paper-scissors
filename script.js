function getComputerChoice() {
    Math.floor(Math.random() * 3);

    let computerChoice;
    switch(Math.floor(Math.random() * 3)) {
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

let computerScore = 0;
let playerScore = 0;

const results = document.getElementById("results");
const score = document.getElementById("score");
const displayPlayerScore = document.getElementById("playerScore");
const displayComputerScore = document.getElementById("computerScore");

function playRound(computerChoice, playerChoice) {
    if (computerChoice === playerChoice) {
        results.textContent = "Round is a tie!";
    } else if (computerChoice === "rock") {
        if (playerChoice === "scissors") {
            results.textContent = "Computer picked rock and won round!";
            computerScore++;
            displayComputerScore.textContent = computerScore;
        } else {
            results.textContent = "Computer picked rock. Human won round!";
            playerScore++;
            displayPlayerScore.textContent = playerScore;
        }
    } else if (computerChoice === "paper") {
        if (playerChoice === "rock") {
            results.textContent = "Computer picked paper and won round!";
            computerScore++;
            displayComputerScore.textContent = computerScore;
        } else {
            results.textContent = "Computer picked paper. Human won round!";
            playerScore++;
            displayPlayerScore.textContent = playerScore;
        }
    } else if (computerChoice === "scissors") {
        if (playerChoice === "paper") {
            results.textContent = "Computer picked scissors and won round!";
            computerScore++;
            displayComputerScore.textContent = computerScore;
        } else {
            results.textContent = "Computer picked scissors. Human won round!";
            playerScore++;
            displayPlayerScore.textContent = playerScore;
        }
    }

    if (computerScore == 5 || playerScore == 5) {
        rockButton.remove();
        paperButton.remove();
        scissorsButton.remove();

        if (computerScore == 5) {
            results.textContent = "Game is over. Computer won!";
        } else {
            results.textContent = "Game is over. Player won!";
        }
    }
}

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

rockButton.addEventListener("click", () => {
    playRound(getComputerChoice(), "rock");
    });

paperButton.addEventListener("click", () => {
    playRound(getComputerChoice(), "paper");
    });

scissorsButton.addEventListener("click", () => {
    playRound(getComputerChoice(), "scissors");
    });