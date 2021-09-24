import React from 'react';
import { Image, Modal, Header } from 'semantic-ui-react';
import {ItemAddedToCart} from '../styles/js/product.styles'

const CartAddedModal = ({details, openCart}) => {
    return (
        <Modal
            size='small'
            open={openCart}
        >
            <Header>
                Added to cart
            </Header>
            <Modal.Content>
                <ItemAddedToCart>
                    <div>
                        <Image
                            size="small" 
                            src={
                                details.images === undefined ?
                                'https://i.stack.imgur.com/y9DpT.jpg'
                                :
                                details.images[0]
                            } 
                            wrapped
                        />
                    </div>
                    <div>
                        <p>{details.name}</p>
                        <p>{details.size}</p>
                    </div>
                   
                </ItemAddedToCart>
            </Modal.Content>

        </Modal>
    )
}

export default CartAddedModal