import { PokemonCard } from '@components/PokemonCard';
import React from 'react';
import { PokemonsGetAll } from 'types/pokemons';

const PokemonList = ({ pokemons }: { pokemons: PokemonsGetAll['results'] }) => {
    return (
        <div className="flex flex-wrap gap-2 items-center">
            {pokemons?.map((pokemon, key) => (
                <PokemonCard
                    key={`pokemon_${key}`}
                    name={pokemon.name}
                ></PokemonCard>
            ))}
        </div>
    );
};

export { PokemonList };
