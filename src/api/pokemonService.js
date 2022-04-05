import {pokemonAPI, pokemonAPISpecies} from "./pokemonApi";

export async function pokemonService(idPokemon) {
    const pokemon = await pokemonAPI(idPokemon);
    const pokemonSpecies = await pokemonAPISpecies(idPokemon);

    const filteredData = [];
    const types = [];

    pokemon.types.forEach((type) => {
        types.push(type.type.name);
    })

    filteredData['name'] = pokemon.name;
    filteredData['nameFR'] = pokemonSpecies.names[4].name;
    filteredData['artwork'] = pokemon.sprites.other['official-artwork'].front_default;
    filteredData['height'] = pokemon.height * 10;
    filteredData['types'] = types;

    return filteredData;
}
