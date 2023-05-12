import {legacy_createStore,combineReducers,applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import table from './module/table';


let newStore=combineReducers({table});
let store=legacy_createStore(newStore,applyMiddleware(thunk,logger));

export default store;