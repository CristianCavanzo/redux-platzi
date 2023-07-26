import { PokemonList } from '@components/PokemonList';
import { Search } from '@components/Search';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import React from 'react';
import { Pokemon } from 'services/PokemonServices';
import { PokemonsGetAll } from 'types/pokemons';

export const getServerSideProps: GetServerSideProps<{
    pokemons: PokemonsGetAll['results'];
}> = async () => {
    try {
        const pokemon = new Pokemon();
        const pokemons = await pokemon.getAllPokemons();
        return { props: { pokemons: pokemons.results } };
    } catch (e) {
        console.log(e);
        return { props: { pokemons: [] } };
    }
};

const Home = ({
    pokemons,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
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
