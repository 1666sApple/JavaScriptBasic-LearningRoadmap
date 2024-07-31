// Define a constant for the value of pi, as it does not change
const pi = Math.PI; // Using const because the value of pi is a fixed constant in mathematics

let radius; // Variable to hold the radius of the circle
let circumference; // Variable to hold the calculated circumference

document.getElementById("sub").onclick = function () {
  // Get the value from the input field with ID "text"
  radius = document.getElementById("text").value;

  // Convert the input value to a number
  radius = Number(radius);

  // Calculate the circumference using the formula: circumference = 2 * pi * radius
  circumference = 2 * pi * radius;

  // Display the result in the element with ID "output"
  document.getElementById(
    "output"
  ).textContent = `The circumference is ${circumference} cm`;
};
