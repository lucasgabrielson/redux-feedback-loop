import React from 'react'
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link, useHistory } from 'react-router-dom';
import {useSelector, useDispatch } from 'react-redux';
import swal from 'sweetalert';
// import 'fontsource-roboto';

const useStyles = makeStyles({
    root: {
        backgroundColor: '#BBA27D',
        marginTop: 40,
        margin: 'auto',
        minWidth: 275,
        maxWidth: 500
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

const ReviewCard = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const classes = useStyles();

    const feedback = useSelector( store => {
        return store.feedback;
    })

    const postFeedback = () => {
        console.log( 'in postFeedback' );
        axios.post( '/api/feedback', feedback )
            .then( response => {
                console.log( 'back from POST ');
                swal({
                    title: "Success!",
                    text: "Click Ok to Submit more feedback!",
                    icon: "success"
                }).then(function() {
                    dispatch( { type: 'clearFeedback' } )
                    history.push('/');
                })
            }).catch( err => {
                console.log( err );
                alert( 'error posting feedback to /api/feedback' );
            })
    }
    
    return (
        <div>
            <Card variant="outlined" className={classes.root}>
                <CardContent>
                    <Typography variant="h4" component="p">
                    Thank you for the feedback!
                    <br />
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button onClick={postFeedback} size="large">Submit</Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default ReviewCard;