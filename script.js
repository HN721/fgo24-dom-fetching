async function fetchData() {
  try {
    const res = await fetch("https://rickandmortyapi.com/api/character");
    const result = await res.json();
    allCharacters = result.results;
    displayCharacters(allCharacters);
  } catch (e) {
    console.log(e);
  }
}

function displayCharacters(characters) {
  const container = document.getElementById("container");
  container.innerHTML = "";

  characters.forEach((character) => {
    const card = document.createElement("div");

    const img = document.createElement("img");
    img.src = character.image;
    img.alt = character.name;

    const name = document.createElement("p");
    name.textContent = `Name: ${character.name}`;

    const species = document.createElement("p");
    species.textContent = `Species: ${character.species}`;

    const gender = document.createElement("p");
    gender.textContent = `Gender: ${character.gender}`;

    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(species);
    card.appendChild(gender);

    container.appendChild(card);
  });
}

// Search filter
document.getElementById("search").addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  const filtered = allCharacters.filter((char) =>
    char.name.toLowerCase().includes(value)
  );
  displayCharacters(filtered);
});

let allCharacters = [];

fetchData();
