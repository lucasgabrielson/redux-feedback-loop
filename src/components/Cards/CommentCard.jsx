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
import './Card.css'

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        alignContent: 'space-around',
        justifyContent: 'center',
        backgroundColor: '#16C1DE',
        textAlign: 'center',
        marginTop: 20,
        marginLeft: 60,
        marginRight: 60,
        minHeight: 250,
    },
});

const CommentCard = ( { prompt }) => {
    const dispatch = useDispatch();
    const classes = useStyles();

    const feedback = useSelector(store => {
        return store.feedback;
    })
    return (
        <div>
            <Card variant="outlined" className={ classes.root }>
                <CardContent>
                    <Typography variant="h5" component="p">
                        {prompt}
                        <br />
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link to = '/review'>
                        <Button>Next</Button>
                    </Link>
                </CardActions>
                <CardActions>
                    <CommentBox />
                </CardActions>
    </Card>
        </div>
    )
}

export default CommentCard
