import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import createAppStore from "./store";
import { saveStorage } from "./localstorage";

let store = createAppStore();

store.subscribe(()=> {
        saveStorage({
            isLoggedIn: store.getState().isLoggedIn,
            profile: store.getState().profile
        })
    }
);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App data-testid="App"/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);


