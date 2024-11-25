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

/*
function getHumanChoice() {
    let humanChoice = "rock";
    
    while (true) {
        humanChoice = prompt("Choose 'Rock', 'Paper' or 'Scissors'.").toLowerCase();

        if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
            return humanChoice;
        }

    alert("Invalid input, please try again.")
    }
}
*/

let computerScore = 0;
let humanScore = 0;

const results = document.getElementById("results");
const score = document.getElementById("score");
const displayPlayerScore = document.getElementById("playerScore");
const displayComputerScore = document.getElementById("computerScore");

function playRound(computerChoice, humanChoice) {
    if (computerChoice === humanChoice) {
        results.textContent = "Round is a tie!";
    } else if (computerChoice === "rock") {
        if (humanChoice === "scissors") {
            results.textContent = "Computer picked rock and won round!";
            computerScore++;
            displayComputerScore.textContent = computerScore;
        } else {
            results.textContent = "Computer picked rock. Human won round!";
            humanScore++;
            displayPlayerScore.textContent = humanScore;
        }
    } else if (computerChoice === "paper") {
        if (humanChoice === "rock") {
            results.textContent = "Computer picked paper and won round!";
            computerScore++;
            displayComputerScore.textContent = computerScore;
        } else {
            results.textContent = "Computer picked paper. Human won round!";
            humanScore++;
            displayPlayerScore.textContent = humanScore;
        }
    } else if (computerChoice === "scissors") {
        if (humanChoice === "paper") {
            results.textContent = "Computer picked scissors and won round!";
            computerScore++;
            displayComputerScore.textContent = computerScore;
        } else {
            results.textContent = "Computer picked scissors. Human won round!";
            humanScore++;
            displayPlayerScore.textContent = humanScore;
        }
    }

    if (computerScore == 5 || humanScore == 5) {
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

/*
function playGame() {
    for (let round = 0; round < 5; round++) {
        let computerSelection = getComputerChoice();
        let humanSelection = getHumanChoice();

        playRound(computerSelection, humanSelection);
    }

    if (computerScore === humanScore) {
        return(alert(`The final score is: \nComputer: ${computerScore},\nHuman: ${humanScore}.\nThe game is a tie!`));
    } else if (computerScore > humanScore) {
        return(alert(`The final score is: \nComputer: ${computerScore},\nHuman: ${humanScore}.\nComputer won!`));
    } else if (humanScore > computerScore) {
        return(alert(`The final score is: \nComputer: ${computerScore},\nHuman: ${humanScore}.\nHuman won!`));
    }
}
*/

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