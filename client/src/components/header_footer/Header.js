import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { selectCurrentUser, selectIsLoading } from '../../actions/user.selectors';
import {NavLink} from 'react-router-dom';
import DrawerToggleButton from './side_drawer/DrawerToggleButton';
import Logo from '../../assets/img/new_logo_2.png';
import { FaRegUserCircle } from 'react-icons/fa';
import {AiOutlineShopping} from 'react-icons/ai';
import {RiLoaderFill} from 'react-icons/ri'

import {HeaderToolBar, HeaderMainLogo, HeaderMainNav, HeaderBurger, HeaderNavItems, HeaderNavUsers, HeaderNavigation, ShoppingCart} from '../../styles/js/header.styles';

const Header = ({currentUser, isLoading, ...props}) => {
    const [user, setUser] = useState({cart: [], isAuth: false});

    useEffect(() => {
        if(currentUser.isAuth){
            setUser(currentUser)
        } else {
            setUser({cart: [], isAuth: false})
        }
    }, [currentUser, isLoading])
    
    return (
        <HeaderToolBar style={{borderBottom: props.isMoved ? '1px solid gray' : 'none'}}>
            <HeaderNavigation>
                <HeaderBurger>
                    <DrawerToggleButton click={props.drawerClickHandler}/>
                </HeaderBurger>
                <HeaderMainNav>
                    <HeaderMainLogo>
                        <NavLink to='/'>
                            <img
                                src={Logo}
                                alt='Site Logo'
                            />
                        </NavLink>
                    </HeaderMainLogo>
                    <HeaderNavItems>
                        <ul>
                            <li>
                                <NavLink 
                                    to={{pathname: '/brand/jordan', state:{brandId: '5bd3e00bfa61e106c24fa0fe'}}}
                                >
                                    Jordan
                                </NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    to={{pathname: '/brand/adidas', state:{brandId: '5bd3dfd8fa61e106c24fa0fd'}}}
                                >
                                    Adidas
                                </NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    to={{pathname: '/brand/nike', state:{brandId: '5bd152582285d607cf7b7baa'}}}
                                >
                                    Nike
                                </NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    to={{pathname: '/brand/converse', state:{brandId: '5bd3e186fa61e106c24fa102'}}}
                                >
                                    Converse
                                </NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    to={{pathname: '/brand/vans', state:{brandId: '5bd3e229fa61e106c24fa103'}}}
                                >
                                    Vans
                                </NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    to={{pathname: '/brand/new_balance', state:{brandId: '5bd3e020fa61e106c24fa0ff'}}}
                                >
                                    New Balance
                                </NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    to={{pathname: '/brand/asics', state:{brandId: '5bd3e321fa61e106c24fa105'}}}
                                >
                                    Asics
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={{pathname: '/brand/reebok', state:{brandId: '5bd3e16bfa61e106c24fa101'}}}
                                >
                                    Reebok
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={{pathname: '/brand/puma', state:{brandId: '5bd3e03afa61e106c24fa100'}}}
                                >
                                    Puma
                                </NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    to={{pathname: '/brand/timberland', state:{brandId: '5bd3e644fa61e106c24fa107'}}}
                                >
                                    Timberland
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={{pathname: '/brand/mitchell_ness', state:{brandId: '5bd3e250fa61e106c24fa104'}}}
                                >
                                    Mitchell Ness
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={{pathname: '/brand/polo', state:{brandId: '5bd3e395fa61e106c24fa106'}}}
                                >
                                    Polo
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={{pathname: '/brand/pailadium', state:{brandId: '5bd3e6b0fa61e106c24fa108'}}}
                                >
                                    Pailadium
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={{pathname: '/brand/fila', state:{brandId: '5bd3e6e6fa61e106c24fa109'}}}
                                >
                                    Fila
                                </NavLink>
                            </li>
                        </ul>
                    </HeaderNavItems>
                   
                </HeaderMainNav>
                <HeaderNavUsers>
                    <ul>
                        
                        <NavLink to='/account/register'>
                            <FaRegUserCircle
                                size={'1.8rem'}
                                color='#D0D0D0'
                            />
                        </NavLink>
                        
                        <NavLink to='/cart'>
                            <ShoppingCart>
                                <AiOutlineShopping
                                    size={'1.9rem'}
                                    color='#D0D0D0'
                                />
                                {isLoading ?
                                    <span style={{fontSize: '1rem'}}>
                                        <RiLoaderFill
                                            size={'0.9rem'}
                                            color='#00FF7F'
                                        />
                                    </span>
                                    
                                    :
                                    <span>
                                        {
                                            user.cart.length
                                        }
                                    </span>
                                }

                            </ShoppingCart>
                        </NavLink>
                        

                    </ul>
                </HeaderNavUsers>
            </HeaderNavigation>
        </HeaderToolBar>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    isLoading: selectIsLoading
});

export default connect(mapStateToProps)(Header);