import React, { useState } from 'react';


const Pokemon = ({ id }) => {
    return null;

    return !pokemon ? (
        <div>{error}</div>
    ) : (
        <div>
            <h2>#{id}</h2>
            <h2>{pokemon.name}</h2>
            <img alt={pokemon.name} src={pokemon.sprites.front_shiny} />
        </div>
    );
}

export const PokemonPager = () => {

    const [id, setId] = useState(1);

    return (
        <div>
            <button type='button' onClick={() => setId(id !== 1 ? id - 1 : 250)}>
                Previous
            </button>
            <button type='button' onClick={() => setId(id !== 250 ? id + 1 : 1)}>
                Next
            </button>

            <Pokemon id={id} />
        </div>
    )
}

export default Pokemon;