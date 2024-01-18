const choices = ["paper", "rock", "scissors"];
const playerScore = document.getElementById("playerScore");
const playerResult = document.getElementById("playerResult");
const computerScore = document.getElementById("computerScore");
const computerResult = document.getElementById("computerResult");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreBoard = document.getElementById("playerScoreBoard");
const computerScoreBoard = document.getElementById("computerScoreBoard");

let playerWins = 0;
let computerWins = 0;

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

    playerResult.textContent = playerChoice;
    computerResult.textContent = computerChoice;
    resultDisplay.textContent = result;

    switch(result){
        case "YOU WIN!":
            playerWins++;
            playerScoreBoard.textContent = playerWins;
            resultDisplay.classList.add("purpleText");
            break;
        case "YOU LOSE!":
            computerWins++;
            computerScoreBoard.textContent = computerWins;
            resultDisplay.classList.add("blueText")
            break;
    }
}