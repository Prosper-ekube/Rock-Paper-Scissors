alert("Welcome to Rock Paper Scissors");

const computerChoiceExhibit = document.getElementById("computer_choice");
const playerChoiceExhibit = document.getElementById("player_choice");
const commentsExhibit = document.getElementById("comments");
const buttonAllChoices = document.querySelectorAll("button");
const playerPoints = document.getElementById("player_score");
const computerPoints = document.getElementById("computer_score");
let playerChoice;
let computerChoice;
let playerScore = 0;
let computerScore = 0;

buttonAllChoices.forEach(choice => choice.addEventListener("click", (r) => {
    playerChoice = r.target.id;
    playerChoiceExhibit.innerHTML = playerChoice;
    getComputerChoice();
    playRound();
}))

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * buttonAllChoices.length) + 1;

    if (randomNumber === 1) {
        computerChoice = "rock"
    }
    if (randomNumber === 2) {
        computerChoice = "paper"
    }
    if (randomNumber === 3) {
        computerChoice = "scissors"
    }
    computerChoiceExhibit.innerHTML = computerChoice;
}

function disableButtons() {
    buttonAllChoices.forEach(choice => {
        choice.disabled = true
    })
}

function playRound() {
    if (playerChoice === computerChoice) {
        comments = "It's a tie";
    } else if (playerChoice === "rock" && computerChoice === "paper") {
        comments = "You lose, paper wraps your rock up like a little baby";
        computerPoints.innerHTML = ++computerScore;
    } else if (playerChoice === "scissors" && computerChoice === "paper" || playerChoice === "rock" && computerChoice === "scissors" || playerChoice === "paper" && computerChoice === "rock") {
        comments = "You win!!!";
        playerPoints.innerHTML = ++playerScore;
    } else if (playerChoice === "paper" && computerChoice === "scissors") {
        comments = "Haaaaaaa,  you lose, scissors cuts paper into shreds!";
        computerPoints.innerHTML = ++computerScore;
    } else if (playerChoice === "scissors" && computerChoice === "rock") {
        comments = "Haq, haq, haaaaaq, you lose, rock smashes scissors to bits and pieces!";
        computerPoints.innerHTML = ++computerScore
    } else {
        comments = null
    }
    commentsExhibit.innerHTML = comments
}

/*if (computerScore === 0) {
    commentsExhibit.innerHTML = "I won the game!!!";
    disableButtons()
} else if (playerScore === 0) {
    commentsExhibit.innerHTML = "You bested me!!!";
    disableButtons()
}*/


