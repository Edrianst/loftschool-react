import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './redux/reducers';
import { loginMiddleware, profileMiddleware } from "./redux/middlewares";
import { loadStorage } from "./localstorage";

const initialState = loadStorage();

const createAppStore = () => {
    const store = createStore(
            rootReducer,
            initialState,
            compose(
             applyMiddleware(loginMiddleware),
             applyMiddleware(profileMiddleware),
            window.__REDUX_DEVTOOLS_EXTENSION__
                    ? window.__REDUX_DEVTOOLS_EXTENSION__()
                    : noop => noop,
            )
    );

    return store;
};





export default createAppStore;