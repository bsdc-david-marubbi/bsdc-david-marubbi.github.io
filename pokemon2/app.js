console.log("Pokemon App running");

const pokemon = document.getElementById("pokemon");
const pokemonURL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

for (i = 1; i <= 10; i++) {
  const newImg = document.createElement("img");
  let randNum = Math.floor(Math.random() * (151 - 1) ) + 1;
  newImg.src = `${pokemonURL}${randNum}.png`;
  pokemon.appendChild(newImg);
}
