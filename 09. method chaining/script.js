// Here the program will take input from the user and then it will capitalize the first letter of the first word and then it will convert the rest of the letters to lowercase and remove all the white spaces from the string.

let input = document.getElementById("input");
let result = document.getElementById("result");
let btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  let username = input.value.trim();
  result.innerHTML =
    username.charAt(0).toUpperCase() +
    username.slice(1, username.indexOf(" ")).toLowerCase() +
    username.slice(username.indexOf(" ") + 1).toLowerCase();
});
