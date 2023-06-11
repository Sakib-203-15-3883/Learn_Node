// we import the readline module using require('readline').

const readline = require('readline');

//we create an interface using readline.createInterface(). We provide it with the process.stdin as the input stream, which represents the command line input, and process.stdout as the output stream, which represents the command line output.

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const numbers = [];

function takeNumbers() {
  rl.question('Enter a number (or "done" to finish): ', (input) => {
    if (input.toLowerCase() === 'done') {
      displayNumbers();
      rl.close();
    } else {
      const number = Number(input);
      //isNaN() function returns true if the provided value is not a valid number, and false if it is a valid number.

      if (!isNaN(number)) {
        numbers.push(number);
      }
      takeNumbers();
    }
  });
}

function displayNumbers() {
  console.log('Entered numbers:', numbers);
}
takeNumbers();
