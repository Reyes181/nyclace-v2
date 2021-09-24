import React, {useState, useEffect} from 'react';
import {createStructuredSelector} from 'reselect';
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux';
import { selectIsLoading } from '../../actions/user.selectors';
import { update, isFormValid, generateData } from '../../utils/FormActions';
import { changePasswordStart } from '../../actions/userActions';
import { Form, Button} from 'semantic-ui-react';
import {ResetPasswordContainer, ErrorLabel, MiniHeader} from '../../styles/js/auth.styles';
import Spinner from '../../hoc/spinner';

const ResetPassword = ({selectIsLoading, uniqueHash, changePasswordStart, ...props}) => {
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
        oldpassword: {
            value: '',
            validation:{
                required:true,
                password: true
            },
            valid: false,
            validationMessage:'',
            touched: false
        },
        newpassword: {
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

    let hashNum = props.match.params.uniqueRoute;
    let history = useHistory();

    useEffect(() => {
        document.title = 'Password Reset - NYCLace';
        if(hashNum !== uniqueHash){
            history.push("/");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleChange = (e, data) => {
        const newFormdata = update(data, formData, 'register');
        setFormData(newFormdata);
    };

    const submitForm = (e) => {
        e.preventDefault();

        let dataToSubmit = generateData(formData, 'register');
        let formIsValid = isFormValid(formData, 'register');

        if(formIsValid){
            console.log(dataToSubmit)
            changePasswordStart(dataToSubmit);
            
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
    }
    return (
        <ResetPasswordContainer>
            {selectIsLoading ?
                <Spinner/>
                :
                <>
                <h2>
                    Reset Password
                </h2>
                <MiniHeader>
                    Enter the email for the account you want the password to be changed. Along with the old and new password.
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

                    <Form.Field>
                        <Form.Input 
                            placeholder='Old Password'
                            onChange={handleChange}
                            content={'oldpassword'}
                            type='password'
                            focus    
                        />
                        {showError('oldpassword')}
                    </Form.Field>

                    <Form.Field>
                        <Form.Input 
                            placeholder='New Password'
                            onChange={handleChange}
                            content={'newpassword'}
                            type='password'
                            focus
                        />
                        {showError('newpassword')}
                    </Form.Field>

                    <Button 
                        color='red' 
                        disabled={!isFormValid(formData, 'register')} 
                        size='large'
                        onClick={(e)=> {submitForm(e)}}
                    >
                        RESET PASSWORD
                    </Button>
                </Form>
                </>
            }
        </ResetPasswordContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    selectIsLoading: selectIsLoading
});

const mapDispatchToProps = (dispatch) => ({
    changePasswordStart: data => dispatch(changePasswordStart(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);