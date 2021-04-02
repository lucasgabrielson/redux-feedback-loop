import React from 'react'

const Form = (props) => {
    return (
        <>
            <label>{props.header}</label>
            <input type = 'number'></input>
            <button>Next</button>
            {props.backButton ? <button>Back</button> : '' }
        </>
    )
}

export default Form
