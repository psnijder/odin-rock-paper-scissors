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
    let humanChoice = "rock";
    
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

function playRound(computerChoice, humanChoice) {
    if (computerChoice === humanChoice) {
        alert("Tie!");
    } else if (computerChoice === "rock") {
        if (humanChoice === "scissors") {
            alert("Computer picked rock and won!");
            computerScore++;
        } else {
            alert("Computer picked rock. Human won!");
            humanScore++;
        }
    } else if (computerChoice === "paper") {
        if (humanChoice === "rock") {
            alert("Computer picked paper and won!");
            computerScore++;
        } else {
            alert("Computer picked paper. Human won!");
            humanScore++;
        }
    } else if (computerChoice === "scissors") {
        if (humanChoice === "paper") {
            alert("Computer picked scissors and won!");
            computerScore++;
        } else {
            alert("Computer picked scissors. Human won!");
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