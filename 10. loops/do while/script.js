let loggedIn = false;
let username;
let password;

do {
  username = prompt("Enter your username: ");
  password = prompt("Enter your password: ");
  if (username !== "" && password !== "") {
    loggedIn = true;
    console.log("You are logged in!");
  } else {
    console.log("Invalid username or password. Please try again.");
  }
} while (!loggedIn);
