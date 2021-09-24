import React from 'react';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { clearPurchaseOrderStart } from '../actions/userActions';
import { selectPurchaseSuccess } from '../actions/user.selectors';
import { Button, Header, Modal } from 'semantic-ui-react';
import MiniPromo from '../assets/img/mini_promo_adidas.png';
import {HeaderTitle, OrderSummary, LeftSide, RightSide, CardContainer, CardBox,
    CardImgBox, CardProdInfo, ProdTitle, ItemID, SizeQty, Price, TotalBox, PaymentNote,
    PaymentInfo, ButtonBox, MiniImg
} from '../styles/js/purchased.styles';


const SuccessPurchaseModal = ({handleClose, success, order, clearPurchaseOrderStart, purchaseSuccess}) => {
    return (
        <Modal
            
            onClose={() => handleClose(false)}
            size='large'
            open={purchaseSuccess}
        >
            <Header>
                <HeaderTitle>
                    Confirmation Order: {order ? order[0].porder : 'Zero'}
                </HeaderTitle>
            </Header>
            <Modal.Content>
                <h2>Order Summary</h2>
                <OrderSummary>
                    <LeftSide>
                        <CardContainer>
                            {order[0].items ? 
                                <>
                                    {order[0].items.map((item,i)=>(
                                        <CardBox key={i}>
                                            <CardImgBox>
                                                <div style={{background: `url(${item.image})`}}/>
                                            </CardImgBox>
                                            
                                            <CardProdInfo>
                                                <ProdTitle>{item.name}</ProdTitle>
                                                <ItemID>item: {item.id}</ItemID>
                                                <SizeQty>
                                                    <p>size: <span>{item.size}</span></p>
                                                    <p>qty: <span>{item.qty}</span></p>
                                                </SizeQty>
                                                <Price>${item.price}</Price>
                                            </CardProdInfo>
                                        </CardBox>
                                    ))}
                                </>
                                :
                                null
                            }
                        </CardContainer>
                    </LeftSide>

                    <RightSide>
                        <PaymentNote>
                            {order[0].card ? 
                                <>
                                    <h3>Thank you for your order.</h3>
                                    {order[0].paymentType === 'Credit Card' ?
                                        <div>
                                            <div>Purchase made by Credit Card</div>
                                            <PaymentInfo>
                                                <p>{order[0].card.name}</p>
                                                <p>{order[0].card.cardNumber.replace(/.{1,12}/, (m) => "*".repeat(m.length))}</p>
                                                <p>
                                                    <span>Exp: {order[0].card.month} / {order[0].card.year}</span>
                                                    <span>CCV: {order[0].card.ccv}</span>
                                                </p>
                                            </PaymentInfo>
                                        </div>
                                        :
                                        <div>
                                            <div>Purchase made on PayPal</div>
                                            <PaymentInfo>
                                                <p>John Doe</p>
                                                <p>sb-3nwqj7635072@personal.example.com</p>
                                            </PaymentInfo>
                                        </div>
                                    }
 
                                </>
                                :
                                null
                            }


                            <MiniImg style={{background: `url(${MiniPromo})`}}/>
                        </PaymentNote>

                        <TotalBox>
                            <div>Total: <span>${order[0].orderTotal}</span></div>
                        </TotalBox>

                    </RightSide>

                </OrderSummary>
                
                
            </Modal.Content>

            <Modal.Actions>
                    <ButtonBox>
                            <Button
                                onClick={clearPurchaseOrderStart}
                                color='teal'
                                fluid
                            >
                                CONFIRM PURCHASE 
                            </Button>
                    </ButtonBox>

            </Modal.Actions>

        </Modal>
    )
}

const mapStateToProps = createStructuredSelector({
    purchaseSuccess: selectPurchaseSuccess
});

const mapDispatchToProps = dispatch => ({
    clearPurchaseOrderStart: () => dispatch(clearPurchaseOrderStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(SuccessPurchaseModal);