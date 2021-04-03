import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import ReviewList from '../ReviewList/ReviewList';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import swal from 'sweetalert';

const Review = () => {
    const feedback = useSelector( store => {
        return store.feedback;
    })

    const history = useHistory();

    const dispatch = useDispatch();

    const postFeedback = () => {
        console.log( 'in postFeedback' );
        axios.post( '/api/feedback', feedback )
            .then( response => {
                console.log( 'back from POST ');
                swal({
                    title: "Success!",
                    text: "Click Ok to Submit more feedback!",
                    type: "success"
                }).then(function() {
                    dispatch( { type: 'clearFeedback' } )
                    history.push('/');
                })
            }).catch( err => {
                console.log( err );
                alert( 'error posting feedback to /api/feedback' );
            })
    }

    return (
        <>
            <h2>Review Your Feedback</h2>
            <ReviewList />
            <Link to = '/comments'><button>Back</button></Link>
            <button onClick = {() => postFeedback()}>Submit</button>
        </>
    )
}

export default Review
