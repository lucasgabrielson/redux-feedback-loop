import React from 'react';
import { Link } from 'react-router-dom';

const Form = (props) => {
    return (
        <>
            <h2>{props.header}</h2>
            <label>{props.type}</label>
            <input type = 'number'></input>
            <button>Next</button>
            {props.backButton ? <button>Back</button> : '' }
        </>
    )
}

export default Form
