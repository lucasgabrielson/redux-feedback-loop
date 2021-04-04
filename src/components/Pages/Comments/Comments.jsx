import React from 'react';
import Header from '../../Header/Header';
import NavBar from '../../NavBar/NavBar';
import CommentCard from '../../Cards/CommentCard';

const Comments = () => {

    return (
        <>
            <Header />
            <NavBar />
            <CommentCard prompt = { 'Any comments you want to leave?' } />
        </>
    )
}

export default Comments
