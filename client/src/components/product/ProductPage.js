import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { getProductDetailStart, clearProductStart, getRandomProductStart} from '../../actions/productActions';
import { userAddToCartStart} from '../../actions/userActions';
import { selectDetailLoaded, selectDetail, selectRandomLoaded } from '../../actions/product.selectors';
import { selectCurrentUser } from '../../actions/user.selectors';
import { AiOutlineLoading } from 'react-icons/ai';
import ProductInfo from './ProductInfo';
import ProductRandom from './ProductRandom';
import ProductMiniSlider from './ProductMiniSlider';
import ProductSlider from './ProductSlider';
import AddCartModal from '../../utils/AddCartModal';
import CartAddedModal from '../../utils/CartAddedModel';
import {ProductContainer, ProductDetails} from '../../styles/js/product.styles';
import {LoadingSpinner} from '../../styles/js/card.styles';


const ProductPage = ({
    currentUser, getProductDetailStart, match, isDetailLoaded, products, clearProductStart, 
    getRandomProductStart, isRandomLoaded, random, userAddToCartStart
}) => {
    
    const id = match.params.id;
    const [open, setOpen] = useState(false);
    const [openCart, setOpenCart] = useState(false);
    const [errorType, setErrorType] = useState(null);
    const [prodDetails, setProdDetails] = useState({});

    useEffect(() => {
        if(isDetailLoaded){
            document.title = `${products.name} - NYCLace`
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isDetailLoaded])

    useEffect(() => {
        getProductDetailStart(id);
        getRandomProductStart();
        window.scrollTo(0, 0);
        return () => {
            clearProductStart(null);
        };
    }, [id, getProductDetailStart, clearProductStart, getRandomProductStart]);

    const handleAddToCart = (item) => {
        if(!currentUser.isAuth){
            setOpen(true);
            setErrorType('auth');
            return false
        }
        if(!currentUser.verified){
            setOpen(true);
            setErrorType('verify');
            return false
        }
        setProdDetails(item);
        userAddToCartStart(item);
        setOpenCart(true)
        const timeout = setTimeout(() => {
            setOpenCart(false)
        }, 2000)
        return () => clearTimeout(timeout);
    }

    const handleClose = (bool) => {
        setOpen(bool)
    }

    return (
        <ProductContainer>
            {products !== null  ?
                <>
                    <ProductDetails>
                        <ProductSlider
                            isLoading={!isDetailLoaded}
                        />
                        <ProductMiniSlider 
                            isLoading={!isDetailLoaded}
                        />
                        <ProductInfo 
                            isLoading={!isDetailLoaded}
                            handleAddToCart={handleAddToCart}
                        />
                    </ProductDetails>
                    <ProductRandom
                        isLoading={!isRandomLoaded}
                    />
                    <AddCartModal
                        open={open}
                        errorType={errorType}
                        handleClose={handleClose}
                    />

                    <CartAddedModal
                        openCart={openCart}
                        details={prodDetails}
                    />
                </>
                :
                <LoadingSpinner>
                    <AiOutlineLoading size={'4rem'}/>
                </LoadingSpinner>
            }
        </ProductContainer>
    )
};

const mapStateToProps = createStructuredSelector({
    isDetailLoaded: selectDetailLoaded,
    products: selectDetail,
    isRandomLoaded: selectRandomLoaded,
    currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
    getProductDetailStart: (id) => dispatch(getProductDetailStart(id)),
    clearProductStart: (clearArray) => dispatch(clearProductStart(clearArray)), 
    getRandomProductStart: () => dispatch(getRandomProductStart()),
    userAddToCartStart: (data) => dispatch(userAddToCartStart(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);