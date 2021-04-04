import React from 'react';
import {useDispatch} from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

// make styles for the multiline comments
const useStyles = makeStyles( theme => ( {
    root: {
        '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: 'auto',
    },
    }
}));

const CommentBox =  () => {
    const dispatch = useDispatch();
    const classes = useStyles();

    // dispatch the comments to redux on change
    const handleChange = event => {
        dispatch( { type: 'comments', payload: event.target.value})
    }
    return (
        <form className={classes.root} noValidate autoComplete="off">
            <TextField
                id="outlined-multiline-static"
                label="Comments"
                onChange={handleChange}
                multiline
                rows={4}
                variant="outlined"
            />    
        </form>
    )
}

export default CommentBox
