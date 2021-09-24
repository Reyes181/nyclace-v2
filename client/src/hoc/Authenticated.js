import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const Authenticated = ({component: C, isAuth, pathRoute}) => {
    return (
        <Route
            path={pathRoute}
            exact
            render={props =>
                isAuth ?
                <C {...props}/>
                :
                <Redirect
                    to='/account/register'
                />
            }
        />
    );
};

export default Authenticated;