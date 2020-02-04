import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleWare from 'redux-saga';
import { loadStorage } from "./localstorage";
import rootReducer from './redux/reducers';
import { rootSaga }  from "./redux/sagas";

const initialState = loadStorage();

const sagaMiddleware = createSagaMiddleWare();

const createAppStore = () => {
    const store = createStore(
        rootReducer,
        initialState,
        compose(
             applyMiddleware(sagaMiddleware),
            window.__REDUX_DEVTOOLS_EXTENSION__
                    ? window.__REDUX_DEVTOOLS_EXTENSION__()
                    : noop => noop,
        )
    );

    sagaMiddleware.run(rootSaga);

    return store;
};

export default createAppStore;