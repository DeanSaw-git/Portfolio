// Notes to self 
// When using query, to get an element by ID - You use # in front of the ID Name
// When using query, to get an element by class - you use . infront of the class name
// When using query, to get an eleemnt by tag IE: <header> - you use the tag name, it will select all of them

let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreboard_div = document.querySelector(".score_board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");



function getComputerChoice(){
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}
console.log(getComputerChoice());

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}


function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    
    result_p.innerHTML = `${convertToWord(userChoice)}(Dean) beats ${convertToWord(computerChoice)}(Comp), You Win!`;
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(() => document.getElementById(userChoice).classList.remove('green-glow'), 1000);
}



function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    
    result_p.innerHTML = `${convertToWord(userChoice)}(Comp) beats ${convertToWord(computerChoice)}(Dean), You Lose!`;
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(() => document.getElementById(userChoice).classList.remove('red-glow'), 1000);
}

function draw(userChoice, computerChoice) {
    userScore_span.innerHTML = userScore ;
    computerScore_span.innerHTML = computerScore ;
    
    result_p.innerHTML = `${convertToWord(userChoice)}(Dean) stalemates against ${convertToWord(computerChoice)}(Comp), Its a Draw!`;
    document.getElementById(userChoice).classList.add('gray-glow');
    setTimeout(() => document.getElementById(userChoice).classList.remove('gray-glow'), 1000);
}


function game(userChoice) {
   const computerChoice = getComputerChoice();
   console.log("computer choice => " + computerChoice);
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
        win(userChoice, computerChoice);
        break;
        case "rp":
        case "ps":
        case "sr":
        lose(userChoice, computerChoice);
        break;
        case "rr":
        case "pp":
        case "ss":
        draw(userChoice, computerChoice);
        break;                      
    }
}

game("c");


function main(){

    rock_div.addEventListener('click', () => { game("r")});

    paper_div.addEventListener('click', () =>{ game("p")});

    scissors_div.addEventListener('click', () => {game("s")});
    }

main();