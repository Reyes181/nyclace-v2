import React from 'react';
import {Route} from 'react-router-dom';

const HashRoute = ({component: C, isAuth, pathRoute}) => {
    const uniqueHash = 'eyJhbGciOiJIUzI1NiJ9.ODk4NzY1Njc1NGxvd3NlbnNl.GrTJ9e8D1scpDQ95yW9BP2aZuGPHcspqr8qe4-LIiHA'
    return (
        <Route
            path={pathRoute}
            exact
            render={props =>
                !isAuth ?
                <C {...props} uniqueHash={uniqueHash}/>
                :
                <C {...props} uniqueHash={uniqueHash}/>
            }
        />
    );
};

export default HashRoute;