import './styles/basicCard.css';

export default function OutlinedCard(pokemon) {
    pokemon = pokemon.pokemon;

    return (
            <div className={'card'}>
                <h2  className={'pokemonName'}>{pokemon.nameFR}</h2>
                <p>{pokemon.name}</p>
                <p>{pokemon.height} cm</p>
                <div  className={'types'}>
                    {pokemon.types.map((type) => {
                        return (<span key={type}> {type} </span>);
                    })}
                </div>
                <img src={pokemon.artwork}
                     alt="pokemon artwork"/>
            </div>
    )
}
