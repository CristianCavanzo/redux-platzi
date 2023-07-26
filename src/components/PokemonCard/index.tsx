import React from 'react';
import { PropsPokemon } from 'types/pokemons';
const PokemonCard = ({ name }: PropsPokemon) => {
    return (
        <div className=" rounded-2xl p-4 flex flex-col justify-between">
            <div></div>
            <div>
                <p>{name}</p>
            </div>
        </div>
    );
};

export { PokemonCard };
