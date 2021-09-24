import React from 'react';
import {ToggleButton, ToggleButtonSpan} from '../../../styles/js/toggleButton.styles';

const DrawerToggleButton = (props) => {
    return (
        <ToggleButton onClick={props.click}>
            <ToggleButtonSpan/>
            <ToggleButtonSpan/>
            <ToggleButtonSpan/>
        </ToggleButton>
    )
}

export default DrawerToggleButton;