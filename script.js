async function fetchData() {
  try {
    const res = await fetch("https://rickandmortyapi.com/api/character");
    const result = await res.json();
    getData(result.results);
  } catch (e) {
    console.log(e);
  }
}

function getData(characters) {
  const container = document.getElementById("container");
  characters.forEach((character) => {
    const img = document.createElement("img");
    img.src = character.image;
    img.alt = character.name;
    const div = document.createElement("div");
    const name = document.createElement("p");
    const species = document.createElement("p");
    const gender = document.createElement("p");
    name.textContent = character.name;
    species.textContent = character.species;
    gender.textContent = character.gender;

    div.appendChild(img);
    div.appendChild(name);
    div.appendChild(species);
    div.appendChild(gender);
    container.append(div);
  });
}

fetchData();
