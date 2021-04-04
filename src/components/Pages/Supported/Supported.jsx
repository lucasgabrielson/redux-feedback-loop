import React from 'react';
import Header from '../../Header/Header';
import NavBar from '../../NavBar/NavBar';
import RatingCard from '../../Cards/RatingCard'
const Supported = () => {
    return (
        <>
            <Header />
            <NavBar />
            <RatingCard type = { 'support' } next = { '/comments' } back = { '/understanding' } prompt = { 'How well are you being supported?' }/>
        </>
    )
}

export default Supported

