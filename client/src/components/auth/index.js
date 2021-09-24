import React, {useState} from 'react';
import styled from 'styled-components';
import {AuthContainer} from '../../styles/js/auth.styles';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const SwitchForm = styled.div`
        width: 80%;
        margin: 1.5rem 0;
        cursor: pointer;

        &:hover {
            font-weight: 700;
        }

        @media screen and (max-width: 1024px) {
            margin: ${props => props.displayedForm ? '1.5rem 0' : '1.5rem auto'};
            width: ${props => props.displayedForm && '100%'};
        }
    `;

const AuthPage = () => {
    const [displayedForm, setDisplayedForm] = useState(false);

    
    return (
        <AuthContainer>
            {
                !displayedForm ?
                    <RegisterForm/>
                :
                    <LoginForm/>

            }
                

                <SwitchForm onClick={() => {setDisplayedForm(!displayedForm)}} displayedForm={displayedForm}>
                    { !displayedForm ? 
                        <>Already registered? Log in.</>
                        :
                        <>New to the site? Register account.</>
                    }
                </SwitchForm>
            
        </AuthContainer>
    )
}

export default AuthPage;