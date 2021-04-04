import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

/**
 * Feedback object:
 * {
 *  feeling: 1
 *  understanding: 2
 *  support: 3
 *  comments: Lorem ipsum (not required)
 * }
 * clearFeedback resets feedback to an empty object
 */
const feedback = ( state = {}, action ) => {
    if( action.type === 'feeling' ) {
        state = {...state, feeling: action.payload };
    }
    if( action.type === 'understanding' ) {
        state = {...state, understanding: action.payload };
    }
    if( action.type === 'support' ) {
        state = {...state, support: action.payload };
    }
    if( action.type === 'comments' ) {
        state = {...state, comments: action.payload };
    }
    if( action.type === 'clearFeedback' ) {
        state = {};
    }
    return state;
};

/**
 * adminFeedback contains an array of feedback objects
 * that are fetched from the database
 */
const adminFeedback = ( state = [], action ) => {
    if( action.type = 'addAdminFeedback' ) {
        state = [...state, action.payload];
    }
    return state;
}

const store = createStore(
    combineReducers({
        feedback: feedback,
        adminFeedback: adminFeedback,
    }),
    applyMiddleware(logger)
);

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>, document.getElementById('root'));

registerServiceWorker();
