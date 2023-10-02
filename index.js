

let systemInput;

function computerChoice() {
    let weaponChoice = ["Rock", "Paper", "Scissor"];
    systemInput = Math.floor(Math.random() * weaponChoice.length);
    let choice = weaponChoice[systemInput].toUpperCase();
    const systemWeapon = document.querySelector('#systeminput');
    systemWeapon.innerText = `Computers weapon is: ${choice}`;


    return choice;
}



function RPS(system, user) {

    if (system === user) {

        const roundWinner = document.querySelector('.round');
        roundWinner.innerText = "match Tie, Try again";

    } else if (system === "ROCK" && user === "SCISSOR") {
        const roundWinner = document.querySelector('.round');
        roundWinner.innerText = `Computer wins, ${system} beats ${user}`;
        computerScore += 1;
    }
    else if (system === "PAPER" && user === "ROCK") {

        const roundWinner = document.querySelector('.round');
        roundWinner.innerText = `Computer wins, ${system} beats ${user}`;
        computerScore += 1;
    } else if (system === "SCISSOR" && user === "PAPER") {

        const roundWinner = document.querySelector('.round');
        roundWinner.innerText = `Computer wins, ${system} beats ${user}`;
        computerScore += 1;

    } else if (system === "SCISSOR" && user === "ROCK") {
        const roundWinner = document.querySelector('.round');
        roundWinner.innerText = `You are a winner,${user} beats ${system}`;
        userScore += 1;

    }
    else if (system === "PAPER" && user === "SCISSOR") {

        const roundWinner = document.querySelector('.round');
        roundWinner.innerText = `You are a winner,${user} beats ${system}`;
        userScore += 1;
    }
    else if (system === "ROCK" && user === "PAPER") {
        const roundWinner = document.querySelector('.round');
        roundWinner.innerText = `You are a winner,${user} beats ${system}`;
        userScore += 1;

    }
    else {
        return null;
    }
}




let userWeapon;

const btn1 = document.getElementById('btn1').addEventListener('click', function () {
    userWeapon = 'Rock';
    userWeapon = userWeapon.toUpperCase();
    const userInput = document.querySelector('#userinput');
    userInput.innerText = `Your weapon is: ${userWeapon}`;
    console.log(userWeapon);
    game();






});
const btn2 = document.getElementById('btn2').addEventListener('click', function () {
    userWeapon = 'Paper';
    userWeapon = userWeapon.toUpperCase();
    const userInput = document.querySelector('#userinput');
    userInput.innerText = `Your weapon is: ${userWeapon}`;
    console.log(userWeapon);
    game();

});
const btn3 = document.getElementById('btn3').addEventListener('click', function () {
    userWeapon = 'Scissor';
    userWeapon = userWeapon.toUpperCase();
    const userInput = document.querySelector('#userinput');
    userInput.innerText = `Your weapon is: ${userWeapon}`;

    console.log(userWeapon);
    game();


});

function game() {

    let userScore = 0, computerScore = 0;

    // while (userScore < 5 && computerScore < 5) {

        let user = userWeapon;
        let computer = computerChoice();
        RPS(computer, user);
        let gameResult = computerScore > userScore ? "Computer is a winner" : computerScore === userScore ? "Match tie" : "You are winner";

        const gameWinner = document.querySelector('.result');
        gameWinner.innerText = `Match Result: ${gameResult}`;



        
    // }
    document.querySelector('.score').innerText = `Your Score is: ${userScore}\n Computer Score is: ${computerScore}`;

}
game();





