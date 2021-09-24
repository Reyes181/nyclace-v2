import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import Logo from '../../../assets/img/new_logo_2.png';
import Links from './Links';
import {SideNavUl, ImageLi} from '../../../styles/js/sideDrawer.styles';
import {HiChevronRight} from 'react-icons/hi';

const SideDrawerNav = styled.nav`
        height: 100%;
        background: white;
        box-shadow: 1px 0px 7px rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        left: 0;
        width: 80%;
        max-width: 400px;
        z-index: 200;
        transform: ${props => props.show ? 'translateX(0)' : 'translateX(-100%)'};
        transition: transform 0.3s ease-out;

        @media screen and (max-width: 1024px) {
            box-shadow: 1px 0px 2px rgba(0, 0, 0, 0.5)
        }
    `;
const SideDrawer = (props) => {
    
    
    return (
        <SideDrawerNav show={props.show}>
            <SideNavUl>
                <ImageLi>
                    <img src={Logo} alt='site logo'/>
                </ImageLi>
                {Links.map((link, i) => (
                    <li key={i}>
                        <NavLink to={{pathname: link.link, state:{brandId: link.brandId}}}  onClick={props.click}>
                            <span>{link.name}</span>
                            <HiChevronRight
                                size={'2rem'}
                                color='#D8D8D8'
                            />
                        </NavLink>
                        
                    </li>
                ))}
            </SideNavUl>
        </SideDrawerNav>
    )
}

export default SideDrawer;