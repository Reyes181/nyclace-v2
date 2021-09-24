import React, {useState, useEffect} from 'react';
import Slider from 'react-slick';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { selectRandom } from '../../actions/product.selectors';
import Card from '../../utils/Card';

import {ProductSliderContainer, SliderHeader, PrevArrows, NextArrows} from '../../styles/js/productSlider.styles';
import '../../styles/css/productSlider.styles.scss';
import Spinner from '../../hoc/spinner';

const ProductRandom = ({random, isLoading}) => {
    const [sizeWidth, setSizeWidth] = useState(window.innerWidth) 
    const [size, setSize] = useState(3);

    function PrevArrow(props) {
        const { onClick } = props;
        return (
            <PrevArrows
                className='aroow'
                onClick={onClick}
            />
        );
    }

    function NextArrow(props) {
        const { onClick } = props;
        return (
            <NextArrows
                
                onClick={onClick}
            />
        );
    }

    const settings = {
        dots: false,
        infinite: true,
        autoplay: false,
        speed: 1000,
        slidesToShow: size,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow/>
        
    }

    const update = () => {
        setSizeWidth(window.innerWidth);
    };
    
    useEffect(() => {
        
        window.addEventListener("resize", update)
        if(sizeWidth < 700){
           return setSize(1)
        }
        return () => window.removeEventListener("resize", update)
    },[sizeWidth])

    const shuffled = random !== null && random.sort(() => 0.5 - Math.random())

   
    return (
        <ProductSliderContainer>
            {
                isLoading ? <Spinner/>
                :
                <>
                    <SliderHeader>
                        You May Also Like
                    </SliderHeader>
                    <Slider {...settings}>
                        {shuffled.slice(0, 6).map(item => (            
                            <Card noDisplay key={item._id} {...item}/>
                        ))
                        }
                    </Slider>
                </>
            }
        </ProductSliderContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    random: selectRandom
});

export default connect(mapStateToProps)(ProductRandom)