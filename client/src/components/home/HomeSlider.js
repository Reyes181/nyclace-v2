import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import SliderOne from '../../assets/img/sliderone.webp';
import SliderTwo from '../../assets/img/slidertwo.jpg';
import SliderThree from '../../assets/img/sliderthree.webp';
import SliderFour from '../../assets/img/sliderfour.jpg';
import SliderFive from '../../assets/img/sliderfive.jpg';
import SliderSix from '../../assets/img/slidersix.jpg';
import {HomeSliderContainer, HomeSliderImage} from '../../styles/js/home.styles.'

const HomeSlider = () => {
    
    const slides = [
        {
            img: SliderOne
        },
        {
            img: SliderTwo
        },
        {
            img: SliderThree
        },
        {
            img: SliderFour
        },
        {
            img: SliderFive
        },
        {
            img: SliderSix
        }
    ]
    
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        
    }
    
    const generateSlides = () => (
        slides ?
            slides.map((item,i)=>(
                    <div key={i}>
                        <HomeSliderImage
                            style={{
                                background:`url(${item.img})`,
                            }}
                        />   
                    </div>
                     
            ))
        :null
    )
    
    return (
        <HomeSliderContainer>
            <Slider {...settings}>
                {generateSlides()}
            </Slider>
        </HomeSliderContainer>    
    );
};

export default HomeSlider;