let age = 10;
let price = 25.99;
let gpa = 3.22;

console.log(typeof age);
console.log(`You are ${age} years old.`);
console.log(`The price of the item is $${price}.`);
console.log(`Your GPA is ${gpa}.`);

let firstname = "John";
let lastname = "Doe";

console.log(`Your name is ${firstname} ${lastname}.`);

let online = true;
let loggedIn = false;

console.log(typeof online);
console.log(`You are online: ${online}.`);
console.log(`You are logged in: ${loggedIn}.`);

let number = 10;

number **= 2;
console.log(number); // Output: 100

// Arithmetic operation sequence:
// 1. Parentheses
// 2. Exponentiation (right to left)
// 3. Multiplication and Division (left to right)
// 4. Addition and Subtraction (left to right)
// 5. Modulus (left to right)

let result = (1 + 2) * 3 - 4 / 5 + (6 % 7) + 8 ** 2 + (9 / 10) * 11;
console.log(result);
// Explanation of the operations in the expression:
// 1. (1 + 2) = 3
// 2. 3 * 3 = 9
// 3. 4 / 5 = 0.8
// 4. 6 % 7 = 6 (remainder of 6 divided by 7)
// 5. 8 ** 2 = 64
// 6. 9 / 10 = 0.9
// 7. 0.9 * 11 = 9.9
// 8. Final calculation: 9 - 0.8 + 6 + 64 + 9.9
// 9. 9 - 0.8 = 8.2
// 10. 8.2 + 6 = 14.2
// 11. 14.2 + 64 = 78.2
// 12. 78.2 + 9.9 = 88.1

result--;
console.log(result); // Output: 87.1

result++;
console.log(result); // Output: 88.1

// Prepare the expression and logic explanation
let ques = "(1 + 2) * 3 - 4 / 5 + (6 % 7) + 8 ** 2 + (9 / 10) * 11";
let string = "JavaScript";
let logic =
  "1. (1 + 2) = 3\n" +
  "2. 3 * 3 = 9\n" +
  "3. 4 / 5 = 0.8\n" +
  "4. 6 % 7 = 6 (remainder of 6 divided by 7)\n" +
  "5. 8 ** 2 = 64\n" +
  "6. 9 / 10 = 0.9\n" +
  "7. 0.9 * 11 = 9.9\n" +
  "8. Final calculation: 9 - 0.8 + 6 + 64 + 9.9\n" +
  "9. 9 - 0.8 = 8.2\n" +
  "10. 8.2 + 6 = 14.2\n" +
  "11. 14.2 + 64 = 78.2\n" +
  "12. 78.2 + 9.9 = 88.1";

// Another way to get the results is:

// let res = eval(ques);

// Update the HTML content
document.getElementById(
  "header"
).textContent = `Arithmetic Operations Using ${string}`;
document.getElementById("header").style.color = "darkblue";

document.getElementById(
  "para"
).textContent = `Given Expression which is to be solved is ${ques}`;
document.getElementById("math").textContent = `Result: ${result}`;
// document.getElementById("ans").textContent = res;
document.getElementById("ans").textContent = result;
document.getElementById(
  "logic"
).innerHTML = `Explanation of the solution for this expression is: ${logic.replace(
  /\n/g,
  "<br>"
)}`;
