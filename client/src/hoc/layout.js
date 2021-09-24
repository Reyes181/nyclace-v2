import React, {useState, useRef, useEffect} from 'react';
import {createStructuredSelector} from 'reselect';
import { selectMessage } from '../actions/user.selectors';
import { connect, useDispatch } from 'react-redux';
import { clearMessage } from '../actions/userActions';
import Header from '../components/header_footer/Header';
import SideDrawer from '../components/header_footer/side_drawer/SideDrawer';
import Backdrop from '../components/header_footer/side_drawer/Backdrop';
import Footer from '../components/header_footer/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import showToast from '../utils/ShowToast';

const Layout = (props) => {
    const [sideOpen, setSideOpen] = useState(false);
    const [moved, setMoved] = useState(0);
    const prevRef = useRef();
    const dispatch = useDispatch();
    const message = props.message;

    const drawerToggleHandler = () => {
        setSideOpen(!prevRef.current)
    }

    const backdropClickHandler = () => {
        setSideOpen(false)
    }

    let backDrop;

    if(sideOpen){
        backDrop = <Backdrop click={backdropClickHandler}/>
    }

    useEffect(() => {
        document.addEventListener("scroll", () => {
          const scrollCheck = window.scrollY > 100
          if (scrollCheck !== moved) {
            setMoved(scrollCheck)
          }
        })
    });

    useEffect(() => {
        if(message !== null){
            if(message.success){
                showToast('SUCCESS', message.message);
                dispatch(clearMessage());
            }
            if(!message.success){
                showToast('ERROR', message.message);
                dispatch(clearMessage());
            }
        }
    }, [message, dispatch])

    return (
        <div style={{height: '100%', width: '100%'}}>
            <Header isMoved={moved} drawerClickHandler={drawerToggleHandler}/>
            <SideDrawer show={sideOpen} click={backdropClickHandler}/>
            {backDrop}
            {props.children}
            <ToastContainer/>
            <Footer/>
        </div>    
    );
}

const mapStateToProps = createStructuredSelector({
    message: selectMessage
});

export default connect(mapStateToProps, null)(Layout);