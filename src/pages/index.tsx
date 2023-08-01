import { PokemonList } from '@components/PokemonList';
import { Search } from '@components/Search';
import React, { useEffect } from 'react';
import { Pokemon } from 'services/PokemonServices';
import { getPokemonDetails, setPokemons } from 'actions';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
    const pokemons = useSelector((state: { pokemons: any }) => state.pokemons);
    const dispatch = useDispatch();
    const pokemonClass = new Pokemon();
    useEffect(() => {
        try {
            (async () => {
                const { results: pokemons } =
                    await pokemonClass.getAllPokemons();
                //@ts-ignore
                dispatch(getPokemonDetails(pokemons));
            })();
        } catch (error) {}
    }, []);

    return (
        <div className="text-principalColor">
            <h3 className="font-bold text-3xl">Pokédex</h3>
            <p>
                Busca un pokemon por nombre o usando su número nacional de
                pokedex
            </p>
            <Search placeholder="Nombre o numero" />
            <PokemonList pokemons={pokemons} />
        </div>
    );
};

export default Home;
