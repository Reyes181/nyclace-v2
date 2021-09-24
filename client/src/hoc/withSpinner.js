import React from 'react';
import Spinner from './spinner';

const WithSpinner = WrappedComponent => {
    const loadSpinner = ({isLoading, ...otherProps}) => {
        return isLoading ? (
            <Spinner/>
        ) : (
            <WrappedComponent {...otherProps} />
        )
    };
    return loadSpinner;
};

export default WithSpinner;