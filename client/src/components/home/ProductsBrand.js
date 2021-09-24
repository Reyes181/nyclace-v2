import React from 'react';
import CardBlock from '../../utils/CardBlock';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectByBrand} from '../../actions/product.selectors';
import Spinner from '../../hoc/spinner';


const ProductsBrand = ( props ) => {

    return (
        props.isLoading ? <Spinner/> 
        : 
        <CardBlock
            list={props.products}
            title='Jordan'
        />
    )
}

const mapStateToProps = createStructuredSelector({
    products: selectByBrand
});

export default connect(mapStateToProps)(ProductsBrand);