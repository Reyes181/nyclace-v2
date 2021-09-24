import React, {useState} from 'react';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { selectCurrentUser, selectIsLoading } from '../../actions/user.selectors';
import { editUserStart } from '../../actions/userActions';
import {Button, Form, Input, Select, Dimmer, Loader, Image, Segment} from 'semantic-ui-react'
import { update, isFormValid, generateData } from '../../utils/FormActions';
import {ErrorLabel} from '../../styles/js/auth.styles';
import stateOptions from '../auth/stateOptions';
import AccountPromo from '../../assets/img/account_promo.jpg';
import {ProfileContainer, MiniPromoBox} from '../../styles/js/userdashboard.styles';

const Profile = (props) => {
    const {currentUser, editUserStart, isLoading} = props;
    const [formData, setFormData] = useState({
        email: {
            value: currentUser.email,
            validation:{
                required:true,
                email:true
            },
            valid: true,
            validationMessage:'',
            touched: false
        },
        name: {
            value: currentUser.name,
            validation:{
                required:true
            },
            valid: true,
            validationMessage:'',
            touched: false
        },
        lastname: {
            value: currentUser.lastname,
            validation:{
                required:true
            },
            valid: true,
            validationMessage:'',
            touched: false
        },
        phone: {
            value: currentUser.phone,
            validation:{
                required:true,
                phone: true
            },
            valid: true,
            validationMessage:'',
            touched: false
        },
        street: {
            value: currentUser.street,
            validation:{
                required:true
            },
            valid: true,
            validationMessage:'',
            touched: false
        },
        city: {
            value: currentUser.city,
            validation:{
                required:true
            },
            valid: true,
            validationMessage:'',
            touched: false
        },
        state: {
            value: currentUser.state,
            validation:{
                required:true
            },
            valid: true,
            validationMessage:'',
            touched: false
        },
        zipcode: {
            value: currentUser.zipcode,
            validation:{
                required:true,
                zipcode: true
            },
            valid: true,
            validationMessage:'',
            touched: false
        }
    });

    const handleChange = (e, data) => {
        const newFormdata = update(data, formData, 'updateInfo');
        setFormData(newFormdata);
    };

    const submitForm = (e) => {
        e.preventDefault();

        let dataToSubmit = generateData(formData, 'updateInfo');
        let formIsValid = isFormValid(formData, 'updateInfo');

        if(formIsValid){
            editUserStart(dataToSubmit);
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
        <ProfileContainer>
            {isLoading === false ?
                <Form>
                    <Form.Group widths='equal'>
                            <Form.Field
                                control={Input}
                                label='First Name'
                                defaultValue={currentUser.name}
                                onChange={handleChange}
                                content={'name'}
                                focus
                            />
                            <Form.Field
                                control={Input}
                                label='Last Name'
                                defaultValue={currentUser.lastname}
                                onChange={handleChange}
                                content={'lastname'}
                                focus
                            />
                    </Form.Group>
                    {showError('name')}
                    {showError('lastname')}
                    <Form.Group widths='equal'>
                            <Form.Field
                                control={Input}
                                label='Email'
                                defaultValue={currentUser.email}
                                onChange={handleChange}
                                content={'email'}
                                focus
                            />
                            <Form.Field
                                control={Input}
                                label='Phone'
                                defaultValue={currentUser.phone}
                                onChange={handleChange}
                                content={'phone'}
                                focus
                            />
                    </Form.Group>
                    {showError('email')}
                    {showError('phone')}
                    <div>Address</div>
                    <Form.Group widths='equal'>
                            <Form.Field
                                control={Input}
                                label='Street'
                                defaultValue={currentUser.street}
                                onChange={handleChange}
                                content={'street'}
                                focus
                            />
                            <Form.Field
                                control={Input}
                                label='City'
                                defaultValue={currentUser.city}
                                onChange={handleChange}
                                content={'city'}
                                focus
                            />
                    </Form.Group>
                    {showError('street')}
                    {showError('city')}
                    <Form.Group widths='equal'>
                            <Form.Field
                                control={Select}
                                label='State'
                                options={stateOptions}
                                defaultValue={currentUser.state}
                                onChange={handleChange}
                                content={'state'}
                                focus={formData ? 'true': 'false'}
                            />
                            <Form.Field
                                control={Input}
                                label='Zipcode'
                                defaultValue={currentUser.zipcode}
                                onChange={handleChange}
                                content={'zipcode'}
                                focus
                            />
                    </Form.Group>
                    {showError('state')}
                    {showError('zipcode')}
                    <Button color='red' onClick={submitForm}>Submit Edit</Button>
                </Form>
            :
                <Segment style={{height: '50%'}}>
                    <Dimmer active inverted>
                    <Loader>Loading</Loader>
                    </Dimmer>
            
                    <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
                </Segment>
            }
           <MiniPromoBox>
               <div style={{background: `url(${AccountPromo})`}}/>
           </MiniPromoBox>
        </ProfileContainer>
    )
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    isLoading: selectIsLoading
});

const mapDispatchToProps = (dispatch) => ({
    editUserStart: (data) => dispatch(editUserStart(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);