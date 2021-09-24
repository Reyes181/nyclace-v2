import React from 'react';
import {BackdropContainer} from '../../../styles/js/sideDrawer.styles'

const Backdrop = (props) => (
    <BackdropContainer onClick={props.click}/>
)

export default Backdrop;