import React from 'react'

const DropDownMenu = ( { handleChange } ) => {
    return (
        <div>
            <select onChange = { handleChange() }>
                    <option value = '1' >1</option>
                    <option value = '2'>2</option>
                    <option value = '3'>3</option>
                    <option value = '4'>4</option>
                    <option value = '5'>5</option>
            </select>    
        </div>
    )
    
}

export default DropDownMenu;

