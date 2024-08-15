let username;

do {
  username = prompt("Enter your username: ");
} while (username === "" || username === null);
console.log(`Hello ${username}`);
