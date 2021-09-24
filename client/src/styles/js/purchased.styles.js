import styled from 'styled-components';

export const HeaderTitle = styled.div`
    text-align: center;

    @media screen and (max-width: 800px) {
        font-size: 1rem !important;
    }
`;

export const OrderSummary = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 80vh;

    @media screen and (max-width: 800px) {
        flex-direction: column;
        height: 100%;
        overflow: scroll;
        overflow-x: hidden;
        ::-webkit-scrollbar {
            width: 0;  /* Remove scrollbar space */
            background: transparent;  /* Optional: just make scrollbar invisible */
        }
    }
`;

export const LeftSide = styled.div`
    flex-basis: 60%;
    display: flex;
    flex-direction: column;
`;

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 90%;
    overflow: scroll;
    overflow-x: hidden;

    ::-webkit-scrollbar {
        width: 0;  /* Remove scrollbar space */
        background: transparent;  /* Optional: just make scrollbar invisible */
    }

    @media screen and (max-width: 800px) {
        width: 100%;
    }
`;

export const CardBox = styled.div`
    flex-basis: 25%;
    display: flex;
    width: 100%;
    flex-shrink: 0;
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
`;

export const CardProdInfo = styled.div`
    margin: 1.5rem 0 0 1.5rem;
    display: flex;
    flex-direction: column;
    height: 100%;
    flex-basis: 60%;
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

export const RightSide = styled.div`
    flex-basis: 40%;
    display: flex;
    flex-direction: column;
    background-color: #F8F8F8;
    padding: 1rem;
`;

export const PaymentNote = styled.div`
    flex-grow: 4;
`;

export const PaymentInfo = styled.div`
    margin: 0.5rem 0;
    font-size: 1.2rem;
    width: 80%;
    text-transform: capitalize;

    p {
        margin: 0;
        font-size: 0.9rem;
        font-weight: 700;
    }

    p:nth-child(3) {
        display: flex;
        justify-content: space-between;
    }
`;

export const MiniImg = styled.div`
    width: 100%;
    height: 70%;
    background-size: contain !important;
    background-position: center !important;
    background-repeat: no-repeat !important;

    @media screen and(max-width: 800px) {
        display: none;
    }
`;

export const TotalBox = styled.div`
    align-self: flex-start;
    font-size: 2rem;
    font-weight: 700;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    span {
        color: #007FFF;
    }
`;

export const ButtonBox = styled.div`
    width: 60%;
    margin: 0 auto;
`;