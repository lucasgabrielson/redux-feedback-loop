import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import axios from 'axios';
import './App.css';
import Routes from '../Routes/Routes';

function App() {
  // use dispatch to send array of feedback objects from database to redux
  const dispatch = useDispatch();

  // run GET route on page load
  useEffect( () => { getFeedback() }, [] );

  // GET route for feedback objects
  const getFeedback = () => {
    console.log( 'in getFeedback' );
    axios.get( '/api/feedback').then( response => {
      console.log( 'back from GET /api/feedback with:', response.data);
      dispatch( { type: 'addAdminFeedback', payload: response.data } );
    }).catch( err => {
      console.log( err );
      alert( 'error fetching data from /api/feedback' );
    })
  }

  return (
    <div className='App'>
      {/* All hash routes are located in Routes component */}
      <Routes />
    </div>
  );
}

export default App;
