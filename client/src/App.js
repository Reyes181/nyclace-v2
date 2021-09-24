import React, {useEffect, lazy, Suspense} from 'react';
import {Switch} from 'react-router-dom';
import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux';
import Layout from './hoc/layout';
import Authenticated from './hoc/Authenticated';
import Unauthenticated from './hoc/Unauthenticated';
import HashRoute from './hoc/HashRoute';
import { selectCurrentUser, selectIsUserLoaded, selectIsLoading } from './actions/user.selectors'
import {getProductsStart} from './actions/productActions';
import {selectIsProductFetching, selectIsProductLoaded} from './actions/product.selectors';

import UserDasboard from './components/user/UserDashboard';
import WithSpinner from './hoc/withSpinner';
import Spinner from './hoc/spinner';
import { checkUserSession } from './actions/userActions';
import CartPage from './components/user/CartPage';
import VerifiedSuccess from './components/user/VerifiedSuccess';
import ResetPassword from './components/auth/ResetPassword';
import SendResetPassword from './components/auth/SendResetPassword';

const HomePage = lazy(() => import('./components/home/Home'));
const ProductDetailPage = lazy(() => import('./components/product/ProductPage'));
const BrandPage = lazy(() => import('./components/brand'));
const RegisterPage = lazy(() => import('./components/auth'));

const HomePageSpinner = WithSpinner(HomePage);
const ProductPageSpinner = WithSpinner(ProductDetailPage);
const BrandPageSpinner = WithSpinner(BrandPage);
const RegisterPageSpinner = WithSpinner(RegisterPage);

function App({checkUserSession, isUserLoading, currentUser, isPorductFetching, isProductLoaded,  getProductsStart, isUserLoaded}) {

  useEffect(() => {
    checkUserSession();
    
    getProductsStart();
  }, [checkUserSession, getProductsStart])

  return (
    <Layout>
      <Switch>
      <Suspense fallback={<Spinner/>}>
        <Authenticated
          pathRoute="/account/dashboard"
          isAuth={currentUser.isAuth}
          component={UserDasboard}
        />
        <Authenticated
          pathRoute="/cart"
          isAuth={currentUser.isAuth}
          component={CartPage}
        />
        <HashRoute
          pathRoute="/account/reset_password/:uniqueRoute/:token"
          isAuth={currentUser.isAuth}
          component={ResetPassword}
        />
        <Unauthenticated
          pathRoute="/account/verified/:id"
          isAuth={currentUser.isAuth}
          component={VerifiedSuccess}
          isLoadingContent={null}
        />
        <Unauthenticated
          pathRoute="/account/request_password_reset"
          isAuth={currentUser.isAuth}
          component={SendResetPassword}
          isLoadingContent={null}
        />
        <Unauthenticated
          pathRoute="/account/register"
          isAuth={currentUser.isAuth}
          component={RegisterPageSpinner}
          isLoadingContent={isUserLoading}
        />
        <Unauthenticated
          pathRoute="/brand/:handle"
          isAuth={currentUser.isAuth}
          component={BrandPageSpinner}
          isLoadingContent={!isProductLoaded}
        />
        <Unauthenticated
          pathRoute="/product_detail/:id"
          isAuth={currentUser.isAuth}
          component={ProductPageSpinner}
          isLoadingContent={!isProductLoaded}
        />
        <Unauthenticated
          pathRoute="/"
          isAuth={currentUser.isAuth}
          component={HomePageSpinner}
          isLoadingContent={!isProductLoaded}
        />
        </Suspense>
      </Switch>
    </Layout>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  isUserLoaded: selectIsUserLoaded,
  isPorductFetching: selectIsProductFetching,
  isProductLoaded: selectIsProductLoaded,
  isUserLoading: selectIsLoading
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
  getProductsStart: () => dispatch(getProductsStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
