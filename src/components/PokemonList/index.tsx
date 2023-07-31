import { PokemonCard } from '@components/PokemonCard';
import React from 'react';
import { PokemonDetail } from 'types/pokemons';

const PokemonList = ({ pokemons }: { pokemons: PokemonDetail[] }) => {
    return (
        <div className="flex flex-wrap gap-2 items-center">
            {pokemons?.map((pokemon, key) => (
                <PokemonCard
                    key={`${pokemon.id}`}
                    pokemon={pokemon}
                ></PokemonCard>
            ))}
        </div>
    );
};

export { PokemonList };
