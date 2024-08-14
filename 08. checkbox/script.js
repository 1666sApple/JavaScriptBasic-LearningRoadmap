const checkbox = document.getElementById("checkbox");
const allbtn = document.getElementById("allbtn");
const reqbtn = document.getElementById("reqbtn");
const rejbtn = document.getElementById("rejbtn");
const subbtn = document.getElementById("subbtn");
const result = document.getElementById("result");
const termsres = document.getElementById("termsres");

subbtn.onclick = function () {
  if (checkbox.checked) {
    result.innerHTML = "You have read all the terms and conditions.";

    if (allbtn.checked) {
      termsres.innerHTML =
        "Thank you for accepting all the terms and conditions including all the additional terms and conditions.";
    } else if (reqbtn.checked) {
      termsres.innerHTML =
        "Thank you for accepting the required terms and conditions. However, in case you change your mind, you can later upgrade to all the additional conditions.";
    } else {
      termsres.innerHTML = "You have rejected all the terms and conditions.";
    }
  } else {
    result.innerHTML = "Please read all the terms and conditions.";
  }
};
