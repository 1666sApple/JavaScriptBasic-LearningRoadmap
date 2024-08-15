let username = "";

while (username === "" || username === null) {
  username = prompt("Enter your username: ");
}
console.log(`Hello ${username}`);
