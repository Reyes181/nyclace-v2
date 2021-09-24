import React, {useState, useEffect} from 'react';
import { Form, Button, Message} from 'semantic-ui-react';
import {createStructuredSelector} from 'reselect';
import { connect } from 'react-redux';
import { update, isFormValid, generateData } from '../../utils/FormActions';
import { emailSignInStart } from '../../actions/userActions';
import { useHistory } from "react-router-dom";
import { selectIsAuth, selectError } from '../../actions/user.selectors';
import {LoginContainer, ErrorLabel, LoginNavLink} from '../../styles/js/auth.styles';

const LoginForm = (props) => {
    const [signUpErrorMessage, setSignUpErrorMessage] = useState('');
    const [formData, setFormData] = useState({
        email: {
            value: '',
            validation:{
                required:true,
                email:true
            },
            valid: false,
            validationMessage:'',
            touched: false
        }, 
        password: {
            value: '',
            validation:{
                required:true,
                password: true
            },
            valid: false,
            validationMessage:'',
            touched: false
        }
    });

    const {loginSuccess} = props;
    const {selectError} = props;

    useEffect(() => {
        if(selectError !== null){
            setSignUpErrorMessage(selectError)
        }
    }, [selectError])

    useEffect(() => {
        if(loginSuccess) {
            history.push('/');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[loginSuccess])

    let history = useHistory();

    const handleChange = (e, data) => {
        const newFormdata = update(data, formData, 'register');
        setFormData(newFormdata);
    };

    const submitForm = (e) => {
        e.preventDefault();

        let dataToSubmit = generateData(formData, 'register');
        let formIsValid = isFormValid(formData, 'register');

        if(formIsValid){
            props.emailSignInStart(dataToSubmit);
            
        }
    }

    const showError = (inputName) => {
        let errorMessage = <ErrorLabel>
            {
                formData[inputName].validationMessage && !formData[inputName].valid ?
                    formData[inputName].validationMessage
                :null
            }
        </ErrorLabel>
        return errorMessage;
    }
    
    return (
        
        <LoginContainer>
            <h2>
                Welcome to NYCLace
            </h2>

            {
                selectError !== null ?
                <Message negative>
                    <Message.Header>Authication failed.</Message.Header>
                    <p>{signUpErrorMessage}</p>
                </Message>
                :
                null
            }

            <Form>
                <Form.Field>
                    <Form.Input
                        placeholder='Email Address'
                        onChange={handleChange}
                        content={'email'}
                        focus
                    />
                    {showError('email')}
                </Form.Field>

                <Form.Field>
                    <Form.Input 
                        placeholder='Password'
                        onChange={handleChange}
                        content={'password'}
                        type='password'
                        focus    
                    />
                    {showError('password')}
                </Form.Field>

                <Form.Field>
                    <LoginNavLink to="/account/request_password_reset">
                        <span>Forgot Password?</span>
                    </LoginNavLink>
                </Form.Field>    

                <Button 
                    color='teal' 
                    disabled={!isFormValid(formData, 'register')} 
                    size='large'
                    onClick={(e)=> {submitForm(e)}}
                >
                    LOGIN
                </Button>
            </Form>

        </LoginContainer>
                
    )
}

const mapStateToProps = createStructuredSelector({
    loginSuccess: selectIsAuth,
    selectError: selectError
});

const mapDispatchToProps = (dispatch) => ({
    emailSignInStart: dataToSubmit => dispatch(emailSignInStart(dataToSubmit))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);