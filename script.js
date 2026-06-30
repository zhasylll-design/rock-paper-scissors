function getComputerChoice() {
    const random_num = Math.floor(Math.random() * 3) + 1;
    if (random_num == 1){
        console.log('paper');
        return 'paper';
    } else if (random_num == 2) {
        console.log('rock');
        return 'rock';
    } else {
        console.log('scissors');
        return 'scissors';
    }
}

function getHumanChoice() {
    const choice = prompt("Rock paper scissors?", "")
    let ins_choice = choice.toLowerCase()
    console.log(ins_choice)
    return ins_choice
}

function playGame(){
    let humanScore = 0
    let computerScore = 0

    function playRound(humanChoice, computerChoice){
        if (humanChoice == computerChoice){
            console.log('It is a tie!')
        } else if (humanChoice == 'rock' && computerChoice == 'paper'){
            console.log(`You lose! Paper beats Rock`)
            computerScore += 1
        } else if (humanChoice == 'rock' && computerChoice == 'scissors'){
            console.log('You win! Rock beats Scissors')
            humanScore += 1
        } else if (humanChoice == 'paper' && computerChoice == 'rock'){
            console.log('You win! Paper beats Rock')
            humanScore += 1
        } else if (humanChoice == 'paper' && computerChoice == 'scissors'){
            console.log('You lose! Scissors beat Paper')
            computerScore += 1
        } else if (humanChoice == 'scissors' && computerChoice == 'rock'){
            console.log('You lose! Rock beats Scissors')
            computerScore += 1
        } else if (humanChoice == 'scissors' && computerChoice == 'paper'){
            console.log('You win! Scissors beat Paper')
            humanScore += 1
        }
    }

    for (let i = 1; i<=5; i++){
        playRound(getHumanChoice(), getComputerChoice())
    }

    if (humanScore > computerScore){
        console.log(`You won! ${humanScore} vs ${computerScore}`)
    } else if (humanScore < computerScore){
        console.log(`You lost! ${humanScore} vs ${computerScore}`)
    } else{
        console.log(`It is a tie! ${humanScore} vs ${computerScore}`)
    }
}

playGame()