console.log("Buttons application running");

const grabMyButton = document.getElementById("myButton1");

const randomNumberGenerator = function () {
  const rand = Math.floor(Math.random() * (100 - 1)) + 1;
  const grabRandomNumber = document.getElementById('randomNumber');
  grabRandomNumber.innerText = `${rand}`
};

grabMyButton.addEventListener("click", randomNumberGenerator);

// Another event listener but the function written differently
const grabMyButton2 = document.getElementById("myButton2");
const grabBody = document.querySelector("body");

grabMyButton2.addEventListener("click", function () {
  console.log(grabBody.className);
  if (grabBody.className === "red") {
    grabBody.className = "blue";
  } else {
    grabBody.className = "red";
  }
});
