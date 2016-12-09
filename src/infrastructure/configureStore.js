import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import { routerMiddleware } from 'react-router-redux';
import { batchStoreEnhancer, batchMiddleware } from "redux-batch-enhancer";

export default function configureStore (initialState = {}, history) {
    // Compose final middleware and use devtools in debug environment
    const middleware = applyMiddleware(batchMiddleware, thunk, routerMiddleware(history)),
        composed = compose(middleware, batchStoreEnhancer, window.devToolsExtension ? window.devToolsExtension() : (f) => f);

    // Create final store and subscribe router in debug env ie. for devtools
    const store = composed(createStore)(rootReducer, initialState = {});

    if (module.hot) {
        module.hot.accept('./rootReducer', () => {
            const nextRootReducer = require('./rootReducer').default;

            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}
