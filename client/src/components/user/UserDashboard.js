import React, {useState, useEffect} from 'react';
import {DashboardContainer, TopHeader, MainLevel, LeftContainer, RightContainer, BoxTitle, OrderContainer,
    OrderHistory, UserInfo, UserBox, BottomLogo, Info, MainInfo, AddressInfo, InfoHeader, SignOutButton, PurchaseEmpty
} from '../../styles/js/userdashboard.styles';
import { Button, Tab, Dimmer, Loader, Image, Segment, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { logoutStart } from '../../actions/userActions';
import {createStructuredSelector} from 'reselect';
import { selectCurrentUser, selectIsLoading } from '../../actions/user.selectors';
import { useHistory } from "react-router-dom";
import {AiFillShopping} from 'react-icons/ai';
import FAQ from './FAQ';
import Profile from './Profile';
import Purchase from './Purchase';



const UserDasboard = (props) => {
    const [user, setUserInfo] = useState({
        'cart': [],
        'city': "Malibu",
        'email': "email@gmail.com",
        'history': [],
        'isAdmin': false,
        'isAuth': true,
        'lastname': "SurName",
        'name': "Name",
        'phone': "1888888414",
        'role': "user",
        'state': "CA",
        'street': "4184 Forside Rd",
        'verified': false
    })
    const {logoutStart, currentUser, isLoading} = props;

    let history = useHistory();

    useEffect(() => {
        document.title = 'Dashboard - NYCLace'
    }, [])

    useEffect(() => {
        setUserInfo(currentUser)
    },[currentUser])

    const logoutUser = (e) => {
        e.preventDefault();
        logoutStart(currentUser.email);
        history.push('/')
    }

    const panes = [
        { menuItem: 'FAQ', pane: {key: 'tab1', content: (<FAQ/>)} },
        { menuItem: 'EDIT INFO', pane: {key: 'tab2', content: (<Profile/>)} }
    ]

    return (
        <DashboardContainer>
            <TopHeader>
                Welcome, {user.name} {user.lastname}
            </TopHeader>
            
            <MainLevel>
                <LeftContainer>
                    <BoxTitle>
                        NAVIGATION
                    </BoxTitle>
                    <Tab panes={panes} renderActiveOnly={false} />
                </LeftContainer>

                <RightContainer>
                    <BoxTitle>
                        ORDER HISTORY
                    </BoxTitle>

                    <OrderContainer>
                        <OrderHistory>
                            {user.history.length !== 0  ?
                                <>
                                    {user.history.reverse().map((order, i) => (
                                        <Purchase
                                            porder={order.porder}
                                            total={order.orderTotal}
                                            items={order.items}
                                            date={order.dataOfPurchase}
                                            key={i}
                                        />
                                    ))}
                                </>
                                :
                                <PurchaseEmpty>
                                    <h4>No Purchase(s) Made</h4>
                                    <AiFillShopping
                                        size={'10rem'}
                                        color={'#6435c9'}
                                    />
                                </PurchaseEmpty>
                            }

                        </OrderHistory>

                        <UserInfo>
                            <UserBox>
                                <InfoHeader>Account Summary</InfoHeader>
                                {isLoading === false ?
                                <Info>
                                    <MainInfo>
                                        <span>Email:</span>
                                        <span>{user.email}</span>
                                    </MainInfo>
                                    <MainInfo>
                                        <span>Phone:</span>
                                        <span>{user.phone}</span>
                                    </MainInfo>
                                    <AddressInfo>
                                        <div>Address:</div>
                                        <div>
                                            <span>{user.street}</span>
                                            <span>{user.city}, {currentUser.state}</span>
                                            <span>{user.zipcode}</span>
                                        </div>
                                    </AddressInfo>
                                    <SignOutButton>
                                        <Button
                                            color='violet'
                                            onClick={logoutUser}
                                            fluid
                                        >
                                            Sign Out
                                        </Button>
                                    </SignOutButton>
                                </Info>
                                :
                                <Segment style={{height: '100%'}}>
                                    <Dimmer active inverted>
                                    <Loader>Loading</Loader>
                                    </Dimmer>
                            
                                    <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
                                </Segment>
                                }
                            </UserBox>
                            <BottomLogo>
                                {user.verified ?
                                    <Button color='green' fluid>
                                        <Icon name='check' /> Verified
                                    </Button>
                                :
                                    <Button color='yellow' fluid>
                                        <Icon name='exclamation triangle' /> Unverified
                                    </Button>
                                }
                            </BottomLogo>
                        </UserInfo>
                    </OrderContainer>
                </RightContainer>
            </MainLevel>
        </DashboardContainer>
    );
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    isLoading: selectIsLoading
});

const mapDispatchToProps = (dispatch) => ({
    logoutStart: userId => dispatch(logoutStart(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserDasboard);