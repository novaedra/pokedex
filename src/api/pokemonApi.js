import axios from "axios";

export async function pokemonAPI(idPokemon) {
    try {
        const response = await axios.get(
            'https://pokeapi.co/api/v2/pokemon/' + idPokemon +'/'
        );

        return response.data;
    } catch (error) {
        console.error(error);
    }
    return null;
}

export async function pokemonAPISpecies(idPokemon) {
    try {
        const response = await axios.get(
            'https://pokeapi.co/api/v2/pokemon-species/' + idPokemon +'/'
        );

        return response.data;
    } catch (error) {
        console.error(error);
    }
    return null;
}
