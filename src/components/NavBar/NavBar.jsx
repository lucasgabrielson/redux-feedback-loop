import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: 0,
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 20
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const NavBar = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Dropdown>
                        <Dropdown.Toggle id="dropdown-basic">
                            <IconButton edge="start" className={classes.menuButton} aria-label="menu">
                                <MenuIcon />
                            </IconButton>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/">Feelings</Dropdown.Item>
                            <Dropdown.Item href="#/understanding">Understanding</Dropdown.Item>
                            <Dropdown.Item href="#/support">Support</Dropdown.Item>
                            <Dropdown.Item href="#/comments">Comments</Dropdown.Item>
                            <Dropdown.Item href="#/review">Review</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar
