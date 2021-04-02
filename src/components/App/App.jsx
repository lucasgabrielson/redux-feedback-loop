import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import axios from 'axios';
import './App.css';
import Routes from '../Routes/Routes';

function App() {
  const dispatch = useDispatch();

  useEffect( () => { getFeedback() }, [] );

  const getFeedback = () => {
    console.log( 'in getFeedback' );
    axios.get( '/api/feedback').then( response => {
      console.log( 'back from GET /api/feedback with:', response.data);
      dispatch( { type: 'addFeedbackData', payload: response.data } );
    }).catch( err => {
      console.log( err );
      alert( 'error fetching data from /api/feedback' );
    })
  }

  return (
    <div className='App'>
      <Routes />
    </div>
  );
}

export default App;
