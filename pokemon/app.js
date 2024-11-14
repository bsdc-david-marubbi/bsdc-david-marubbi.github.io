console.log("pokemon app");

const container = document.querySelector("#container");
const pokemonurl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`;

for (i = 1; i <= 151; i++) {
  const pokemon = document.createElement("div");
  const label = document.createElement("span");
  label.innerText = `${i}`;
  const newImg = document.createElement("img");
  newImg.src = `${pokemonurl}${i}.png`;

  pokemon.appendChild(newImg);
  pokemon.appendChild(label);
  container.appendChild(pokemon);
}
