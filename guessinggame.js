// write a javascript program to generate a random number and store it in a variable. the program then
// takes an input from the user to tell them whether the guess was correct greater or less than the original number. 100-no of guesses is the score
// Program is expected to terminate once the number is guessed. number should be between 1-100
let number = Math.floor(Math.random() * 100) + 1;
let tryno = 0;
let a;
do {
  let a = prompt("Enter the guess: ");
  a = parseInt(a);
  if (a === number) {
    break;
  }
  else if (a > number) {
    console.log("Number is lesser than guessed number")
    tryno++;
  }
  else if (a < number) {
    console.log("Number is greater than guessed number");
    tryno++;
  }
} while (tryno < 100)
let score = 100 - tryno;
console.log("Your score is " + score);