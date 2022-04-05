import './App.css';
import {pokemonService} from "./api/pokemonService";
import {useEffect, useState} from "react";
import BasicCard from "./components/basicCard";

function App() {

    const [pokemon, setPokemon] = useState(null);
    const [idPokemon, setIdPokemon] = useState(1);

    function previousPokemon(step) {
        if (idPokemon + step >= 1)
            setIdPokemon(idPokemon - step);
    }

    function nextPokemon(step) {
        if (idPokemon + step <= 898)
            setIdPokemon(idPokemon + step);
    }

    useEffect(() => {
        pokemonService(idPokemon).then((res) => {
            setPokemon(res);
        });
    }, [idPokemon])

    return (
        <div className="App">
            {
                pokemon ?
                    <BasicCard pokemon={pokemon}/> : null
            }
            {
                idPokemon > 10 ? <button onClick={() => {previousPokemon(10)}}>Previous -10</button> : null
            }
            {
                idPokemon > 1 ? <button onClick={() => {previousPokemon(1)}}>Previous</button> : null
            }
            {
                idPokemon < 898 ? <button onClick={() => {nextPokemon(1)}}>Next</button> : null
            }
            {
                idPokemon < 888 ? <button onClick={() => {nextPokemon(10)}}>Next +10</button> : null
            }

        </div>
    );
}

export default App;
