// The following lines are commented out; they were used for a prompt-based approach.
// username = prompt("What is your username? ");
// document.write("Hello " + username);

// Set the initial text for the header element and style it
document.getElementById(
  "header"
).textContent = `This lesson is about taking user inputs using JavaScript!`;
document.getElementById("header").style.color = "brown"; // Change the header text color to brown
document.getElementById("label").textContent = "Enter your name: "; // Set the label text for the input field

let username; // Declare a variable to hold the user's name

// Function to update the username based on user input
function updateUsername() {
  // Get the value from the input field, trimming any whitespace
  username = document.getElementById("user").value.trim();

  // Check if the username is not empty
  if (username) {
    // If a valid username is provided, update the header to greet the user
    document.getElementById("header").textContent = `Hello ${username}`;
  } else {
    // If no username is provided, prompt the user to enter their name
    document.getElementById("header").textContent = "Please enter your name";
  }
}

// Assign the updateUsername function to the button's click event
document.getElementById("sub").onclick = updateUsername;

// Add an event listener to the input field to listen for key presses
document.getElementById("user").addEventListener("keypress", function (event) {
  // Check if the pressed key is the Enter key
  if (event.key === "Enter") {
    // If Enter is pressed, call the updateUsername function
    updateUsername();
  }
});
