function getComputerChoice() {
    Math.floor(Math.random() * 3);

    let choice;
    switch(Math.floor(Math.random() * 3)) {
        case 0:
            choice = "Rock";
            break;
        case 1:
            choice = "Paper";
            break;
        case 2:
            choice = "Scissors";
            break;
    }

    return choice;
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