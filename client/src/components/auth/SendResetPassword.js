import React, {useState, useEffect} from 'react';
import {createStructuredSelector} from 'reselect';
import { connect } from 'react-redux';
import { selectIsLoading } from '../../actions/user.selectors';
import { sendResetStart } from '../../actions/userActions';
import {ResetPasswordContainer, ErrorLabel, MiniHeader, LoginNavLink} from '../../styles/js/auth.styles';
import { update, isFormValid, generateData } from '../../utils/FormActions';
import { Form, Button} from 'semantic-ui-react';
import Spinner from '../../hoc/spinner';


const SendResetPassword = ({selectIsLoading, sendResetStart}) => {
    useEffect(() => {
        document.title = 'Request Password Change - NYCLace';
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
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
        }
    });

    const handleChange = (e, data) => {
        const newFormdata = update(data, formData, 'register');
        setFormData(newFormdata);
    };

    const submitForm = (e) => {
        e.preventDefault();

        let dataToSubmit = generateData(formData, 'register');
        let formIsValid = isFormValid(formData, 'register');

        if(formIsValid){
            sendResetStart(dataToSubmit);
            console.log(dataToSubmit);
            
        }
    };

    const showError = (inputName) => {
        let errorMessage = <ErrorLabel>
            {
                formData[inputName].validationMessage && !formData[inputName].valid ?
                    formData[inputName].validationMessage
                :null
            }
        </ErrorLabel>
        return errorMessage;
    };

    return (
        <ResetPasswordContainer>
            {selectIsLoading ?
                <Spinner/>
                :
                <>
                <h2>
                    Forgot Your Password?
                </h2>
                <MiniHeader>
                    Please enter your email address below. You will receive a link
                    to reset your password.
                </MiniHeader>
            
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

                    <Button 
                        color='black' 
                        disabled={!isFormValid(formData, 'register')} 
                        size='large'
                        onClick={(e)=> {submitForm(e)}}
                    >
                        SUBMIT
                    </Button>

                    <Form.Field style={{marginTop: '1rem'}}>
                        <LoginNavLink to="/account/register">
                            <span>Return to Login</span>
                        </LoginNavLink>
                    </Form.Field> 
                </Form>
                </>
            }

        </ResetPasswordContainer>
    )
};

const mapStateToProps = createStructuredSelector({
    selectIsLoading: selectIsLoading
});

const mapDispatchToProps = (dispatch) => ({
    sendResetStart: data => dispatch(sendResetStart(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(SendResetPassword);