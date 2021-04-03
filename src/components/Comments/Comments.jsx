import React from 'react';
import Header from '../Header/Header';
import Form from '../Form/Form';

const Comments = () => {
    return (
        <>
            <Header />
            <Form type = {'Comments'} backButton = {true} header = {'Any comments you want to leave?'} next = {'/review'} back = {'/supported'} input = {'text'}/>
        </>
    )
}

export default Comments
