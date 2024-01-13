const choices = ["paper", "rock", "scissors"];
const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");
const resultDisplay = document.getElementById("resultDisplay");

function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if(playerChoice === computerChoice) {
        result ="IT'S A TIE!";
    }
    else{
        switch(playerChoice) {
            case "paper":
                result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "rock":
                result = (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
                break;
        }
    }

    playerScore.textContent = 'PLAYER: ${}'
    computerScore.textContent = 'COMPUTER: ${computerChoice}';
    resultDisplay.textContent = result;
}