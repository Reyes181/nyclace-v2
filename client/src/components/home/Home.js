import React, {useEffect} from 'react';
import HomeArrival from './HomeArrival';
import HomeSlider from './HomeSlider';
import PromoBlock from './PromoBlock';
import ProductsBrand from './ProductsBrand';
import {createStructuredSelector} from 'reselect';
import {HomeContainer, PromoBlockContainer} from '../../styles/js/home.styles.';

import { connect } from 'react-redux';
import { fetchArrivalStart, fetchByBrandStart} from '../../actions/productActions';

import FilaPromo from '../../assets/img/mini_promos_filas.png';
import BalancePromo from '../../assets/img/mini_promos_balance.png';
import VansPromo from '../../assets/img/mini_promos_vans.png';
import { selectIsArrivalLoaded, selectByBrandLoaded } from '../../actions/product.selectors';
import { checkUserSession } from '../../actions/userActions';



const Home = ( {fetchArrivalStart, isArrivalLoaded, fetchByBrandStart, isByBrandLoaded, checkUserSession} ) => {

    useEffect(() => {
        fetchArrivalStart();
        fetchByBrandStart('5bd3e00bfa61e106c24fa0fe');
        checkUserSession();
        document.title = 'Home - NYCLace'
    }, [fetchArrivalStart, fetchByBrandStart, checkUserSession])

    const Promo = [
        {
            image: BalancePromo,
            link: '/brand/new_balance',
            brandId: '5bd3e020fa61e106c24fa0ff'
        }, 
        {
            image: FilaPromo,
            link: '/brand/fila',
            brandId: '5bd3e6e6fa61e106c24fa109'
        }, 
        {
            image: VansPromo,
            link: '/brand/vans',
            brandId: '5bd3e229fa61e106c24fa103'
        }
    ]

    return (
        <HomeContainer>
            <HomeSlider/>
            <HomeArrival
                isLoading={!isArrivalLoaded}
            />
            <PromoBlockContainer>
                {Promo.map((p, i) => (
                    <PromoBlock key={i} pimage={p.image} link={p.link} brandId={p.brandId}/>
                ))}
            </PromoBlockContainer>
            <ProductsBrand 
                // id={'5bd3e00bfa61e106c24fa0fe'}
                isLoading={!isByBrandLoaded}
            />
        </HomeContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    isArrivalLoaded: selectIsArrivalLoaded,
    isByBrandLoaded: selectByBrandLoaded
})

const mapDispatchToProps = dispatch => ({
    fetchArrivalStart: () => dispatch(fetchArrivalStart()),
    checkUserSession: () => dispatch(checkUserSession()),
    fetchByBrandStart: (id) => dispatch(fetchByBrandStart(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);