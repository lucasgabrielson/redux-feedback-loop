import React from 'react'
import { useSelector } from 'react-redux';

const ReviewList = () => {
    const feedback = useSelector( store => {
        console.log(store.feedback);
        return store.feedback;
    })

    return (
        <ul>
            <li>Feelings: {feedback.feeling}</li>
            <li>Understanding: {feedback.understanding}</li>
            <li>Support: {feedback.support}</li>
            <li>Comments: {feedback.comments}</li>
        </ul>
    )
}

export default ReviewList
