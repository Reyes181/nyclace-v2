import styled from 'styled-components';

export const VerifiedContainer = styled.div`
    height: 100vh;
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 1024px) {
        height: 80vh;
    }
`;

export const DescriptionBox = styled.div`
    width: 50%;
    display: flex;
    margin: 1rem auto;
    flex-direction: column;
    align-items: center;
    text-align: center;

    div {
        font-size: 3.5rem;
        font-weight: 700;
        padding: 1rem 0;
        margin-bottom: 1rem;
        font-family: 'Share', cursive;
    }

    p {
        margin: 2rem 0;
        font-size: 1.5rem;
    }

    @media screen and (max-width: 1024px){
        width: 100%;

        div {
            font-size: 1.5rem;
            margin-bottom: 0.5rem;
        }

        p {
            font-size: 0.9rem;
            margin: 1rem 0;
        }
    }
`;