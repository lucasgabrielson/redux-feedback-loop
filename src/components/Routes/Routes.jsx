import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Supported from '../Supported/Supported';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import Admin from '../Admin/Admin';

const Routes = () => {
    return (
        <>
            <Router>
                <Route path = '/'>
                    <Feeling />
                </Route>
                <Route path = '/understanding'>
                    <Understanding />
                </Route>
                <Route path = '/supported'>
                    <Supported />
                </Route>
                <Route path = '/comments'>
                    <Comments />
                </Route>
                <Route path = '/review'>
                    <Review />
                </Route>
                <Route path = '/admin'>
                    <Admin />
                </Route>
            </Router> 
        </>
    )
}

export default Routes
