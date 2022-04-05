import {pokemonAPI} from "./pokemonApi";

export async function pokemonService(idPokemon) {
    const data = await pokemonAPI(idPokemon);
    const filteredData = [];
    const types = [];

    data.types.forEach((type) => {
        types.push(type.type.name);
    })

    filteredData['name'] = data.name;
    filteredData['artwork'] = data.sprites.other['official-artwork'].front_default;
    filteredData['height'] = data.height * 10;
    filteredData['types'] = types;

    return filteredData;
}
