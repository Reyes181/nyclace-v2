import React, {useEffect} from 'react';
import {BsFillTrashFill, BsFillPlusSquareFill} from 'react-icons/bs';
import {AiFillMinusSquare} from 'react-icons/ai';
import {CardBox, CardImgBox, CardProdInfo, SizeQty, ProdTitle, Price, ItemID, IconsBox, QtyIcons} from '../../styles/js/cart.styles';

const CartCard = ({name, productId, price, size, productImg, qty, updateCart, updateItemQty}) => {

    useEffect(() => {
        if(qty === 0){
            updateCart(productId)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [qty]);
    
    return (
        <CardBox>
            <CardImgBox>
                <div style={{background: `url(${productImg})`}}/>
            </CardImgBox>
            
            <CardProdInfo>
                <ProdTitle>{name}</ProdTitle>
                <ItemID>item: {productId}</ItemID>
                <SizeQty>
                    <p>size: <span>{size}</span></p>
                    <p>qty: <span>{qty}</span></p>
                </SizeQty>
                <Price>${price}</Price>
            </CardProdInfo>

            <IconsBox>
                <BsFillTrashFill
                    size={'1.5rem'}
                    color='#D0D0D0'
                    onClick={() => updateCart(productId)}
                    style={{cursor: 'pointer'}}
                />

                <QtyIcons>
                    <AiFillMinusSquare
                        size={'1.5rem'}
                        color='#007FFF'
                        onClick={() => updateItemQty({'id': productId , 'type': 'sub'})}
                        style={{cursor: 'pointer'}}
                    />
                    <BsFillPlusSquareFill
                        size={'1.2rem'}
                        color='#007FFF'
                        onClick={() => updateItemQty({'id': productId , 'type': 'inc'})}
                        style={{cursor: 'pointer'}}
                    />
                </QtyIcons>
            </IconsBox>

        </CardBox>
    )
};

export default CartCard;