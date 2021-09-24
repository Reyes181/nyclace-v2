import React from 'react';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectArrival} from '../../actions/product.selectors';
import CardBlock from '../../utils/CardBlock';
import Spinner from '../../hoc/spinner';

const HomeArrival = (props) => {
    return (
        props.isLoading ? <Spinner/>
        : 
        <CardBlock
            list={props.products}
            title='New Arrivals'
        />
    // <>{console.log(props.products)}</>
    )
};

const mapStateToProps = createStructuredSelector({
    products: selectArrival
});

export default connect(mapStateToProps)(HomeArrival);