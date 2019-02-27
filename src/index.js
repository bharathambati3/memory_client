import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import store from './lib/redux/store';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Router } from 'react-router-dom';
import { history } from './lib/router/';
import NotificationScreen from "./lib/notifications/ui/NotificationScreen/NotificationScreen";

ReactDOM.render
(
    <Provider store={store}>
        <Router history={history}>
            <NotificationScreen>
                <App />
            </NotificationScreen>
        </Router>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
