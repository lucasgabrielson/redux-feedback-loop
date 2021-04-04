import React from 'react';
import Header from '../../Header/Header';
import RatingCard from '../../Cards/RatingCard';
import NavBar from '../../NavBar/NavBar'

const Feeling = () => {
    return (
        <div>
            <Header />
            <NavBar />
            <RatingCard type = { 'feeling' } next = { '/understanding' } prompt = { 'How are you feeling today?' }/>
        </div>
    )
}

export default Feeling
