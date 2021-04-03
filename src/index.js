import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

const feedback = ( state = {}, action ) => {
    if( action.type === 'feeling' ) {
        state = {...state, feeling: action.payload };
    }
    return state;
};

const allFeedback = ( state = [], action ) => {
    if( action.type = 'addFeedbackData' ) {
        state = [...state, action.payload];
    }
    return state;
}



const store = createStore(
    combineReducers({
        feedback: feedback,
        allFeedback: allFeedback
    }),
    applyMiddleware(logger)
);

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>, document.getElementById('root'));

registerServiceWorker();
