import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { selectCurrentUser, selectMessage, selectIsLoading } from '../actions/user.selectors';
import {sendVerificationStart} from '../actions/userActions';
import { Button, Header, Modal, Icon } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import Spinner from '../hoc/spinner';

const AddCartModal = ({handleClose, errorType, open, message, loading, currentUser, sendVerificationStart}) => {

    useEffect(() => {
        if(message !== null){
            handleClose(false)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[message])

    return (
        <Modal
            basic
            onClose={() => handleClose(false)}
            size='small'
            open={open}
        >
            {!loading ?
                <>
                <Header icon>
                    <Icon name='ban'/>
                    Unable to add to cart
                </Header>
                <Modal.Content>
                    {
                        errorType === 'auth' ?
                        <p>Sorry, you need to register or sign in to add a product to the cart.</p>
                        :
                        <p>Sorry, you need to verify your account first in order to add a product to the cart.</p>
                    }
                </Modal.Content>

                <Modal.Actions>
                    {
                        errorType === 'auth' ?
                        <Link to='/account/register'>
                            <Button basic color='green' inverted>
                                Go to register
                            </Button>
                        </Link>
                        :
                        <Button
                            onClick={() => sendVerificationStart(currentUser.email)}
                            basic
                            color='green'
                            inverted
                        >
                            Send email verifation 
                        </Button>
                    }

                </Modal.Actions>
                </>
                :
                <Spinner/>
            }
            

        </Modal>
    )
};

const mapStateToProps = createStructuredSelector({
    message: selectMessage,
    loading: selectIsLoading,
    currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
    sendVerificationStart: (data) => dispatch(sendVerificationStart(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddCartModal);