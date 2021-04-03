import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import DropDownMenu from '../DropDownMenu/DropDownMenu';

const Form = (props) => {
    const dispatch = useDispatch();

    const [ feedback, setFeedback ] = useState('');

    const handleChange = event => {
        console.log( 'in handleChange' );
        setFeedback( event.target.value ); 
    }

    const dispatchToRedux = () => {
        console.log( 'in dispatchToRedux' );
        dispatch( { type: props.type, payload: feedback })
    }

    return (
        <>
            <h2>{props.header}</h2>
            <label>{props.type}</label>
            {props.input === 'number' ? 
                <select onChange = { handleChange }>
                    <option value = '' selected disabled hidden>Choose here</option>
                    <option value = '1'>1</option>
                    <option value = '2'>2</option>
                    <option value = '3'>3</option>
                    <option value = '4'>4</option>
                    <option value = '5'>5</option>
                </select> : 
                <input type = {props.input} onChange = {handleChange}></input> }
            <Link to = {props.next}>
                <button onClick = {() => dispatchToRedux()}>Next</button>
            </Link>
            {props.backButton ? <Link to = { props.back }><button>Back</button></Link> : '' }
        </>
    )
}

export default Form
