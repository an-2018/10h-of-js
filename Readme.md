# Some js Boilerplate

## Readline

Using builtin ```process``` object and ```readline``` module, that rely on callback functions.

```js
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Who are you?', name => {
    console.log(`Hey there ${name}!`);
    readline.close();
})
```
Having the output:
```bash
$ node read.js
Who are you?
my name
$ Hello my name
```

## Using Prompt-sync
An alternative to callbacks, need to install with ```npm install prompt-sync``` 

```js
const prompt = require('prompt-sync')();

const name = prompt('What\'s your name?');
console.log(`Hey there ${name}`);
```
Aditionaly we can use a **signal interrupt** message to exit the program by using the configuration object with ```sigint: true```.
```js
const prompt = require(prompt-sync)(sigint:true);
```

### Working with numbers
```js 
const num = prompt('What number?');
console.log('Your number + 3 = ');
console.log(Number(num) + 3);
```
### A basic guessing app
```js
const prompt = require('prompt-sync')({sigint:true})

// random number from 1 to 10
const numberToGuess = Math.floor(Math.random() * 10) + 1;

let guessed = false;

while (!guessed){
    // get input
    let num = prompt("Guess a number from 1 to 10");
        guess = Number(num);
        if(guess == numberToGuess){
            console.log("you guessed the number");
            guessed= true;
        } else{
            console.log("Try again");
        }

}
```

