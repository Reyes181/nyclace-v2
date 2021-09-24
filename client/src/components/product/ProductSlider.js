import React, {useState} from 'react';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectDetail} from '../../actions/product.selectors';
import {ProductSliderImage, ProductSlide} from '../../styles/js/product.styles';
import Spinner from '../../hoc/spinner';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const ProductSlider = (props) => {
    const [open, setOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0)

    const generateSlides = () => (
        props.products ?
        props.products.images.map((item,i)=>(
                        <ProductSliderImage
                            onClick={() => setOpen(true)}
                            key={i}
                        >
                            <img alt='Product' src={`${item}`} />
                            {open && (
                            <Lightbox
                                    mainSrc={props.products.images[photoIndex]}
                                    nextSrc={props.products.images[(photoIndex + 1) % props.products.images.length]}
                                    prevSrc={props.products.images[(photoIndex + props.products.images.length - 1) % props.products.images.length]}
                                    onCloseRequest={() => setOpen(false)}
                                    onMovePrevRequest={() =>
                                        setPhotoIndex((photoIndex + props.products.images - 1) % props.products.images)
                                    }
                                    onMoveNextRequest={() =>
                                        setPhotoIndex((photoIndex + 1) % props.products.images.length)                                       
                                    }
                                />
                            )}
                        </ProductSliderImage>   
                    
            ))
        :null
    )

    return (
        props.isLoading ? <Spinner/> 
        :
        <ProductSlide>
            {generateSlides()}
        </ProductSlide>
    );
}

const mapStateToProps = createStructuredSelector({
    products: selectDetail
});

export default connect(mapStateToProps)(ProductSlider);