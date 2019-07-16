import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import authReducer from './auth';
import dataReducer from './data';


export default (history) => combineReducers({
    router: connectRouter(history),
    auth: authReducer,
    data: dataReducer
});