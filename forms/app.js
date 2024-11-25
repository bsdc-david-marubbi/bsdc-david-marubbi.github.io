console.log("Form App running");

const myForm = document.getElementById("myForm");
console.log(myForm);

myForm.addEventListener("submit", function (e) {
    e.preventDefault();
 console.log('button pressed')
 
 const newRow = document.createElement("tr");
 newRow.innerHTML = `<td>${inputName.value}</td><td>${inputEmail.value}</td>`;
 outputTable.appendChild(newRow);

 inputName.value='';
 inputEmail.value='';

} )

const outputTable = document.getElementById("outputTable");
const inputName = document.getElementById("name");
const inputEmail = document.getElementById("email");


// myForm.addEventListener("submit", function (e) {
//   e.preventDefault();
//   console.log("the form was submitted");
//   console.log(e);


// });
