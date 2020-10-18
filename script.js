function computerPlay() {
    let choices = ["rock" , "paper" , "scissors"];
    let choice = choices[Math.floor(Math.random() * 3)]
    return choice;
}

//ask player to pick rock paper or scissors
//play single round


function playRound(playerSelection, computerSelection) {
    const playerPickLowerCase = playerSelection.toLowerCase();
    switch (playerPickLowerCase) {
        case "rock":
            switch (computerSelection) {
                case "rock":
                    return "Tie! Rock vs rock";
                    break;
                case "paper":
                    return "You lose! Paper beats rock";
                    break;
                case "scissors":
                    return "You win! Scissors beat rock";
                default:
                    break;
            }
            break;
        case "paper":
            switch (computerSelection) {
                case "rock":
                    return "You win! Paper beats rock";
                    break;
                case "paper":
                    return "Tie! Paper vs paper";
                    break;
                case "scissors":
                    return "You lose! Scissors beats paper";
                default:
                    break;
            }
            break;
        case "scissors":
            switch (computerSelection) {
                case "rock":
                    return "You lose! Rock beats scissors";
                    break;
                case "paper":
                    return "You win! Scissors beats paper";
                    break;
                case "scissors":
                    return "Tie! Scissors vs scissors";
                default:
                    break;
            }
            break;

        default:
            return "invalid"
            break;
    }
}

function game() {
    let playerSelection = "";
    let computerSelection = computerPlay();
    let computerScore = 0;
    let playerScore = 0;
    let highestScore = Math.max(computerScore, playerScore);
    
    while (highestScore<5) {
        playerSelection = prompt(`enter rock, paper, or scissors \r\n You: ${ playerScore } PC: ${ computerScore }`);
        if (playRound(playerSelection, computerSelection).substring(0, 5) == "You w") {
            playerScore += 1;
        } else if (playRound(playerSelection, computerSelection).substring(0, 5) == "You l") {
            computerScore += 1;
        }
        console.log(playRound(playerSelection, computerSelection));
        highestScore = Math.max(computerScore, playerScore);
        computerSelection = computerPlay();
    }
    
    alert(`FINAL SCORE: \r\n YOU: ${playerScore} PC: ${computerScore}`)


}

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
        switch (button.textContent) {
            case "rock":
                playRound("rock",computerPlay);
                break;
            case "paper":
                playRound("paper", computerPlay);
                break;
            case "scissors":
                playRound("scissors", computerPlay);
                break;
            default:
                break;
        }
    });
});