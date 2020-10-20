function computerPlay() {
    let choices = ["rock" , "paper" , "scissors"];
    let choice = choices[Math.floor(Math.random() * 3)]
    return choice;
}

function playRound(playerSelection) {
    let computerSelection = computerPlay();
    const playerPickLowerCase = playerSelection.toLowerCase();
    switch (playerPickLowerCase) {
        case "rock":
            switch (computerSelection) {
                case "rock":
                    return [0, 0];
                    break;
                case "paper":
                    return [0, 1];
                    break;
                case "scissors":
                    return [1, 0];
                default:
                    break;
            }
            break;
        case "paper":
            switch (computerSelection) {
                case "rock":
                    return [1, 0];
                    break;
                case "paper":
                    return [0, 0];
                    break;
                case "scissors":
                    return [0, 1];
                default:
                    break;
            }
            break;
        case "scissors":
            switch (computerSelection) {
                case "rock":
                    return [0, 1];
                    break;
                case "paper":
                    return [1, 0];
                    break;
                case "scissors":
                    return [0, 0];
                default:
                    break;
            }
            break;

        default:
            return "invalid"
            break;
    }
}

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

const title = document.querySelector('#fightme-title')
const scoreCard = document.querySelector('#score');
const playerScoreDom = document.querySelector('#score-player');
const pcScoreDom = document.querySelector('#score-pc');

let score = [0, 0];
let playerScore = 0;
let pcScore = 0;

//let highestScore = Math.max(computerScore, playerScore);

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
    
    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {

        if (Math.max(playerScore, pcScore)< 5) {
            let playerTemp = playRound(button.textContent);
            console.log(playerTemp);
            playerScore += playerTemp[0];
            pcScore += playerTemp[1];
            playerScoreDom.innerHTML = playerScore;
            pcScoreDom.innerHTML = pcScore;
        } 
        if (playerScore >= 5) {
            title.innerHTML = "a a a r r g h h h . . . d e f e a t . . ."
        } else if (pcScore >= 5) {
            title.innerHTML = "f a r e w e l l . . ."
        }
    });
});