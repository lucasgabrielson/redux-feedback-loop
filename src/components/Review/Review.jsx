import React from 'react';
import { Link } from 'react-router-dom';
import ReviewList from '../ReviewList/ReviewList';

const Review = () => {
    return (
        <>
            <h2>Review Your Feedback</h2>
            <ReviewList />
            <Link to = '/comments'><button>Back</button></Link>
            <button>Submit</button>
        </>
    )
}

export default Review
