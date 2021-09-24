import React from 'react';
import Slider from "react-slick";
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectDetail} from '../../actions/product.selectors';
import Spinner from '../../hoc/spinner';
import {MiniSlider} from '../../styles/js/product.styles';

const ProductMiniSlider = (props) => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: false,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
        
    }

    return (
        props.isLoading ? <Spinner/> 
        :
        <MiniSlider>
            <Slider {...settings}>
                {props.products.images.map((item, i) => (            
                    <img key={i} src={`${item}`} alt='product'/>
                ))
                }
            </Slider>
        </MiniSlider>
    );
};

const mapStateToProps = createStructuredSelector({
    products: selectDetail
});

export default connect(mapStateToProps)(ProductMiniSlider);