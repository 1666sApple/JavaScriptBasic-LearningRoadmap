const ageInput = document.getElementById("ageInput");
const btn = document.getElementById("btn");
const resultElement = document.getElementById("result");
let age;

btn.onclick = function () {
  age = ageInput.value;
  const hasLicense = document.querySelector(
    'input[name="hasLicense"]:checked'
  )?.value;

  if (age <= 0) {
    resultElement.textContent = `Age can not be 00 or negative`;
  } else if (age >= 75) {
    resultElement.textContent = `You are too old to drive but you can vote.`;
  } else if (age >= 18) {
    resultElement.textContent = `You are eligible to vote and have a license`;
    if (hasLicense === "yes") {
      resultElement.textContent += ` and as you have a license, you can drive.`;
    } else if (hasLicense === "no") {
      resultElement.textContent += ` but you don't have a license. You must take a driving test to have a license before you can drive.`;
    } else {
      resultElement.textContent += `. Please select whether you have a license.`;
    }
  } else {
    resultElement.textContent = `You are not eligible to vote and cannot have a license.`;
  }
};
