import React from 'react';
import {Link} from 'react-router-dom';
import {PromoBlockImg} from '../../styles/js/home.styles.';

const PromoBlock = (props) => {
    return (
        <PromoBlockImg>
            <Link to={{pathname: props.link, state: {brandId: props.brandId}}}>
                <div style={{background: `url(${props.pimage})`}}/>
            </Link>
        </PromoBlockImg>
    )
}

export default PromoBlock;