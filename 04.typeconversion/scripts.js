document.getElementById("header").style.color = "darkgreen";
document.getElementById("label").textContent = "Enter your Birth year: ";

function updateYear() {
  let year = document.getElementById("year").value;
  if (year && !isNaN(year)) {
    const currentYear = newDate().getFullYear();
    const age = currentYear - parseInt(year, 10); // Conversion of string to integer with base 10
    document.getElementById("header").textContent = `You are ${age} years old`;
  } else {
    document.getElementById("header").textContent = "Please enter a valid year";
  }
}

document.getElementById("sub").onclick = updateYear;
document.getElementById("year").addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    updateYear();
  }
});
