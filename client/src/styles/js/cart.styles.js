import styled from 'styled-components';

export const CartContainer = styled.div`
    margin: 6rem auto 6rem auto;
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: row;

    hr {
        width: 80%;
    }

    @media screen and (max-width: 1024px) {
        flex-direction: column;
        margin: 5rem auto 2rem auto;
    }
`;

export const LeftContainer = styled.div`
    flex-basis: 50%;
    padding-top: 2rem;

    @media screen and (max-width: 1024px) {
        padding-top: 7rem;
    }
    @media screen and (max-width: 700px) {
        padding-top: 2rem;
    }
`;

export const LockPadContainer = styled.div`
    display: flex;
    width: 35%;
    justify-content: space-between;
    margin-bottom: 1rem;

    p {
        margin: 0;
        font-weight: 700;
        color: gray;
    }

    @media screen and (max-width: 800px) {
        width: 90%;
    }
`;

export const ShippingContainer = styled.div`
    margin: 2rem 0;
`;

export const ShippingAddress = styled.div`
    display: flex;
    flex-direction: column;
    font-weight: 600;
    color: gray;
    text-transform: uppercase;

    span {
        word-spacing: 0.2rem;
        letter-spacing: 0.07rem;
        padding: 1px 0;
    }
`;

export const ShippingMethod = styled.div`
    margin: 2rem 0;

    label {
        font-weight: 700 !important
    }
`;

export const FormBox = styled.div`
    margin: 1.5rem 0;

    div:nth-child(1){
        margin: 0 !important
    }
`;

export const ShippingDetail = styled.div`
    display: flex;
    justify-content: space-between;
    padding-left: 2rem;
    width: 90%;

    span:nth-child(2) {
        font-weight: 700;
    }
`;

export const ShippingPayment = styled.div`
    margin: 2rem 0;

    label {
        font-weight: 700 !important
    }
`;

export const PaymentFormBox = styled.div`
    display: flex;
    flex-direction: row;
    width: 80%;
    flex-wrap: wrap;

    @media screen and (max-width: 800px) {
        flex-direction: column;
    }
`;

export const CardIconBox = styled.div`
    margin: 0 0 1em;
    display: flex;
    padding-left: 0.5rem;

    div {
        background-repeat: no-repeat !important;
        background-size: cover !important;
        background-position: center !important;
        height: 1.5rem;
        width: 2rem;
        margin: 0 0.5rem;
    }
`;

export const CardInfoBox = styled.div`
    flex-basis: 100%;
    display: flex;
    flex-direction: column;

    div {
        width: 50%;
        margin: 0.5rem 0;
    }

    @media screen and (max-width: 800px){
        div {
            width: 100%;
        }
    }
`;

export const CardInfoLowerBox = styled.div`
    flex-basis: 100%;
    margin: 1.5em 0;

    @media screen and (max-width: 800px){
        div {
            width: 100%;
        }
    }
`;

export const ReviewOrder = styled.div`
    margin: 2rem 0;
    width: 90%;
`;

export const ReviewDetail = styled.div`
    display: flex;
    flex-direction: column;
    font-weight: 700;

    div {
        display: flex;
        justify-content: space-between;
        margin: 0.85rem 0;

        span:nth-child(1) {
            color: gray;
        }
    }
`;

export const RightContainer = styled.div`
    flex-basis: 50%;
    padding-top: 2rem;
    height: 150vh;

    @media screen and (max-width: 1024px) {
        height: fit-content;
    };

    @media screen and (max-width: 800px) {
        height: 100%;
        padding-top: 0;
    };
`;

export const CartTitle = styled.div`
    width: 90%;
    margin-top: 3rem;
    font-weight: 700;
    color: gray;
    display: flex;
    justify-content: space-between;
`;

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 25%;
    width: 90%;
    overflow: scroll;
    overflow-x: hidden;

    ::-webkit-scrollbar {
        width: 0;  /* Remove scrollbar space */
        background: transparent;  /* Optional: just make scrollbar invisible */
    }

    @media screen and (max-width: 1024px) {
        height: inherit;
    }

    @media screen and (max-width: 700px) {
        height: 50%;
        margin: 0 auto;
    }
`;

export const CardBox = styled.div`
    flex-basis: 50%;
    display: flex;
    width: 100%;
    flex-shrink: 0;

    @media screen and (max-width: 800px) {
        flex-wrap: wrap;
        overflow: scroll;
        overflow-x: hidden;
        flex: 1;

        ::-webkit-scrollbar {
            width: 0;  /* Remove scrollbar space */
            background: transparent;  /* Optional: just make scrollbar invisible */
        }
    }
`;

export const CardImgBox = styled.div`
    flex-basis: 25%;
    margin: 1.5rem 0.05rem;

    div {
        background-repeat: no-repeat !important;
        background-size: contain !important;
        background-position: center !important;
        height: 100%;
        width: 100%;
    }

    @media screen and (max-width: 700px) {
        flex-basis: 100%;
        height: 10rem;
    }
`;

export const CardProdInfo = styled.div`
    margin: 1.5rem 0 0 1.5rem;
    display: flex;
    flex-direction: column;
    height: 100%;
    flex-basis: 60%;

    @media screen and (max-width: 700px) {
        flex-basis: 100%;
        height: 40%;
    }
`;

export const ProdTitle = styled.div`
    font-weight: 700;
`;

export const ItemID = styled.div`
    color: gray;
    font-size: 0.85rem;
    font-weight: 700;
`;

export const SizeQty = styled.div`
    margin: 0.5rem 0;
    font-weight: 700;
    p {
        margin: 0;
        color: gray;
        font-size: 0.85rem;
    }
    span {
        font-size: 1rem;
        color: black;
    }
`;

export const Price = styled.div`
    font-weight: 700;
    font-size: 1.25rem;
    color: #00FF7F;
`;

export const IconsBox = styled.div`
    margin: 2rem 0 1.5rem 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between; 
    flex-basis: 10%;

    @media screen and (max-width: 700px) {
        flex-direction: row-reverse;
        flex-basis: 100%;
    }
`;

export const QtyIcons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const CartSummary = styled.div`
    margin: 1.5rem 0;
    display: flex;
    flex-direction: column;
    width: 90%;

    @media screen and (max-width: 800px){
        margin: 1.5rem auto;
    }
`;

export const SummaryBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    div {
        display: flex;
        justify-content: space-between;
        margin: 0.5rem 0;
        font-weight: 700;
        font-size: 1.25rem;

        span:nth-child(1) {
            color: #708090;
            font-size: 1rem
        }
    }
`;

export const Total = styled.div`
    span {
        font-size: 1.7rem;
        color: #007FFF;
    }
`;

export const OrderButton = styled.div`
    margin-top: 1.25rem;
    width: 60%;
    align-self: center;
`;

export const MessageNotify = styled.div`
    width: 80%;
    text-align: center;
    margin: 0 auto;
    font-weight: 100;
    font-size: 0.95rem;
    color: gray;
`;

export const PaypalInfo = styled.div`
    margin: 2rem auto;
    width: 80%;
    height: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: #00c3ff;
    color: #fff;
    font-weight: 700;
    padding: 2rem;
    border-radius: 6px;
    font-size: 0.875rem;

    @media screen and (max-width: 800px) {
        height: 9rem;
        width: 100%;
        padding: 0;
    }
`;

export const PaypalLine = styled.div`
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 800px) {
        flex-direction: column;
        align-items: center;
    }
`;