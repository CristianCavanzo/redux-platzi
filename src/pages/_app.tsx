import type { AppProps } from 'next/app';
import '@styles/global.css';
import { Layout } from 'Layout';
import { pokemonsReducer } from 'reducers/pokemons';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';

const store = createStore(pokemonsReducer);
export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Provider>
    );
}
