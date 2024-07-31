const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");

const countLabel = document.getElementById("countLabel");
const alertDiv = document.getElementById("alert");

let count = 0;

increaseBtn.onclick = function () {
  count++;
  countLabel.textContent = count;
  alertDiv.textContent = "";
};

decreaseBtn.onclick = function () {
  if (count > 0) {
    count--;
    countLabel.textContent = count;
    alertDiv.textContent = "";
  } else {
    alertDiv.textContent = "Count can't be negative";
  }
};

resetBtn.onclick = function () {
  count = 0;
  countLabel.textContent = count;
  alertDiv.textContent = "";
};
