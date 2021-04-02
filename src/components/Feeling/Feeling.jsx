import React from 'react';
import Header from '../Header/Header';
import Form from '../Form/Form';
const Feeling = () => {
    return (
        <div>
            <Header />
            <Form type = {'feeling'} backButton = {false} header = {'How are you feeling today?'}/>
        </div>
    )
}

export default Feeling
