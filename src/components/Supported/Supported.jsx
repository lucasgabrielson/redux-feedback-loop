import React from 'react';
import Header from '../Header/Header';
import Form from '../Form/Form';

const Supported = () => {
    return (
        <>
            <Header />
            <Form type = {'Support?'} backButton = {true} header = {'How well are you being supported?'} next = {'/comments'} back = {'/understanding'}/>
        </>
    )
}

export default Supported
