import type { AppProps } from 'next/app';
import '@styles/global.css';
import { Layout } from 'Layout';
import { pokemonsReducer } from 'reducers/pokemons';
import { Provider } from 'react-redux';

import {
    legacy_createStore as createStore,
    compose,
    applyMiddleware,
} from 'redux';

import { feeaturing, logger } from 'middleware';

let composeEnhancers = compose;
if (typeof window !== 'undefined') {
    composeEnhancers = window[
        '__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'
    ] as typeof compose;
    // browser code
}

const store = createStore(
    pokemonsReducer,
    composeEnhancers(applyMiddleware(logger))
);

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Provider>
    );
}
