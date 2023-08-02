import { StartButton } from 'Buttons/StartButton';
import Image from 'next/image';
import React from 'react';
import { useDispatch } from 'react-redux';
import { setFavorite } from 'slices/pokemonSlice';
import { PokemonDetail } from 'types/pokemons';
interface PropsPokemon extends PokemonDetail {
    favorite: boolean;
}
interface Props {
    pokemon: PropsPokemon;
}

const PokemonCard = ({ pokemon }: Props) => {
    const dispatch = useDispatch();
    const hanldeOnFavorite = () => {
        dispatch(setFavorite(pokemon.id));
    };
    return (
        <div
            className={`rounded-2xl p-4 flex flex-col justify-between bg-typePokemons-${pokemon.types[0].type.name} items-center`}
        >
            <StartButton
                favorite={pokemon.favorite}
                onClick={hanldeOnFavorite}
            />
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
