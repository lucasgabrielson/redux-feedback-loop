import React from 'react';
import { Link } from 'react-router-dom';

const Form = (props) => {
    return (
        <>
            <h2>{props.header}</h2>
            <label>{props.type}</label>
            <input type = 'number'></input>
            <Link to = {props.next}>
                <button>Next</button>
            </Link>
            {props.backButton ? <Link to = { props.back }><button>Back</button></Link> : '' }
        </>
    )
}

export default Form
