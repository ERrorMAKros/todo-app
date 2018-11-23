import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import rootReducer from './rootReducer';

export const store = createStore(combineReducers({
    rootReducer
}), applyMiddleware(logger));


export default store;
