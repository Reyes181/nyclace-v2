import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AuthContainer = styled.div`
    height: 100vh;
    display: grid;
    place-content: center;
    margin-top: 8rem;
    overflow: hidden;

    @media screen and (max-width: 1024px) {
        height: 80vh;
    }

    @media screen and (max-width: 800px) {
        height: fit-content;
    }
`; 

export const RegisterContainer = styled.div`
    width: 40vw;
    max-width: 600px;
    margin: 0 auto;
    height: auto;
    overflow-y: auto;
    overflow-x:hidden;

    h2 {
        width: 50%;
        margin-bottom: 2rem;
    }

    span {
        font-size: 0.75rem;
        font-weight: 700;
    }

    @media screen and (max-width: 1024px) {
        width: 80%;

        h2 {
            width: 100%;
        }
    }

    ::-webkit-scrollbar {
        width: 0;  /* Remove scrollbar space */
        background: transparent;  /* Optional: just make scrollbar invisible */
    }
`;

export const LoginContainer = styled.div`
    width: 25vw;
    max-width: 400px;
    margin: 0 auto;
    height: 450px;

    h2 {
        width: 100%;
        margin-bottom: 2rem;
    }

    span {
        font-size: 0.95rem;
        font-weight: 700;
        cursor: pointer;

        &:hover {
            color: #545c5c;
        }
    }

    @media screen and (max-width: 1024px) {
        width: 100%;
        height: auto;
    }
`;

export const ErrorLabel = styled.div`
    color: #F44336;
    font-weight: 600;
    font-size: 0.9rem;
    margin: 0 0 0 5px;
`;

export const ResetPasswordContainer = styled.div`
    height: 90vh;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    width: 30%;
    flex-direction: column;
    padding-bottom: 3.5rem;

    @media screen and (max-width: 1024px) {
        height: 80vh;
        width: 50%;
    }

    @media screen and (max-width: 700px) {
        height: 80vh;
        margin: 9rem auto 0 auto;
        width: 80%;
    }
`; 

export const MiniHeader = styled.div`
    margin: 1rem 0 2rem 0;
    font-weight: 400;
    font-size: 1.2rem;
`;

export const LoginNavLink = styled(Link)`
    margin-top: 2rem;
    text-decoration: inherit;
    color: inherit;
    font-size: 0.875rem;
    font-weight: 600;
`;