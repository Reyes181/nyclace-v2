import React from 'react';
import NoImg from '../assets/img/nyclace_icon.png';
import {ProductCardContainer, ProductDesc, ProductImg, ProductPrice} from '../styles/js/card.styles';

const Card = (props) => {
    const renderCardImages = (images) => {
        if(images.length > 0){
            return images[0].url ?
                images[0].url
            : images[0]
        } else {
            return NoImg
        }
    }

    return (
        <ProductCardContainer to={`/product_detail/${props._id}`}>
            
                <ProductImg style={{background: `url(${renderCardImages(props.images)})`}}/>
                <ProductDesc style={props.noDisplay && {display: 'none'}}>
                    <span>{props.model}</span>
                    <span>{props.name}</span>
                    <ProductPrice>${props.price}</ProductPrice>
                </ProductDesc>
            
        </ProductCardContainer>
    )
}

export default Card;