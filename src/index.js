import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import createAppStore from "./store";
import { saveStorage } from "./localstorage";
import { theme } from "loft-taxi-mui-theme";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

let store = createAppStore();

store.subscribe(()=> {
        saveStorage({
            isLoggedIn: store.getState().isLoggedIn,
            profile: store.getState().profile,
            address: store.getState().address
        })
    }
);

ReactDOM.render(
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <MuiThemeProvider theme={theme}>
                <Provider store={store}>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </Provider>
            </MuiThemeProvider>
        </MuiPickersUtilsProvider>,
    document.getElementById('root')
);


