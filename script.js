var wins = 0;
var losses = 0;
var ties = 0;
var keepGoing = true;
var options = "RPS";

while(keepGoing) {
    playGame();
    keepGoing = confirm("Do you want to play again?");
}

function playGame() {
    var input = prompt("R, P, or S?").toUpperCase();
    while(!(input === "R" || input === "P" || input === "S")) {
        alert("Please input a valid option.");
        input = prompt("R, P, or S?").toUpperCase();
    }

    var compChoice = output();

    switch(input) {

        case "R":
            if(compChoice === "R") {
                tie();
            }
            if(compChoice === "P") {
                loss();
            }
            if(compChoice === "S") {
                win();
            }
            break;

        case "P":
            if(compChoice === "P") {
                tie();
            }
            if(compChoice === "S") {
                loss();
            }
            if(compChoice === "R") {
                win();
            }
            break;

        case "S":
            if(compChoice === "S") {
                tie();
            }
            if(compChoice === "R") {
                loss();
            }
            if(compChoice === "P") {
                win();
            }
            break;

    }

    alert("Wins: " + wins + "\nLosses: " + losses + "\nTies: " + ties);
}

function output() {
    var random = Math.floor(Math.random() * options.length);
    return options.charAt(random);
}

function tie() {
    ties++;
    alert("It was a tie.");
}

function loss() {
    losses++;
    alert("You lost.");
}

function win() {
    wins++;
    alert("You win!");
}