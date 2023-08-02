import axios, { AxiosInstance } from 'axios';
import { PokemonDetail, PokemonsGetAll } from 'types/pokemons';

export class Pokemon {
    protected readonly url = `https://pokeapi.co/api/v2`;
    private readonly axios: AxiosInstance = axios.create({
        baseURL: this.url,
    });
    constructor() {}
    async getAllPokemons(): Promise<PokemonsGetAll> {
        const { data: pokemons } = await this.axios({
            url: '/pokemon?limit=300&offset=0',
        });
        return pokemons;
    }
    async getPokemonDetails(name: string): Promise<PokemonDetail> {
        const { data: pokemon } = await this.axios({
            url: `/pokemon/${name}`,
        });
        return pokemon;
    }
}
