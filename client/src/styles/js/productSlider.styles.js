import styled from 'styled-components';

export const PrevArrows = styled.div`
    display: block;
    width: 28px;
    height: 28px;
    border-radius: 3px;
    background: #dddddd;
    color: #fff;
    text-align: center;
    line-height: 30px;
    border: none;
    font-size: 0px;
    position: absolute;
    top: 50%;
    margin-top: -80px;
    left: -40px;
    transition: .4s;
    opacity: 0;
    visibility: hidden;

    &::after {
        content: "<";
        font-family: 'BrandonBold';
        font-size: 10px;
    }

    &:hover {
        background: #333333;
        transition: .4s;
        cursor: pointer;
    }
`;

export const NextArrows = styled.div`
    display: block;
    width: 28px;
    height: 28px;
    border-radius: 3px;
    background: #dddddd;
    color: #fff;
    text-align: center;
    line-height: 30px;
    border: none;
    font-size: 0px;
    position: absolute;
    top: 50%;
    margin-top: -80px;
    right: -40px;
    transition: .4s;
    opacity: 0;
    visibility: hidden;

    &::after {
        content: ">";
        font-family: 'BrandonBold';
        font-size: 10px;
    }

    &:hover {
        background: #333333;
        transition: .4s;
        cursor: pointer;
    }
`;

export const ProductSliderContainer = styled.div`
    
    
    a {
        text-decoration: none;
        color: inherit;
    }

    &:hover ${PrevArrows} {
        left: -0px;
        opacity: 1;
        visibility: visible;
        z-index: 99;
    }

    &:hover ${NextArrows} {
        right: -0px;
        opacity: 1;
        visibility: visible;
        z-index: 99;
    }

    @media screen and (max-width: 800px) {
        ${PrevArrows} {
            left: -0px;
            opacity: 1;
            visibility: visible;
            z-index: 99;
        }

        ${NextArrows} {
            right: -0px;
            opacity: 1;
            visibility: visible;
            z-index: 99;
        }
    }
`;

export const SliderHeader = styled.div`
    text-align: center;
    padding: 10px 0;
    font-size: 1.8rem;
    font-weight: 700;
    box-shadow: inset 0em -1em 0.4em -0.9em rgba(0, 0, 0, 0.19);
    width: 30%;
    margin: 0 auto;

    @media screen and (max-width: 1024px) {
        width: 100%;
        box-shadow: inset 0em -1em 0.4em -1em rgba(0, 0, 0, 0.19);
    }
`;