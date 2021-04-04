import React from 'react'
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import swal from 'sweetalert';

// create styles for MUI components
const useStyles = makeStyles({
    root: {
        display: 'grid',
        alignContent: 'space-around',
        justifyContent: 'center',
        backgroundColor: '#F8EFE4',
        textAlign: 'center',
        marginTop: 20,
        marginLeft: 60,
        marginRight: 60,
        minHeight: 250,
        borderRadius: 4,
        text: 'white' 
    }
});

const ReviewCard = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const classes = useStyles();

    const feedback = useSelector( store => {
        return store.feedback;
    })
    /**
     * POST call to /api/feedback sending feedback object
     * Sweetalert response on success with OK button
     * navigating back to '/' i.e. home page
     * On error alert user and log err to console
     */
    const postFeedback = () => {
        console.log( 'in postFeedback' );
        axios.post( '/api/feedback', feedback )
            .then( response => {
                console.log( 'back from POST ');
                swal({
                    title: "Thank you",
                    text: "Click OK to Submit more feedback",
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
            {/* 
                Review Card displays feedback submitted to the DOM 
                Submit button executes POST route and if successful
                returns user to the home page
            */}
            <Card variant="outlined" className={classes.root}>
                <CardContent>
                    <Typography variant="h4" component="p">
                    Review Your Feedback
                    <br />
                    </Typography>
                </CardContent>
                <CardContent>
                    <Typography variant="h6" component="p">
                        Feelings: {feedback.feeling}
                        <br />
                        Understanding: {feedback.understanding}
                        <br />
                        Support: {feedback.support}
                        <br />
                        Comments: {feedback.comments}
                        <br />
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button onClick={postFeedback} size="large" variant="outlined">Submit</Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default ReviewCard;