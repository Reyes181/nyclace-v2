import styled from 'styled-components';

export const HomeContainer = styled.div`
    margin-top: 6rem;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 800px) {
        margin-top: 4rem;
    }
`;

export const HomeSliderContainer = styled.div`
    width: 100%;
`

export const HomeSliderImage = styled.div`
    height: 30em;
    background-repeat: no-repeat !important;
    background-size: cover !important;
    background-position: center !important;

    @media screen and (max-width: 1024px) {
        height: 25em;
    }

    @media screen and (max-width: 800px) {
        height: 15em;
    }
`

export const PromoBlockContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 95%;
    margin: 0 auto;

    @media screen and (max-width: 800px) {
        width: 100%;
        flex-direction: column;
    }
`;

export const PromoBlockImg = styled.div`
    flex-basis: 33%;

    div {
        width: 100%;
        height: 30rem;
        background-repeat: no-repeat !important;
        background-position: center !important;
        background-size: 100% !important;
        transition: all .5s;
    }

    div:hover {
        transition: all .5s;
        background-size: 80% !important;
    }

    @media screen and (max-width: 800px) {
        div {
            height: 21rem;
        }
    }
`