

let systemInput;

function computerChoice() {
    let weaponChoice = ["Rock", "Paper", "Scissor"];
    systemInput = Math.floor(Math.random() * weaponChoice.length);
    let choice = weaponChoice[systemInput];
    return choice;
}


let userInput = prompt("Enter your Weapon of Choice: ");


console.log(userInput);

function RPS(system, user) {

    if (system === user) {
        console.log("match Tie, Try again");
    } else if (system === "Rock" && user === "Scissor") {
        console.log("Computer wins, you loose");

    }
    else if (system === "Paper" && user === "Rock") {

        console.log("Computer wins, you loose");
    } else if (system === "Scissor" && user === "Paper") {

        console.log("Computer wins, you loose");

    } else if (system === "Scissor" && user === "Rock") {
        console.log("You are a winner, keep going");

    }
    else if (system === "Paper" && user === "Scissor") {

        console.log("You are a winner, keep going");
    }
    else if (system === "Rock" && user === "Paper") {
        console.log("You are a winner, keep going");
    }
    else {
        console.log("Incorrect input, try again")
    }
}

let computer = computerChoice();
console.log(computer);

console.log(RPS(computer, userInput));