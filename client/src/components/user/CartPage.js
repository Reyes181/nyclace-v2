import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { selectCurrentUser, selectIsLoading, selectPurchasedItems, selectPurchaseSuccess } from '../../actions/user.selectors';
import { update, isFormValid, generateData } from '../../utils/FormActions';
import { userPurchaseByCardStart, updateCartItemStart, updateItemQtyStart} from '../../actions/userActions';
import { Form, Dropdown, Checkbox, Button, Input } from 'semantic-ui-react';
import { BiLock } from 'react-icons/bi';
import {AiOutlineStop} from 'react-icons/ai';
import {ShippingOptions, Months, Years} from './ShippingOptions';
import VisaImg from '../../assets/img/visa.png';
import MCImg from '../../assets/img/mc.png';
import PayPalImg from '../../assets/img/paypal.png';
import CartCard from './CartProductCard';
import Spinner from '../../hoc/spinner';
import SuccessPurchaseModal from '../../utils/SuccessPurchaseModal';
import PayPal from '../../utils/PayPal';
import {CartContainer, LeftContainer, RightContainer, LockPadContainer, ShippingContainer, ShippingAddress, ShippingMethod,
    ShippingDetail, FormBox, ShippingPayment, PaymentFormBox, CardIconBox, CardInfoBox, CardInfoLowerBox, ReviewOrder, ReviewDetail,
    CartTitle, CardContainer, CartSummary, SummaryBox, Total, OrderButton, PaypalInfo, PaypalLine
} from '../../styles/js/cart.styles';


const CartPage = ({currentUser, userPurchaseByCardStart, isLoading, purchasedItems, purchaseSuccess, updateCartItemStart, updateItemQtyStart}) => {
    const [userInfo, setUserInfo] = useState('');
    const [orderSuccess, setOrderSuccess] = useState(false);
    const [payOption, setPayOption] = useState('paypal')
    const [shipping, setShipping] = useState('0');
    const [subTotal, setSubTotal] = useState(0);
    const [total, setTotal] = useState(0);
    const [disableButton, setDisableButton] = useState(true);
    const [disablePaypal, setDisbalePaypal] = useState(true);
    const [checkedBox, setCheckedBox] = useState(false)
    const [cardForm, setCardForm] = useState({
        name: {
            value: '',
            validation:{
                required:true
            },
            valid: false,
            validationMessage:'',
            touched: false
        },
        cardNumber: {
            value: '',
            validation:{
                required:true,
                cardNumber: true
            },
            valid: false,
            validationMessage:'',
            touched: false
        },
        month: {
            value: '',
            validation:{
                required:true
            },
            valid: false,
            validationMessage:'',
            touched: false
        },
        year: {
            value: '',
            validation:{
                required:true
            },
            valid: false,
            validationMessage:'',
            touched: false
        },
        ccv: {
            value: '',
            validation:{
                required:true,
                ccv: true
            },
            valid: false,
            validationMessage:'',
            touched: false
        }
    })

    useEffect(() => {
        setUserInfo(currentUser)
    }, [currentUser]);

    useEffect(() => {
        let newTotal = 0
        currentUser.cart.forEach(item => {
            newTotal += parseInt(item.price, 10) * item.qty
        });

        setSubTotal(newTotal);
        setTotal(newTotal);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[userInfo]);

    useEffect(() => {
        if(purchaseSuccess){
            setOrderSuccess(true)
        }
    }, [purchaseSuccess])

    useEffect(() => {
        disableOrderButton();
        disablePaypalBtn();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cardForm, checkedBox, shipping])

    const handleChange = (e, {value}) => {
        let newSumTotal = subTotal
        setShipping(value);
        setTotal(newSumTotal + parseInt(value, 10))
    };

    const handlePayChange = (e, {value}) => {
        setPayOption(value);
    }

    const handleFormChange = (e, data) => {
        const newFormdata = update(data, cardForm, 'cardPayment');
        setCardForm(newFormdata);
    }

    const showError = (inputName) => {
        let errorMessage = <label>
            {
                cardForm[inputName].validationMessage && !cardForm[inputName].valid ?
                    cardForm[inputName].validationMessage
                :null
            }
        </label>
        return errorMessage;
    }

    const disableOrderButton = () => {
        let formIsValid = isFormValid(cardForm, 'cardPayment');
        if(formIsValid && checkedBox && shipping !== '0'){
            setDisableButton(false)
        } else {
            setDisableButton(true)
        }
    }

    const disablePaypalBtn = () => {
        if(checkedBox && shipping !== '0'){
            setDisbalePaypal(false)
        } else {
            setDisbalePaypal(true)
        }
    }

    const monthOptions = Months.map((month) => ({
        'key': month.key,
        'text': month.text,
        'value': month.value
    }));

    const yearOptions = Years.map((year) => ({
        'key': year.key,
        'text': year.text,
        'value': year.value
    }));

    

    const handleCompletePurchase = async () => {
        let cardInfo = generateData(cardForm, 'cardPayment');
        let formIsValid = isFormValid(cardForm, 'cardPayment');
        let dataToSubmit = {'cardInfo': cardInfo, 'total': total, 'paymentType': 'Credit Card', 'shipping': shipping}
        if(formIsValid){
            await userPurchaseByCardStart(dataToSubmit);
        } 
    };

    const updateCart = async (id) => {
       await updateCartItemStart(id)
    };

    const updateItemQty = async (data) => {
        await updateItemQtyStart(data)
    };

    const transactionError = (data) => {
        alert('Paypal error!');
        console.log(data)
    };
    
    const transactionCanceled = (data) => {
        alert('Paypal transaction canceled');
        console.log(data)
    };

    const transactionSuccess = async () => {
        let dataToSubmit = {'cardInfo': 'paypal', 'total': total, 'paymentType': 'PayPal', 'shipping': shipping}
        await userPurchaseByCardStart(dataToSubmit);
        
    }

    
    return (
        <CartContainer>
            {
                isLoading ?
                <Spinner></Spinner>
                :
                <>
                <LeftContainer>
                <h2>
                    CHECKOUT
                </h2>
                <LockPadContainer>
                    <BiLock 
                        size={'1.3rem'}
                    />
                    <p>
                        Your information is secured
                    </p>
                </LockPadContainer>
                <hr/>

                <ShippingContainer>
                    <h4>
                        Shipping Address
                    </h4>
                    <ShippingAddress>
                        <span>{userInfo.name} {userInfo.lastname}</span>
                        <span>{userInfo.street}</span>
                        <span>{userInfo.city} {userInfo.state} {userInfo.zipcode}</span>
                        <span>{userInfo.phone}</span>
                    </ShippingAddress>
                </ShippingContainer>
                <hr/>

                <ShippingMethod>
                    <h4>
                        Shipping Method
                    </h4>

                    <Form>
                        
                        {ShippingOptions.map((option, i) => (
                            <FormBox key={i}>
                                <Form.Radio
                                    label={option.Title}
                                    value={option.Value}
                                    checked={shipping === option.Value}
                                    onChange={handleChange}
                                />
                                <ShippingDetail>
                                    <span>{option.Desc}</span>
                                    <span>{option.Price}</span>
                                </ShippingDetail>
                            </FormBox>
                        ))}
                        
                    </Form>
                </ShippingMethod>
                <hr/>

                <ShippingPayment>
                    <h4>
                        Payment
                    </h4>
                    <Form>
                        <PaymentFormBox>
                            <Form.Radio
                                label='Credit Card'
                                value='card'
                                checked={payOption === 'card'}
                                onChange={handlePayChange}
                            />
                            <CardIconBox>
                                <div style={{background:`url(${VisaImg})`}}/>
                                <div style={{background:`url(${MCImg})`}}/>
                            </CardIconBox>
                            
                            <CardInfoBox
                                style={payOption === 'card' ? {display: 'flex'} : {display: 'none'}}
                            >
                                <Form.Field>
                                    <label>Card Holder Name*</label>
                                    <Input 
                                        placeholder='Full Name on Card'
                                        content={'name'}
                                        onChange={handleFormChange}
                                        maxLength='20'
                                        minLength='2'
                                        focus
                                    />
                                    {showError('name')}
                                </Form.Field>

                                <Form.Field>
                                    <label>Card Number*</label>
                                    <Input 
                                        placeholder='5555555555554444'
                                        onChange={handleFormChange}
                                        maxLength='16'
                                        minLength='16'
                                        pattern="^-?[0-9]\d*\.?\d*$"
                                        content={'cardNumber'}
                                        focus
                                    />
                                    {showError('cardNumber')}
                                </Form.Field>
                            </CardInfoBox>
                            <CardInfoLowerBox
                                 style={payOption === 'card' ? {display: 'block'} : {display: 'none'}}
                            >
                                <Form.Group>
                                    <Form.Field>
                                        <label>Expiration Date*</label>
                                        <Dropdown 
                                            onChange={handleFormChange}
                                            placeholder='Month'
                                            search
                                            selection
                                            options={monthOptions}
                                            value={cardForm.month.value}
                                            content={'month'}
                                            focus={cardForm ? 'true': 'false'}
                                        />
                                        {showError('month')}
                                    </Form.Field>

                                    <Form.Field>
                                        <label>&nbsp;</label>
                                        <Dropdown 
                                            onChange={handleFormChange}
                                            placeholder='Year'
                                            selection
                                            options={yearOptions}
                                            value={cardForm.year.value}
                                            content={'year'}
                                            focus={cardForm ? 'true': 'false'}
                                        />
                                        {showError('year')}
                                    </Form.Field>

                                    <Form.Field>
                                        <label>CCV*</label>
                                        <Input 
                                            placeholder='***'
                                            content={'ccv'}
                                            maxLength='3'
                                            minLength='3'
                                            onChange={handleFormChange}
                                            focus
                                        />
                                        {showError('ccv')}
                                    </Form.Field>
                                </Form.Group>
                            </CardInfoLowerBox>
                            
                            <Form.Radio
                                label='PayPal'
                                value='paypal'
                                checked={payOption === 'paypal'}
                                onChange={handlePayChange}
                            />
                            <CardIconBox>
                                <div style={{background: `url(${PayPalImg})`, width: '5rem'}}/>
                            </CardIconBox>
                        </PaymentFormBox>
                    </Form>
                </ShippingPayment>
                <hr/>

                <ReviewOrder>
                    <h4>
                        Review order
                    </h4>
                    <ReviewDetail>
                        <div>
                            <span>Subtotal</span>
                            <span>${subTotal}</span>
                        </div>
                        <div>
                            <span>Shipping charges</span>
                            <span
                                style={shipping === 0 ? {color:'#007FFF'} : {color: 'black'}}
                            >
                                {shipping !== 0 ? `$${shipping}` : 'FREE'}
                            </span>
                        </div>
                        <hr/>
                        <div>
                            <span>Total</span>
                            <span style={{fontSize: '1.65rem'}}>${total}</span>
                        </div>
                    </ReviewDetail>
                </ReviewOrder>
            </LeftContainer>

                <RightContainer>
                <CartTitle>
                    <span>Your Items ({currentUser.cart.length})</span>
                </CartTitle>

                <CardContainer>
                    {currentUser.cart.length !== 0 ?
                        <>
                        {currentUser.cart.map((item, i) => (
                            <CartCard
                                key={i}
                                name={item.name}
                                price={item.price}
                                size={item.size}
                                productId={item.id}
                                productImg={item.image}
                                qty={item.qty}
                                updateCart={updateCart}
                                updateItemQty={updateItemQty}
                            />
                        ))}
                        </>
                    :
                       <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                            <AiOutlineStop
                                color='#702963'
                                size={'10rem'}
                            />
                            <h3>CART IS EMPTY</h3>
                       </div>
                    }
                </CardContainer>

                <CartSummary>
                    <h2>Summary</h2>
                    <SummaryBox>
                        <div>
                            <span>Subtotal</span>
                            <span>${subTotal}</span>
                        </div>
                        <div>
                            <span>Shipping charges</span>
                            <span
                                style={shipping === 0 ? {color:'#007FFF'} : {color: 'black'}}
                            >
                                {shipping !== 0 ? `$${shipping}` : 'FREE'}
                            </span>
                        </div>

                        <Total>
                            <h3>Total</h3>
                            <span>${total}</span>
                        </Total>
                    </SummaryBox>

                    <Checkbox
                        onChange={() => setCheckedBox(!checkedBox)}
                        label='By accepting the order, I accept the terms of the user agreement'
                    />

                    <PaypalInfo>
                        <div style={{textAlign: 'center'}}>PayPal Login</div>
                        <PaypalLine>
                            <span>EMAIL:</span>
                            <span>sb-3nwqj7635072@personal.example.com</span>
                        </PaypalLine>
                        <PaypalLine>
                            <span>PASSWORD:</span>
                            <span>nyclace123</span>
                        </PaypalLine>
                    </PaypalInfo>

                    <OrderButton>
                        {currentUser.cart.length !== 0 ?
                            <>
                                {payOption === 'card' ? 
                                    <Button 
                                        onClick={handleCompletePurchase} 
                                        disabled={disableButton} 
                                        fluid 
                                        color='blue'
                                    >
                                        Order
                                    </Button>
                                    :
                                    <PayPal
                                        toPay={total}
                                        transactionError={(data) => transactionError(data)}
                                        transactionCanceled={(data)=> transactionCanceled(data)}
                                        onSuccess={(data)=> transactionSuccess(data)}
                                        disabled={disablePaypal}
                                    />
                                }
                            </>

                            :
                            null
                        }
                        
                    </OrderButton>
                    
                </CartSummary>
            </RightContainer>
            {
                orderSuccess ?
                    <SuccessPurchaseModal
                        success={orderSuccess}
                        order={purchasedItems}
                    />
                :
                    null
            }   
            
            </>

                

                
            }
        </CartContainer>
        
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    isLoading: selectIsLoading,
    purchasedItems: selectPurchasedItems,
    purchaseSuccess: selectPurchaseSuccess
});

const mapDispatchToProps = dispatch => ({
    userPurchaseByCardStart: (data) => dispatch(userPurchaseByCardStart(data)),
    updateCartItemStart: (data) => dispatch(updateCartItemStart(data)),
    updateItemQtyStart: (data) => dispatch(updateItemQtyStart(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);