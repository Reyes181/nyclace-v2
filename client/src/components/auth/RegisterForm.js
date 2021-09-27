import React, {useState, useEffect} from 'react';
import { connect, useDispatch } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { Form, Button, Checkbox, Message, Divider, Grid, Segment } from 'semantic-ui-react';
import { update, isFormValid, generateData } from '../../utils/FormActions';
import { signUpStart, clearMessage } from '../../actions/userActions';
import { useHistory } from "react-router-dom";
import { selectIsLoading, selectCurrentUser, selectSignInError, selectError } from '../../actions/user.selectors';
import {RegisterContainer, ErrorLabel} from '../../styles/js/auth.styles';
import stateOptions from './stateOptions';

const RegisterForm = (props) => {
    const [checked, setChecked] = useState(true);
    const [formErr, setFormErr] = useState(false);
    const [signUpErrorMessage, setSignUpErrorMessage] = useState('');
    const [formData, setFormData] = useState({
        name: {
            value: '',
            validation:{
                required:true
            },
            valid: false,
            validationMessage:'',
            touched: false
        },
        lastname: {
            value: '',
            validation:{
                required:true
            },
            valid: false,
            validationMessage:'',
            touched: false
        },
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
        },
        confirmpassword: {
            value: '',
            validation:{
                required:true,
                confirm: 'password'
            },
            valid: false,
            validationMessage:'',
            touched: false
        },
        street: {
            value: '',
            validation:{
                required:true
            },
            valid: false,
            validationMessage:'',
            touched: false
        },
        city: {
            value: '',
            validation:{
                required:true
            },
            valid: false,
            validationMessage:'',
            touched: false
        },
        state: {
            value: '',
            validation:{
                required:true
            },
            valid: false,
            validationMessage:'',
            touched: false
        },
        zipcode: {
            value: '',
            validation:{
                required:true,
                zipcode: true
            },
            valid: false,
            validationMessage:'',
            touched: false
        },
        phone: {
            value: '',
            validation:{
                required:true,
                phone: true
            },
            valid: false,
            validationMessage:'',
            touched: false
        },
    });

    let history = useHistory();
    const dispatch = useDispatch();
    let currentUser = props.currentUser;
    let signUpError = props.signUpError;
    let selectError = props.selectError;

    useEffect(() => {
        document.title = 'Register - NYCLace';
        if(currentUser.isAuth){
            history.push('/account/dashboard');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentUser.isAuth])

    useEffect(() => {
        if(selectError !== null){
            setSignUpErrorMessage(selectError);
            const timeout = setTimeout(() => {
                dispatch(clearMessage());
            }, 10000);
            return () => clearTimeout(timeout);
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }, [selectError, dispatch])

    const handleChange = (e, data) => {
        const newFormdata = update(data, formData, 'register');
        setFormData(newFormdata);
    };

    const submitForm = (e) => {
        e.preventDefault();

        let dataToSubmit = generateData(formData, 'register');
        let formIsValid = isFormValid(formData, 'register');

        if(formIsValid){
            props.signUpStart(dataToSubmit);
        } else {
            setFormErr(true);
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
    
        <RegisterContainer>
            <h2>
                Looks like you're new here.
                We need some info.
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
            

            <Form error={formErr}>
                <Segment>
                    <Grid columns={2} relaxed='very' stackable>
                        <Grid.Column>
                            <Form.Field>
                                <Form.Input 
                                    placeholder='First Name'
                                    onChange={handleChange}
                                    content={'name'}
                                    focus
                                />
                                {showError('name')}
                            </Form.Field>

                            <Form.Field>
                                <Form.Input 
                                    placeholder='Last Name'
                                    onChange={handleChange}
                                    content={'lastname'}
                                    focus
                                />
                                {showError('lastname')}
                            </Form.Field>

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
                                <Form.Input 
                                    placeholder='Confirm Password'
                                    onChange={handleChange}
                                    content={'confirmpassword'}
                                    type='password'
                                    focus
                                />
                                {showError('confirmpassword')}
                            </Form.Field>
                        </Grid.Column>

                        <Grid.Column>
                            <Form.Field>
                                <Form.Input 
                                    placeholder='Street Address'
                                    onChange={handleChange}
                                    content={'street'}
                                    focus
                                />
                                {showError('street')}
                            </Form.Field>
                            <Form.Field>
                                <Form.Input 
                                    placeholder='City'
                                    onChange={handleChange}
                                    content={'city'}
                                    focus
                                />
                                {showError('city')}
                            </Form.Field>
                            <Form.Field>
                                <Form.Select 
                                    placeholder='State'
                                    onChange={handleChange}
                                    content={'state'}
                                    options={stateOptions}
                                    fluid
                                    focus={formData ? 'true': 'false'}
                                />
                                {showError('state')}
                            </Form.Field>
                            <Form.Field>
                                <Form.Input 
                                    placeholder='Zip'
                                    onChange={handleChange}
                                    content={'zipcode'}
                                    minLength='5'
                                    maxLength='5'
                                    focus
                                />
                                {showError('zipcode')}
                            </Form.Field>
                            <Form.Field>
                                <Form.Input 
                                    placeholder='Phone'
                                    onChange={handleChange}
                                    content={'phone'}
                                    focus
                                    maxLength='10'
                                    minLength='10'
                                />
                                {showError('phone')}
                            </Form.Field>
                        </Grid.Column>
                    </Grid>
                    
                    <Divider hidden vertical>{'&'}</Divider>
                    
                </Segment>
                
                {isFormValid(formData, 'register') ? 
                    <Form.Field>
                        <Checkbox onChange={() => {setChecked(!checked)}}
                        label={{ children: 'I agree to the Terms and Conditions' }}
                        />
                        
                    </Form.Field>
                    :
                    null
                }
                

                <Form.Field>
                    <span>By clicking "Register", you agree to our Terms and Conditions and Privacy Policy.</span>
                </Form.Field>    

                <Button 
                    color='teal' 
                    disabled={checked} 
                    size='huge'
                    onClick={(e)=> {submitForm(e)}}
                >
                    REGISTER
                </Button>

                <Message
                    error
                    header='Action Forbidden '
                    content={signUpError}
                />
            </Form>

        </RegisterContainer>
                
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    isLoading: selectIsLoading,
    signUpError: selectSignInError,
    selectError: selectError
});

const mapDispatchToProps = (dispatch) => ({
    signUpStart: userCredential => dispatch(signUpStart(userCredential))
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);