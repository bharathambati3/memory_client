import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import {apiMiddleware} from './middleware/core/apiMDL';
import {loggerMiddleware} from "./middleware/core/loggerMDL";
import {actionSplitterMiddleware} from "./middleware/core/actionSplitterMDL";
import {STORE_STATE} from "../constants/constants";
import {get, set} from '../utils/storage';
import {setDataReducer} from "./reducers/setDataReducer";
import {routingMDL} from "./middleware/core/routingMDL";
import notificationReducer from '../notifications/feature/duck/reducer';

// shape the state structure
const rootReducer = combineReducers({
    content: setDataReducer,
    nfs: notificationReducer
});

// create the feature middleware array
const featureMiddleware = [
];

// create the core middleware array
const coreMiddleware = [
    actionSplitterMiddleware,
    apiMiddleware,
    loggerMiddleware,
    routingMDL
];

// compose the middleware with additional (optional) enhancers,
// DevTools.instrument() will enable dev tools integration
const enhancer = compose(
    applyMiddleware(...featureMiddleware, ...coreMiddleware)
);


let initialState = get(STORE_STATE);
initialState = initialState ? initialState : {};

// create and configure the store
const store = createStore(rootReducer, initialState, enhancer);

store.subscribe(() => {
    set(store.getState(), STORE_STATE, true);
});

export default store;
