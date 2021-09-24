import React from 'react';
import {Route} from 'react-router-dom';

const Unauthenticated = ({component: C, isAuth, pathRoute, isLoadingContent}) => {
    return (
        <Route
            path={pathRoute}
            exact
            render={props =>
                !isAuth ?
                <C {...props} isLoading={isLoadingContent}/>
                :
                <C {...props}/>
            }
        />
    );
};

export default Unauthenticated;