import React from 'react';
import { Link } from 'react-router-dom';

const Review = () => {
    return (
        <>
            <h2>Review Your Feedback</h2>
            <Link to = '/comments'><button>Back</button></Link>
            <button>Submit</button>
        </>
    )
}

export default Review
