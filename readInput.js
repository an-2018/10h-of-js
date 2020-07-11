const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

// random number from 1 to 10
const numberToGuess = Math.floor(Math.random * 10) + 1;

let guessed = false;

while (!guessed){
    // get input
    readline.question("Guess a number from 1 to 10: ", num =>{
        guess = Number(num);
        if(guess == numberToguess){
            console.log("you guessed the number");
            guessed= true;
        } else{
            console.log("Try again");
        }
    });
}