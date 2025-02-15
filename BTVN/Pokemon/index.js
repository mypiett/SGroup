const container = document.getElementById("pokemon-cards");
container.className = "pokemon-container";

const loadMoreButton = document.getElementById("load-more");
loadMoreButton.className = "LoadMore";

const searchBox = document.getElementById("search-box");

let CountBegin = 0;
let CountEnd = 36;
let pokemonDetails = [];

const CreateCard = (pokemon) => {
    const card = document.createElement("a");
    card.className = "card-pokemon";
    card.setAttribute("href", `pokemon-detail-${pokemon.id}.html`);
    card.setAttribute("data-name", pokemon.name.toLowerCase());

    card.innerHTML = `<p class="id">#${pokemon.id}</p>`;

    const image = document.createElement("img");
    image.className = "IMG-pokemon";
    image.setAttribute("src", pokemon.sprites.front_default);
    image.setAttribute("alt", pokemon.name);
    card.appendChild(image);

    const name = document.createElement("h3");
    name.className = "Name-pokemon";
    name.textContent = pokemon.name;
    card.appendChild(name);

    const ListTypes = document.createElement("div");
    ListTypes.className = "List-Types";
    let typeHTML = "";
    let j=0;
    for (j = 0; j < pokemon.types.length; j++) {
        const typeNameTemp = pokemon.types[j].type.name;
        typeHTML += `<span class="general ${typeNameTemp}">${typeNameTemp}</span>`;
    }
    ListTypes.innerHTML = typeHTML;
    card.appendChild(ListTypes);

    container.appendChild(card);
};

const ShowData = async () => {
    for (let i = CountBegin; i < CountEnd && i < pokemonDetails.length; i++) {
        CreateCard(pokemonDetails[i]);
    }
    CountBegin = CountEnd;
    CountEnd *= 2;
};

const FirstGroup = async () => {
    for (let i = 0; i < CountEnd && i < data.results.length; i++) {
        const response = await fetch(data.results[i].url);
        const pokemon = await response.json();
        pokemonDetails.push(pokemon);
    }

    ShowData(); 
};

searchBox.addEventListener("input", async () => {
    const searchInput = searchBox.value.toLowerCase();
    container.innerHTML = ""; 

    if (searchInput === "") {
        loadMoreButton.style.display = "block";
        ShowData();
        return;
    }
    loadMoreButton.style.display = "none";
    const filterPokemons = data.results.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchInput)
    );

    if (filterPokemons.length === 0) {
        const noResult = document.createElement("p");
        noResult.innerHTML= `<p class="no-result">No pokemon matched with "<span>${searchInput}</span>"</p>`;
        container.appendChild(noResult);
        return;
    }
    else{
        for (let pokemon of filterPokemons) {
            const detailPokemon = pokemonDetails.find((p) => p.name === pokemon.name);
            // CreateCard(detailPokemon);
            if (detailPokemon) {
                CreateCard(detailPokemon);
            } else {
                const response = await fetch(pokemon.url);
                const newPokemonDetails = await response.json();
                pokemonDetails.push(newPokemonDetails);
                CreateCard(newPokemonDetails);
            }
        }
    }

});

loadMoreButton.addEventListener("click", async () => {
    for (let i = CountBegin; i < CountEnd && i < data.results.length; i++) {
        const response = await fetch(data.results[i].url);
        const pokemon = await response.json();
        pokemonDetails.push(pokemon);
    }

    ShowData(); 
});

FirstGroup();