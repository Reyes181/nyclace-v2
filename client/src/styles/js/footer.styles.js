import styled from 'styled-components';

export const FooterContainer = styled.footer`
    display: grid;
    place-items: center;
`;

export const FooterTop = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    background: #f2f2f2;
    height: 15rem;

    @media screen and (max-width: 800px) {
        flex-direction: column;
        height: 20rem;
    }
`;

export const FooterTopRight = styled.div`
    flex-basis: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 50%;
    align-self: center;
`;

export const FooterTopRightText = styled.div`
    width: 60%;
    text-align: center;
    margin-bottom: 1rem;
`;

export const FooterTopRightButton = styled.button`
    width: 70%;
    background: #0c0c0c;
    color: #fff;
    cursor: pointer;
    border: none;
    letter-spacing: 0.09rem;
    font-size: 0.65rem;
    font-weight: 700;
    padding: 12px;
`;

export const FooterTopLeft = styled.div`
    flex-basis: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-right: solid 1px dimgray;;
    height: 50%;
    align-self: center;

    @media screen and (max-width: 800px) {
        border-right: none;
        margin-bottom: 1rem;
    }
`;

export const FooterTopLeftText = styled.div`
    width: 50%;
    text-align: center;
    margin-bottom: 1rem;
`;

export const FooterTopLeftInput = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;

    input, button {
        padding: 10px
    }

    input {
        flex-basis: 50%;
    }

    button {
        background: #0c0c0c;
        color: #fff;
        cursor: pointer;
        border: none;
        letter-spacing: 0.09rem;
        font-size: 0.65rem;
        font-weight: 700;
    }
`

export const FooterBottom = styled.div`
    background: #3c3d43;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #dadada;
    height: 22rem;
    padding: 1rem 0;

    @media screen and (max-width: 800px) {
        height: auto;
    }
`;

export const FooterBottomTop = styled.div`
    display: flex;
    flex: 1;
    width: 60%;

    @media screen and (max-width: 800px) {
        flex-direction: column;
        width: 90%;
    }
`;

export const FooterBottomTopRight = styled.div`
    flex-basis: 50%;
    display: flex;
    flex-direction: column;
    padding: 0.8rem 0 0 0;

    @media screen and (max-width: 800px) {
        padding: 1rem 0;
        align-items: center;
    }
`;

export const FooterBottomApp = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 800px) {
        height: 9rem;
        width: 90%;
    }
`;

export const FooterBottomAppTitle = styled.div`
    letter-spacing: 0.09rem;
    text-transform: uppercase;
    flex: 1;
    font-weight: 700;

    @media screen and (max-width: 800px) {
        text-align: center;
    }
`;

export const FooterBottomApps = styled.div`
    display: flex;
    flex: 3;
`;

export const FooterBottomAppImg = styled.div`
    flex-basis: 60%;
    background-size: contain !important;
    background-repeat: no-repeat !important;
    height: 80%;

    @media screen and (max-width: 800px) {
        height: 100%;
        flex-basis: 100%;
        background-position: center !important;
    }
`;

export const FooterBottomSocial = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 800px) {
        width: 90%;
    }
`;

export const FooterBottomSocialTitle = styled.div`
    letter-spacing: 0.09rem;
    text-transform: uppercase;
    flex: 1;
    font-weight: 700;

    @media screen and (max-width: 800px) {
        text-align: center;
    }
`;

export const FooterBottomSocialIcons = styled.div`
    display: flex;
    width: 50%;
    justify-content: space-between;
    flex: 3;

    @media screen and (max-width: 800px) {
        width: 100%;
        margin: 1rem 0;
    }
`;

export const FooterBottomTopLeft = styled.div`
    flex-basis: 50%;
    display: flex;
    justify-content: space-evenly;

    @media screen and (max-width: 800px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const FooterBottomAbout = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-bottom: 1rem;

    div {
        text-transform: uppercase;
        font-weight: 700;
        cursor: pointer;
    }

    span {
        font-weight: 300;
        cursor: pointer;
    }

    @media screen and (max-width: 800px) {
        width: 100%;
        justify-content: center;
        flex-direction: row;
        flex-wrap: wrap;

        div {
            flex-basis: 100%;
            text-align: center;
        }

        span {
            flex-basis: 50%;
            text-align: center;
            margin: 0.5rem 0;
        }
    }
`;

export const FooterBottomList = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 40%;
    font-weight: 700;
    font-size: 0.9rem;

    @media screen and (max-width: 800px) {
        width: 90%;
        justify-content: center;
        flex-wrap: wrap;

        span {
            flex-basis: 50%;
            text-align: center;
        }
    }
`;