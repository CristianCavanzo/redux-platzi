import { PokemonList } from '@components/PokemonList';
import { Search } from '@components/Search';
import React, { useEffect } from 'react';
import { Pokemon } from 'services/PokemonServices';
import { connect } from 'react-redux';
import { setPokemons as setPokemonsActions } from 'actions';

const Home = ({ pokemons, setPokemons }) => {
    const pokemonClass = new Pokemon();
    useEffect(() => {
        try {
            (async () => {
                const { results } = await pokemonClass.getAllPokemons();
                setPokemons(results);
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

const mapStateToProps = (state) => ({
    pokemons: state.pokemons,
});

const mapDispatchToProps = (dispatch) => ({
    setPokemons: (value) => dispatch(setPokemonsActions(value)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
