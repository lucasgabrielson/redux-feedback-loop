import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Feeling from '../Pages/Feeling/Feeling';
import Understanding from '../Pages/Understanding/Understanding';
import Supported from '../Pages/Supported/Supported';
import Comments from '../Pages/Comments/Comments';
import Review from '../Pages/Review/Review';
import Admin from '../Pages/Admin/Admin';

const Routes = () => {
    return (
        <>
            <Router>
                <Route path = '/' exact>
                    <Feeling />
                </Route>
                <Route path = '/understanding' exact>
                    <Understanding />
                </Route>
                <Route path = '/supported' exact>
                    <Supported />
                </Route>
                <Route path = '/comments' exact>
                    <Comments />
                </Route>
                <Route path = '/review' exact>
                    <Review />
                </Route>
                <Route path = '/admin' exact>
                    <Admin />
                </Route>
            </Router> 
        </>
    )
}

export default Routes
