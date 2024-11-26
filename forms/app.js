console.log("Form App running");

const myForm = document.getElementById("myForm");
console.log(myForm);

myForm.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("button pressed", event);

  const newRow = document.createElement("tr");
  newRow.innerHTML = `<td>${inputName.value}</td><td>${inputEmail.value}</td>`;
  outputTable.appendChild(newRow);

  inputName.value = "";
  inputEmail.value = "";
});

const outputTable = document.getElementById("outputTable");
const inputName = document.getElementById("name");
const inputEmail = document.getElementById("email");