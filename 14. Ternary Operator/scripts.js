// Ternary Operator: shortcut to if else statements to help assign a variable based on the condition. 
// condition ? codeifTrue : codeifFalse

let age = window.prompt(`Enter your age`);

age = Number(age)

let message = age >= 18 ? "Adult" : "Minor"

console.log(message)