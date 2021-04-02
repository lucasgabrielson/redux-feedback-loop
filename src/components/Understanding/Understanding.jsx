import React from 'react';
import Header from '../Header/Header';
import Form from '../Form/Form';

const Understanding = () => {
    return (
        <>
            <Header />
            <Form type = {'Understanding?'} backButton = {true} header = {'How well are you understanding the content?'} next = {'/supported'} back = {'/'}/>
        </>
    )
}

export default Understanding
