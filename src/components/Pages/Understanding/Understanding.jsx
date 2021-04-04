import React from 'react';
import Header from '../../Header/Header';
import NavBar from '../../NavBar/NavBar';
import RatingCard from '../../Cards/RatingCard';
const Understanding = () => {
    return (
        <>
            <Header />
            <NavBar />
            <RatingCard type = { 'understanding' } next = { '/supported' } back = { '/feeling' } prompt = { 'How well are you understanding the content?' }/>
        </>
    )
}

export default Understanding

