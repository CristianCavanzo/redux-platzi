import Image from 'next/image';
import React from 'react';
import { PokemonDetail, PropsPokemon } from 'types/pokemons';
interface Props {
    pokemon: PokemonDetail;
}

const PokemonCard = ({ pokemon }: Props) => {
    return (
        <div className=" rounded-2xl p-4 flex flex-col justify-between">
            <div className="relative w-24 h-24 ">
                <div className="absolute  top-0 left-0 right-0 bottom-0">
                    <Image
                        src={pokemon.sprites.front_default}
                        alt={pokemon.name}
                        fill={true}
                        quality={100}
                        className="object-cover"
                    />
                </div>
            </div>
            <div>
                <p>{pokemon.name}</p>
            </div>
        </div>
    );
};

export { PokemonCard };
