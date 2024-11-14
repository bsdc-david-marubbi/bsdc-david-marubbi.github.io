console.log("pokemon app");

const container = document.querySelector("#container");
const pokemonurl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`

for (i = 1; i <= 151; i++) {
  const newImg = document.createElement("img");
  newImg.src = `${pokemonurl}${i}.png`;
  container.appendChild(newImg);
}
