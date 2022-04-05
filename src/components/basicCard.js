import './styles/basicCard.css';

export default function OutlinedCard(pokemon) {
    pokemon = pokemon.pokemon;

    return (
            <div className={'card'}>
                <h2  className={'pokemonName'}>{pokemon.name}</h2>
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
