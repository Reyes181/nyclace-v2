import React, {Component} from 'react';
import { connect } from 'react-redux';
import { auth } from '../actions/userActions';
import { useHistory } from "react-router-dom";
import { SpinnerOverlay, SpinnerContainer } from '../styles/js/spinner.styles';

export default function(ComposedClass,reload,adminRoute = null){
    class AuthCheck extends Component {
        _isMounted = false;

        state = {
            loading: true
        }
        
        componentDidMount(){
            this._isMounted = true;

            this.props.dispatch(auth()).then(response => {
                if(this._isMounted){
                    let user = this.props.user.userData;
                
                    if(!user.isAuth){
                        if(reload){
                            this.props.history.push('/account/register');
                        }
                    }else{
                        if(adminRoute && !user.isAdmin){
                            this.props.history.push('/account/dashboard');
                        }else{
                            if(reload === false){
                                this.props.history.push('/account/dashboard');
                            }
                        }
                        
                    }
                    
                    this.setState({loading:false});
                }
                
            });
        }

        componentWillUnmount(){
            this._isMounted = false;
        }
        
        render() {
            if(this.state.loading){
                return (
                    <SpinnerOverlay>
                        <SpinnerContainer/>
                    </SpinnerOverlay>    
                );
            }
            return (
                <ComposedClass {...this.props} user={this.props.user}/>    
            );
        }
    }
    
    function mapStateToProps(state){
        return {
            user: state.users
        };
    }

    
    return connect(mapStateToProps)(AuthCheck)
}