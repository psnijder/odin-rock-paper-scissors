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

function playRound(computerChoice, humanChoice) {
    if (computerChoice === humanChoice) {
        results.textContent = "Tie!";
    } else if (computerChoice === "rock") {
        if (humanChoice === "scissors") {
            results.textContent = "Computer picked rock and won!";
            computerScore++;
        } else {
            results.textContent = "Computer picked rock. Human won!";
            humanScore++;
        }
    } else if (computerChoice === "paper") {
        if (humanChoice === "rock") {
            results.textContent = "Computer picked paper and won!";
            computerScore++;
        } else {
            results.textContent = "Computer picked paper. Human won!";
            humanScore++;
        }
    } else if (computerChoice === "scissors") {
        if (humanChoice === "paper") {
            results.textContent = "Computer picked scissors and won!";
            computerScore++;
        } else {
            results.textContent = "Computer picked scissors. Human won!";
            humanScore++;
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