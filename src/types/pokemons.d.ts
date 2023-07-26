export interface PropsPokemon {
    name: string;
    // numberPokemon: string | number;
    // image: {
    //     src: string;
    //     alt: string;
    // };
}

export interface PokemonsGetAll {
    count: number;
    next: string;
    previous: null;
    results: Result[];
}

interface Result {
    name: string;
    url: string;
}
