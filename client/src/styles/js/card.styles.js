import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ProductContainer = styled.div`
    height: 100%;
`;

export const ProductHeader = styled.h3`
    text-align: center;
    width: 100%;
    padding: 2rem 0;
    margin: 0;
    background: #f2f2f2;
    font-weight: 300;
    font-family: Proxima Nova,Helvetica,Arial,sans-serif;
    letter-spacing: 1px;
    color: dimgray;
`;

export const ProductList = styled.div`
    width: 95%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    @media screen and (max-width: 700px) {
        width: 100%;
        height: 100%;
    }
`;

export const LoadingSpinner = styled.div`
    display: grid;
    place-items: center;
    height: 20rem;
    width: 100%;

    svg {
        -webkit-animation:spin 4s linear infinite;
        -moz-animation:spin 4s linear infinite;
        animation:spin 4s linear infinite;
    }

    @-moz-keyframes spin { 100% { -moz-transform: rotate(360deg); } }
    @-webkit-keyframes spin { 100% { -webkit-transform: rotate(360deg); } }
    @keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }
`;

export const ProductCardContainer = styled(Link)`
    flex-basis: 30%;
    display: flex;
    flex-direction: column;
    height: 30rem;
    align-items: center;
    text-decoration: inherit;
    color: inherit;

    @media screen and (max-width: 800px) {
        flex-basis: 100%
    }
`;

export const ProductImg = styled.div`
    background-size: contain !important;
    background-position: center !important;
    background-repeat: no-repeat !important;
    width: 100%;
    flex: 2;
`;

export const ProductDesc = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    width: 100%;
    justify-content: space-evenly;
    font-family: Proxima Nova,Helvetica,Arial,sans-serif;
    letter-spacing: .035em;
    padding-left: 2.1rem;
    justify-content: flex-start;

    span {
        margin: 0.28rem 0;
    }

    span:nth-child(2) {
        font-size: 0.85rem;
        font-weight: 700;
    }

    @media screen and (max-width: 800px) {
        padding-left: 0;
    }
`;

export const ProductPrice = styled.span`
    width: 60%;
    text-align: center;
    background: #f2f2f2;
    color: #0c0c0c;
`;