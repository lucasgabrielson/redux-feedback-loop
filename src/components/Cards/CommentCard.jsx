import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CommentBox from '../CommentBox/CommentBox'
import { Link } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import Grid from '@material-ui/core/Grid';
import './Card.css'

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
    },
});

const CommentCard = () => {
    const dispatch = useDispatch();
    const classes = useStyles();

    return (
        <div>
            {/* Return Card with link to next page and CommentBox component */}
            <Grid container spacing={3}>
                <Grid item xs={12} className = { classes.root, 'content' }>
                    <Card variant="outlined" className={ classes.root }>
                        <CardContent className ={ classes.card }>
                            <Typography variant="h5" component="p">
                                {'Any comments you want to leave?'}
                                <br />
                            </Typography>
                        </CardContent>
                        <CardActions className = 'card-content'>
                            <CommentBox />
                            <Link to = '/review'>
                                <Button>Next</Button>
                            </Link>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}

export default CommentCard
