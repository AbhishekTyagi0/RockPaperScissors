

let systemInput;
function computerChoice() {
    let weaponChoice = ["Rock","Paper","Scissor"];
    systemInput = Math.floor(Math.random()*weaponChoice.length);
    let choice = weaponChoice[systemInput];
    return choice;
}
console.log(computerChoice());


let userInput = prompt("Enter your Weapon of Choice: ");


function RPS(systemInput,userInput) {
    
    if(userInput === systemInput){
        console.log("match Tie, Try again");
    }
}
