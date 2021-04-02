import React from 'react'

const Comments = () => {
    return (
        <>
            <Header />
            <Form type = {'Comments'} backButton = {true} header = {'Any comments you want to leave?'} next = {'review'}/>
        </>
    )
}

export default Comments
