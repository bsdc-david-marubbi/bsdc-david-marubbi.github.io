const carList = [
  { type: "Fiat", model: "500", colour: "white" },
  { type: "BMW", model: "316", colour: "silver" },
  { type: "BMW", model: "316", colour: "blue" },
  { type: "Ford", model: "Ka", colour: "white" },
  { type: "Audi", model: "A4", colour: "red" },
  { type: "Renault", model: "Clio", colour: "red" },
  { type: "Peugeot", model: "Expert", colour: "blue" },
];

carList.push({ type: "Audi", model: "Quattro", colour: "white" });

// Grab the table as on object from the DOM
const carsTable = document.getElementById("carsTable");

// Iterate over the lengh of the carList array
for (i = 0; i < carList.length; i++) {

  // This creates a newCar object which is a tr element
  const newCar = document.createElement("tr");

  //   This changes the HTML in the new tr element to have the car data
  newCar.innerHTML = `
                    <td>${carList[i].type}</td>
                    <td>${carList[i].model}</td>
                    <td>${carList[i].colour}</td>`;

  // This appends the newCar object to the table in the webpage
  carsTable.appendChild(newCar);
}

