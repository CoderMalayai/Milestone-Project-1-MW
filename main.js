const choices = ["PAPER", "ROCK", "SCISSORS"];
const playerScore = document.getElementById("playerScore");
const playerResult = document.getElementById("playerResult");
const computerScore = document.getElementById("computerScore");
const computerResult = document.getElementById("computerResult");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreBoard = document.getElementById("playerScoreBoard");
const computerScoreBoard = document.getElementById("computerScoreBoard");
const scoreBoard = document.getElementById("scoreBoard");

document.getElementById('playerScore').style.color = "#921AFF";
document.getElementById('computerScore').style.color = "#2742F0";

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
            case "PAPER":
                result = (computerChoice === "ROCK") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "ROCK":
                result = (computerChoice === "SCISSORS") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "SCISSORS":
                result = (computerChoice === "PAPER") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "PAPER":
                result = (computerChoice === "SCISSORS") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "ROCK":
                result = (computerChoice === "PAPER") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "PAPER":
                result = (computerChoice === "ROCK") ? "YOU WIN!" : "YOU LOSE!";
                break;
        }
    }

    playerResult.textContent = playerChoice;
    computerResult.textContent = computerChoice;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("purpleText", "blueText");

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

    if(playerWins == 5){
        scoreBoard.remove()
        resultDisplay.textContent = "PLAYER WINS!";
    }
    else if(computerWins == 5){ 
        scoreBoard.remove()
        resultDisplay.textContent = "COMPUTER WINS!";
    }
}