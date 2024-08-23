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

function getHumanChoice() {
    let humanChoice;
    while (true) {
        humanChoice = prompt("Choose 'Rock', 'Paper' or 'Scissors'.").toLowerCase();

        if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
            return humanChoice;
        }

    alert("Invalid input, please try again.")
    }
}

let computerScore = 0;
let humanScore = 0;