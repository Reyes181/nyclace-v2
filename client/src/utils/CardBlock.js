import React from 'react';
import Card from './Card';
import { AiOutlineLoading } from 'react-icons/ai';
import {ProductHeader, ProductList, LoadingSpinner, ProductContainer} from '../styles/js/card.styles';

const CardBlock = (props) => {
    const renderCards = () => (
        props.list ?
            props.list.map((card, i) => (
                <Card
                    key={i}
                    {...card}
                />
            ))
        :
        <LoadingSpinner>
            <AiOutlineLoading size={'4rem'}/>
        </LoadingSpinner>
    )

    return (
        <ProductContainer>
            {
                props.title ?
                    <ProductHeader>
                        {props.title}
                    </ProductHeader>
                : null
            }
            <ProductList>
                {renderCards(props.list)}
            </ProductList>
        </ProductContainer>
    )
}

export default CardBlock