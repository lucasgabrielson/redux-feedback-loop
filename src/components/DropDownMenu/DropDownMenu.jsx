import React from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

// create styles for MUI components
const useStyles = makeStyles( theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const DropDownMenu = ( { type } ) => {
    const dispatch = useDispatch();
    const classes = useStyles();

    // dispatch feedback on change location dependent on type prop
    const handleChange = event => {
        dispatch( { type: type, payload: event.target.value } );
    };
    return (
        <div>
            <FormControl required className={classes.formControl}>
                <Select
                    onChange={handleChange}
                    className={classes.selectEmpty}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                </Select>
                <FormHelperText>Required</FormHelperText>
            </FormControl>    
        </div>
    )
    
}

export default DropDownMenu;