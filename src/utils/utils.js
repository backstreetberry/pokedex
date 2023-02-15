/**
 * Fetches the OG 150 Pokemon and returns an array of obejcts,
 * where each object represents a Pokemon.
 *
 * @returns {Array.<{
*   name: string,
*   url: string
* }>}
*/
const limit = 150;
export async function getPokemonList() {
    const data = await fetch(
        `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=${limit}`)
        .then((res) => res.json())
        .catch((err) => console.log(err));
    return data.results;
}

/**
* @returns {string} Short description of Pokemon
*/
export async function getPokemonDescription(pokemonIdx) {
    const pokemon = await fetch(
        `https://pokeapi.co/api/v2/pokemon-species/${pokemonIdx}`)
        .then((res) => res.json())
        .catch((err) => console.log(err));

    return pokemon.flavor_text_entries[0].flavor_text.replace(/[\n\f]/g, " ");
}

/**
* Returns URL of a Pokemon sprite image
*/
export function getPokemonSpriteUrl(pokemonIdx) {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonIdx}.png`;
    // return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonIdx}.svg`;
}



// Returns pokemon name according to 1-indexed

const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

export async function getPokemonName(pokemonIdx) {
    const pokemonData = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonIdx}`)
        .then((res) => res.json())
        .catch((err) => console.log(err));


    return capitalizeFirstLetter(pokemonData.forms[0].name);
}

// Return Pokemon Type

export async function getPokemonType(pokemonIdx) {
    const pokemon = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonIdx}`)
        .then((res) => res.json())
        .catch((err) => console.log(err));

    return pokemon.types;
}