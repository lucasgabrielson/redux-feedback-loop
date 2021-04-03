import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Form = (props) => {
    const dispatch = useDispatch();

    const [ feedback, setFeedback ] = useState('');

    const handleChange = event => {
        console.log( 'in handleChange' );
        setFeedback( event.target.value ); 
    }

    const dispatchToRedux = () => {
        console.log( 'in dispatchToRedux' );
        dispatch( { type: props.property, payload: feedback })
    }

    return (
        <>
            <h2>{props.header}</h2>
            <label>{props.type}</label>
            {/* pass in type as props to special type of input */}
            <input type = 'number' onChange = {handleChange}></input>
            <Link to = {props.next}>
                <button onClick = {() => dispatchToRedux()}>Next</button>
            </Link>
            {props.backButton ? <Link to = { props.back }><button>Back</button></Link> : '' }
        </>
    )
}

export default Form
