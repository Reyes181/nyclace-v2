import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";
import { verifiedEmailStart } from '../../actions/userActions';
import {createStructuredSelector} from 'reselect';
import { selectIsLoading, selectUserVerified, selectMessage } from '../../actions/user.selectors';
import Spinner from '../../hoc/spinner';
import {RiMailCheckFill} from 'react-icons/ri';
import { Button } from 'semantic-ui-react';
import { VerifiedContainer, DescriptionBox } from '../../styles/js/verified.styles';

const VerifiedSuccess = ({verifiedEmailStart, userVerified, isLoading, message, ...props}) => {
    let history = useHistory();

    useEffect(() => {
        verifiedEmailStart(props.match.params.id);
        document.title = 'Verified - NYCLace';
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if(userVerified === false){
            history.push("/", {verified: message})
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[userVerified])

    const goToDashboard = () => {
        history.push("/account/dashboard")
    }

    return (
        <div>
            {!isLoading && userVerified === true ?
                <VerifiedContainer>
                    <RiMailCheckFill
                        size={'9.5rem'}
                        color={"#007FFF"}
                    />
                    <DescriptionBox>
                        <div>Account is now verified!</div>
                        <p>
                            Thank you for verifying your email address to your NYC Lace account.
                            Click the button below to sign in or to the dashboard.
                        </p>
                        <Button
                            onClick={goToDashboard} 
                            color='blue'
                        >
                            SIGN IN
                        </Button>
                    </DescriptionBox>
                </VerifiedContainer>
                :
                <Spinner/>
            }
        </div>
    )
};

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsLoading,
    userVerified: selectUserVerified,
    message: selectMessage
});

const mapDispatchToProps = (dispatch) => ({
    verifiedEmailStart: userId => dispatch(verifiedEmailStart(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(VerifiedSuccess);