import { PokemonList } from '@components/PokemonList';
import { Search } from '@components/Search';
import React, { useEffect } from 'react';
import { Pokemon } from 'services/PokemonServices';
import { setPokemons } from 'actions';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
    const pokemons = useSelector((state: { pokemons: any }) => state.pokemons);
    const dispatch = useDispatch();
    const pokemonClass = new Pokemon();
    useEffect(() => {
        try {
            (async () => {
                const { results } = await pokemonClass.getAllPokemons();
                dispatch(setPokemons(results));
            })();
        } catch (error) {}
    }, []);
    console.log(pokemons);

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
