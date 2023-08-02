import { PokemonList } from '@components/PokemonList';
import { Search } from '@components/Search';
import React, { useEffect } from 'react';
import { Pokemon } from 'services/PokemonServices';
import { getPokemonDetails, setPokemons } from 'actions';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { fetchPokemonsWithDetails } from 'slices/pokemonSlice';

const Home = () => {
    const pokemons = useSelector(
        (state: { data: any }) => state.data.pokemons,
        shallowEqual
    );
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPokemonsWithDetails());
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
