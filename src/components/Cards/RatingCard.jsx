import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DropDownMenu from '../DropDownMenu/DropDownMenu';
import Grid from '@material-ui/core/Grid';
import './Card.css'

// create styles for Grid and Card components
const useStyles = makeStyles({
    root: {
        flexGrow: 1
    },
    card: {
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
/**
 * Function accepts three props:
 *  type: the type of page for which the RatingCard is being used 
 *      'feeling', 'understanding', or 'support'
 *  next: the destination for where the Next button should bring the user
 *  prompt: the message displayed on the DOM regarding the type of page
 */
const RatingCard = ( { type, next, prompt } ) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const feedback = useSelector( store => {
        return store.feedback;
    })
    /**
     * feedbackExists checks redux to see if each of the following
     * properties is defined. If they are defined it returns true
     * and then the Next button is conditionally rendered only
     * once feedback has been entered.
     */
    const feedbackExists = () => {
        switch( type ) {
            case 'feeling':
                if( feedback.feeling ) return true;
            case 'understanding':
                if( feedback.understanding ) return true;
            case 'support':
                if( feedback.support ) return true;
            default: return false;
        }
    }

    return (
        <div>
            {/* 
                Return a card with heading, dropdown menu, and ternary operator for conditionally
                rendering the next button
             */}
            <Grid container spacing={3}>
                <Grid item xs={12} className = { classes.root, 'content' }>
                    <Card variant="outlined" className ={ classes.card }>
                        <CardContent>
                            <Typography variant="h5" component="p">
                                {prompt}
                                <br />
                            </Typography>
                        </CardContent>
                        <CardActions className = 'card-content'>
                            <DropDownMenu type = { type }/>
                            {feedbackExists() ? 
                                <Link to = {next}>
                                    <Button>Next</Button>
                                </Link> :
                                ''
                            }
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}

export default RatingCard
