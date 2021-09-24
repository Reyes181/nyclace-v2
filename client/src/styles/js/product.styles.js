import styled from 'styled-components';

export const ProductContainer = styled.div`
    background: #f8f8f8;
    display: flex;
    flex-direction: column;
    margin-top: 6rem;
    
    overflow-y: scroll;
`;

export const ProductDetails = styled.div`
    flex: 1;
    display: flex;
    width: 90%;
    margin: 1rem auto 0 auto;

    @media screen and (max-width: 1024px) {
        margin: 0.5rem 0 0 0;
        width: 100%;
        flex-direction: column;
    }
`;

export const ProductSlide = styled.div`
    flex-basis: 70%;
    height: 70%;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 1024px) {
        display: none
    }
`

export const ProductSpecs = styled.div`
    flex-basis: 30%;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 1024px) {
        padding: 1.1rem;
        width: 60%;
        margin: 0 auto;
    }
    @media screen and (max-width: 800px) {
        padding: 0;
        width: 80%;
    }
`;

export const ProductBorder = styled.span`
    height: 1px;
    background: #dadada;
    margin: 2rem auto;
    width: 90%;
`;

export const ProductTitles = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: calc(20px - .25em);

    div {
        font-size: 1.25em;
        font-weight: 400;
        letter-spacing: .02em;
        line-height: 1.3;
        margin-bottom: 0.15em;
    }

    span {
        font-size: 1.25em;
        font-weight: 400;
        letter-spacing: .02em;
        line-height: 1.3;
        color: #656565;
    }
`;

export const ProductSelect = styled.select`
    border: none;
    padding: 15px;
    overflow: hidden;
    height: auto;
    max-height: 200px;
    transition: max-height .22s cubic-bezier(.215,.61,.355,1);
    overflow-y: scroll;
    font-size: 0.85rem;
    color: #3c3d43

    option {
        display: block;
        height: 40px;
        margin: 0;
        width: 100%;
        font-size: 1em;
    }
`;

export const ProductButton = styled.button`
    margin: 0.7rem 0;
    border: none;
    padding: 18px;
    text-transform: uppercase;
    background: #6c7474;
    color: #fff;
    font-weight: 700;
    font-size: 0.9rem;
    cursor: pointer;

    &:hover {
        background: #545c5c
    }
`;

export const ProductDetail = styled.div`
    display: flex;
    flex-direction: column;

    h3 {
        font-size: 1.25em;
        font-weight: 400;
        letter-spacing: .02em;
        line-height: 1.3;
        color: #656565;
    }
`;

export const ProductDesc = styled.div`
    color: #656565;
    font-size: .875em;
    letter-spacing: 0.025rem;
`;

export const ProductDetailList = styled.div`
    display: flex;
    flex-direction: column;
    color: #656565;
    font-size: .875em;
    margin: 1rem 0;

    div {
        display: flex;
        margin: 0.5rem 0;

        p {
            margin: 0;
            flex-basis: 50%;
        }

        &:nth-chld(1) {
            flex-basis: 40%
        }

        &:nth-chld(2) {
            flex-basis: 60%
        }
    }
`;

export const ProductSliderImage = styled.div`
    flex: 1;
    display: grid;
    place-items: center;
    img {
        height: fit-content
    }
`;

export const ProductReturn = styled.div`
    display: flex;
    flex-direction: column;

    div {
        display: flex;
        flex-direction: column;

        h3 {
            font-size: 1.25em;
            font-weight: 400;
            letter-spacing: .02em;
            line-height: 1.3;
            color: #656565;
        }

        p {
            color: #656565;
            font-size: .875em;
            margin: 0.85rem 0;
        }
    }
`;

export const MiniSlider = styled.div`
    flex-basis: 70%;
    height: auto;
    width: 50%;
    display: none;
    cursor: pointer;

    @media screen and (max-width: 1024px) {
        width: 80%;
        margin: 2rem auto 0 auto;
        display: block;
    }
    @media screen and (max-width: 800px) {
        margin: 0;
        width: 100%;
    }
`;

export const ItemAddedToCart = styled.div`
    display: flex;
    justify-content: space-around;

    div:nth-child(1) {
        flex-basis: 25%
    }

    p {
        font-size: 1.25rem;
        font-weight: 700;
    }
    
`;
