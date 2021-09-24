import React from 'react';
import {FooterContainer, FooterTop, FooterTopLeft, 
    FooterTopRight, FooterTopLeftText, FooterTopLeftInput,
    FooterTopRightText, FooterTopRightButton, FooterBottom,
    FooterBottomTop, FooterBottomList, FooterBottomTopLeft, FooterBottomTopRight,
    FooterBottomAbout, FooterBottomApp, FooterBottomAppTitle, FooterBottomApps,
    FooterBottomSocial, FooterBottomAppImg, FooterBottomSocialIcons, FooterBottomSocialTitle
} from '../../styles/js/footer.styles';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaPinterest } from 'react-icons/fa';
import AppBadge from '../../assets/img/app-badge.png';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterTop>

                <FooterTopLeft>
                    <FooterTopLeftText>
                        Be the first to hear about new releases, special offers and more.
                    </FooterTopLeftText>
                    <FooterTopLeftInput>
                        <input 
                            type='text'
                            placeholder='Email Address'
                        />
                        <button>SIGN UP</button>
                    </FooterTopLeftInput>
                </FooterTopLeft>

                <FooterTopRight>
                    <FooterTopRightText>
                        Give your friends $10 off and get $10 off when they make a purchase.
                    </FooterTopRightText>
                    <FooterTopRightButton>
                        REFER A FRIEND
                    </FooterTopRightButton>
                </FooterTopRight>

            </FooterTop>

            <FooterBottom>
                <FooterBottomTop>
                    <FooterBottomTopLeft>

                        <FooterBottomAbout>
                            <div>About Us</div>
                            <span>Our Mission</span>
                            <span>Authenticity</span>
                            <span>Locations</span>
                            <span>Careers</span>
                            <span>Journal</span>
                            <span>Upcoming</span>
                        </FooterBottomAbout>
                        
                        <FooterBottomAbout>
                            <div>Support</div>
                            <span>FAQs</span>
                            <span>Accessibility</span>
                            <span>Delivery and Returns</span>
                            <span>Track Your Order</span>
                            <span>Student Discount</span>
                            <span>Contact Us</span>
                        </FooterBottomAbout>

                    </FooterBottomTopLeft>
                    <FooterBottomTopRight>
                        
                        <FooterBottomApp>
                            <FooterBottomAppTitle>Download the app</FooterBottomAppTitle>
                            <FooterBottomApps>
                                <FooterBottomAppImg style={{background: `url(${AppBadge})`}}/>
                            </FooterBottomApps>
                        </FooterBottomApp>
                        
                        <FooterBottomSocial>
                            <FooterBottomSocialTitle>Connect with us</FooterBottomSocialTitle>
                            <FooterBottomSocialIcons>
                                <FaInstagram size={'1.5rem'}/>
                                <FaFacebookSquare size={'1.5rem'}/>
                                <FaTwitter size={'1.5rem'}/>
                                <FaYoutube size={'1.5rem'}/>
                                <FaPinterest size={'1.5rem'}/>
                            </FooterBottomSocialIcons>
                        </FooterBottomSocial>

                    </FooterBottomTopRight>
                </FooterBottomTop>
                <FooterBottomList>
                    <span>Site Map</span>
                    <span>Privacy and Cookie Policy</span>
                    <span>Terms and Conditions</span>
                </FooterBottomList>
            </FooterBottom>

        </FooterContainer>
    )
}

export default Footer;