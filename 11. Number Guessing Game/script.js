// Number Guessing Game

const minNum = 1;
const maxNum = 100;
const ans = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);

console.log(ans);

let attempts = 0;
let guess;
let running = true;

while (running) {
  guess = prompt(`Guess a number between ${minNum} and ${maxNum}`);
  guess = Number(guess);

  if (isNaN(guess)) {
    alert("Please enter a valid number");
  } else if (guess < minNum || guess > maxNum) {
    alert("Please enter a number between 1 and 100");
  } else if (guess < ans) {
    alert("Too low!");
    attempts++;
  } else if (guess > ans) {
    alert("Too high!");
    attempts++;
  } else {
    alert(`Congratulations! You guessed the number in ${attempts} attempts.`);
    running = false;
  }
}