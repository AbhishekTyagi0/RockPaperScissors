

let systemInput;

function computerChoice() {
    let weaponChoice = ["Rock", "Paper", "Scissor"];
    systemInput = Math.floor(Math.random() * weaponChoice.length);
    let choice = weaponChoice[systemInput].toUpperCase();
    return choice;
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
        return null;
    }
}




let userWeapon;

const btn1 = document.getElementById('btn1').addEventListener('click',function(){
    userWeapon = 'Rock';
    userWeapon = userWeapon.toUpperCase();
    console.log(userWeapon);
    game();
    console.log(userScore,computerScore);

});
const btn2 = document.getElementById('btn2').addEventListener('click',function(){
    userWeapon = 'Paper';
    userWeapon = userWeapon.toUpperCase();
    console.log(userWeapon);
    game();
    console.log(userScore,computerScore);

});
const btn3 = document.getElementById('btn3').addEventListener('click',function(){
    userWeapon = 'Scissor';
    userWeapon = userWeapon.toUpperCase();
    console.log(userWeapon);
    game();
    console.log(userScore,computerScore);


});

function game() {

    let user = userWeapon;
    let computer = computerChoice();
    RPS(computer, user);
    let gameResult = computerScore > userScore ? "Computer is a winner" : computerScore === userScore ? "Match tie" : "You are winner";
return gameResult;


}

game();


