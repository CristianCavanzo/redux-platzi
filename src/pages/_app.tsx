import type { AppProps } from 'next/app';
import '@styles/global.css';
import { Layout } from 'Layout';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {
    legacy_createStore as createStore,
    compose,
    applyMiddleware,
} from 'redux';

import { logger } from 'middleware';
import { Loader } from '@components/Loader';
import { rootReducer } from 'reducers/rootReducer';

let composeEnhancers = compose;
if (typeof window !== 'undefined') {
    composeEnhancers = window[
        '__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'
    ] as typeof compose;
    // browser code
}

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk, logger))
);

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <Loader />
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Provider>
    );
}
