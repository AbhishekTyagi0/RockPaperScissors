


let systemInput;

let weaponChoice = ["Rock", "Paper", "Scissor"];
function computerChoice() {
    systemInput = Math.floor(Math.random() * weaponChoice.length);
    let choice = weaponChoice[systemInput].toUpperCase();
    return choice;
}
let userWeapon;
function userChoice() {

    userWeapon = "Enter your Weapon of Choice: ";
    userWeapon = userWeapon.toUpperCase();
    return userWeapon;
}

let userScore=0,computerScore=0;

function RPS(system, user) {

    if (system === user) {
        console.log("match Tie, Try again");
    } else if (system === "ROCK" && user === "SCISSOR") {
        console.log(`Computer wins, ${system} beats ${user}`);
        computerScore += 1;
    }
    else if (system === "PAPER" && user === "ROCK") {

        console.log(`Computer wins, ${system} beats ${user}`);
        computerScore += 1;
    } else if (system === "SCISSOR" && user === "PAPER") {

        console.log(`Computer wins, ${system} beats ${user}`);
        computerScore += 1;

    } else if (system === "SCISSOR" && user === "ROCK") {
        console.log(`You are a winner,${user} beats ${system}`);
        userScore += 1;

    }
    else if (system === "PAPER" && user === "SCISSOR") {

        console.log(`You are a winner,${user} beats ${system}`);
        userScore += 1;
    }
    else if (system === "ROCK" && user === "PAPER") {
        console.log(`You are a winner,${user} beats ${system}`);
        userScore += 1;

    }
    else {
        console.log("Incorrect input, try again");
    }
}


function game() {
    
        let user = userChoice();
        let computer = computerChoice();
        RPS(computer, user);
        gameResult = computerScore > userScore ? "computer is a winner" : computerScore === userScore ? "Match tie" : "You are winner";
    console.log(userScore,computerScore);
    return gameResult;
    
    
}




console.log(game());



const btn1 = document.getElementById('#btn1');
const btn2 = document.getElementById('#btn2');
const btn3 = document.getElementById('#btn3');



btn1.addEventListener('click',function(){
    userWeapon('Rock');
    console.log(userWeapon);
});