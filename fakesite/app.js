const products = [
  {
    title: "Thors Staff - Conductor Rod",
    image: "product1.jpg",
    description:
      "Copper Lightning Rod Kit with Down Conductor Clamp UL Listed for Roof, Protect Electrical Equipment, Great for House Tower Tank Roof Safety (1.7FT) [fitting not included]",
    price: 120.0,
  },
  {
    title: "X1000 - Insulated Conductor Rod",
    image: "product2.jpg",
    description:
      "RAFCAR Lightning Rod for Roof, Insulated Lightning Rod, Lightning Protection System for House Industrial Building, Lightning Arrester Kit for Roof Factories [fitting not included]",
    price: 180.0,
  },
  {
    title: "Thors Staff Kit - Conductor Rod Kit",
    image: "product3.jpg",
    description:
      "Lightning Rod with 60 Feet 6AWG Down Conductor and DIY Ground Mesh and Clamp UL Listed for House Roof Bungalow Tin House Farm (1.7FT, Lightning System Kit)",
    price: 350.0,
  },
];

const services = document.getElementById("productsContainer");

for (i = 0; i < products.length; i++) {
  const newProduct = document.createElement("div");
  newProduct.className = "product";
  newProduct.innerHTML = `<h2>${products[i].title}</h2><img src="images/${products[i].image}" alt="" /><p>${products[i].description}</p><h2>Price £${products[i].price}</h2>`;
  services.appendChild(newProduct);
}

// console.log(products);
// console.log(services);
// console.log(newProduct);

function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };
  const serviceID = "service_q5dbxlt";
  const templateID = "template_b82v9rp";
console.log(params);
  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      alert("your message was sent sucessfully");
    })
    .catch((err) => console.log(err));
}
