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

const useStyles = makeStyles({
    root: {
        flexGrow: 1
    },
    card: {
        display: 'flex',
        flexWrap: 'wrap',
        alignContent: 'space-around',
        justifyContent: 'center',
        backgroundColor: '#f2a154',
        textAlign: 'center',
        marginTop: 20,
        marginLeft: 60,
        marginRight: 60,
        minHeight: 250,
    },
    title: {

    }
});

const RatingCard = ( { type, next, prompt } ) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const feedback = useSelector( store => {
        return store.feedback;
    })

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
            <Grid container spacing={3}>
                <Grid item xs={12} className = { classes.root, 'content' }>
                    <Card variant="outlined" className ={ classes.card }>
                        <CardContent>
                            <Typography className={ classes.title } variant="h5" component="p">
                                {prompt}
                                <br />
                            </Typography>
                        </CardContent>
                        <CardActions className='button'>
                            <DropDownMenu type = { type }/>
                        </CardActions>
                        <CardActions>
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
