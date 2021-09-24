import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';
import {MessageNotify} from '../styles/js/cart.styles';

const PayPal = ({toPay, disabled, onSuccess}) => {
    let env = 'sandbox';
    let currency = 'USD';
    let total = toPay;
    
    const client = {
        sandbox:'Ac48QDSWfWVaUsgr1gbQsQ8BOyjD-1ahVbeU-nU6TeyIaqFRGIrhGLTdIHuaB1bGlt3y0Iem0j96y7nm',
        production:''
    }

    const onSuccessPayment = (payment) => {
        onSuccess(JSON.stringify(payment));
    };

    const onCancel = (data) => {
        console.log(JSON.stringify(data))
    };
    
    const onError = (err)=> {
        console.log(JSON.stringify(err))
    };
    return (
        <div>
            {disabled ?
                <MessageNotify>Choose Shipping and Agree to Terms</MessageNotify>
                :
                <PaypalExpressBtn
                    env={env}
                    client={client}
                    currency={currency}
                    total={total}
                    onError={onError}
                    onSuccess={onSuccessPayment}
                    onCancel={onCancel}
                    style={{
                        layout: 'horizontal',
                        size: 'responsive',
                        shape: 'rect',
                        color: 'blue'
                    }}
                />
            }
        </div>
    )
}

export default PayPal;