import axios from 'axios';
import {takeLatest, put, all, call, delay} from 'redux-saga/effects';
import UserActionTypes from './user.types';
import { USER_SERVER } from '../utils/misc';
import {signUpFailure, signUpSuccess, logoutFailure, logoutSuccess, authSuccess, authFailure, 
     signInSuccess, signInFailure, userAddToCartSuccess, userAddToCartFailure, userPurchaseByCardFailure, userPurchaseByCardSuccess,
    clearPurchaseOrderSuccess, clearPurchaseOrderFailure, updateCartItemFailure, updateCartItemSuccess, updateItemQtySuccess, updateItemQtyFailure, editUserFailure, editUserSuccess, 
    verifiedEmailFailure, verifiedEmailSuccess, sendResetFailure, sendResetSuccess, changePasswordSuccess, changePasswordFailure, sendVerificationFailure, sendVerificationSuccess
} from './userActions';

const putUserAuth = async () => {
    let results;
    await axios.get(`${USER_SERVER}/auth`)
    .then(response => results = response.data);
    return results
}


export function* isUserAuth() {
    try {
        const userAuth = yield call(putUserAuth)
        yield put(authSuccess(userAuth))
    } catch (error) {
        yield put(authFailure(error))
    }
}

export function* onCheckUserSession() {
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuth)
}

const putSignUp = async (userCredential) => {
    let results;
    await axios.post(`${USER_SERVER}/register`, userCredential)
    .then(response => results = response.data);
    return results;
}

export function* signUp({payload: userCredential}) {
    try {
        const user = yield call(putSignUp, userCredential)
        yield put(user.success ? signUpSuccess(user) : signUpFailure(user))
    } catch(user) {
        yield put(signUpFailure(user.message))
    }
}

export function* onSignUpStart() {
    yield takeLatest(UserActionTypes.SIGN_UP_START, signUp)
}



const putEmailSignIn = async (dataToSubmit) => {
    let results;
    await axios.post(`${USER_SERVER}/login`,dataToSubmit)
    .then(response => results = response.data);
    return results;
}

export function* emailSignIn({payload: dataToSubmit}) {
    try {
        const userCredential = yield call(putEmailSignIn, dataToSubmit)
        yield put(userCredential.loginSuccess ? signInSuccess(userCredential.user) : signInFailure(userCredential.message))
    } catch(error) {
        yield put(signInFailure(error))
    }
}


export function* emailSignInStart() {
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, emailSignIn)
}

const putLogoutUser = async () => {
    let results;
    await axios.post(`${USER_SERVER}/logout`)
    .then(response => results = response.data);
    return results;
}

export function* logoutUser({payload: userId}){
    try {
        const userAccount = yield call(putLogoutUser)
        yield put(logoutSuccess(userAccount))
        // const userAuth = yield call(putUserAuth)
        // yield put(authSuccess(userAuth))

    } catch(error) {
        yield put(logoutFailure(error))
    }
}

export function* onLogoutStart() {
    yield takeLatest(UserActionTypes.LOGOUT_START, logoutUser)
}

const putNewItem = async (data) => {
    let results;
    await axios.post(
        `${USER_SERVER}/addToCart?
            productId=${data.payload._id}
            &productSize=${data.payload.size}
            &productName=${data.payload.name}
            &productPrice=${data.payload.price}
            &productImg=${data.payload.images[0]}
        `
    ).then(response => results = response.data);
    return results;
}

export function* addToCart(data){
    try {
        const newItem = yield call(putNewItem, data)
        yield delay(3000)
        yield put(userAddToCartSuccess(newItem.doc))
        const userAuth = yield call(putUserAuth)
        yield put(authSuccess(userAuth))
    } catch(error) {
        yield put(userAddToCartFailure(error))
    }
};

export function* onUserAddToCartStart() {
    yield takeLatest(UserActionTypes.USER_ADD_TO_CART_START, addToCart)
};

const putPurchasedItems = async (data) => {
    let results;
    await  axios.post(`${USER_SERVER}/purchaseByCard`, data)
    .then(response => results = response.data);
    return results;
}

export function* purchaseByCard(data){
    try {
        const purchasedItems = yield call(putPurchasedItems, data)
        yield delay(5000)
        yield put(userPurchaseByCardSuccess(purchasedItems))
    } catch(error){
        yield put(userPurchaseByCardFailure(error))
    }
};

export function* onPurchaseByCardStart() {
    yield takeLatest(UserActionTypes.USER_PRODUCT_PURCHASE_BY_CARD_START, purchaseByCard)
};

export function* clearPurchaseOrder(){
    try {
        const empty = [{
            porder: '',
            dataOfPurchase: '',
            orderTotal: '',
            items: []
        }]
        yield put(clearPurchaseOrderSuccess(empty))
    } catch(error){
        yield put(clearPurchaseOrderFailure(error))
    }
}

export function* onClearPurchaseOrderStart() {
    yield takeLatest(UserActionTypes.CLEAR_PURCHASE_ORDER_START, clearPurchaseOrder)
}

const putUpdateCartItem = async (id) => {
    let results;
    await axios.get(`${USER_SERVER}/removeFromCart?_id=${id.payload}`)
    .then(response => results = response.data);
    return results;
}

export function* updateCartItem(id){
    try {
        const data = yield call(putUpdateCartItem, id)
        yield put(updateCartItemSuccess(data))
    } catch(error){
        yield put(updateCartItemFailure(error))
    }
}

export function* onUpdateCartItemStart() {
    yield takeLatest(UserActionTypes.UPDATE_CART_ITEM_START, updateCartItem)
}

const putUpdateItemQty = async (id) => {
    let results;
    await axios.get(`${USER_SERVER}/updateItemQty?_id=${id.payload.id}&type=${id.payload.type}`)
    .then(response => results = response.data);
    return results;
}

export function* updateItemQty(id){
    try {
        const data = yield call(putUpdateItemQty, id)
        yield put(updateItemQtySuccess(data))
    } catch(error){
        yield put(updateItemQtyFailure(error))
    }
}

export function* onUpdateItemQtyStart() {
    yield takeLatest(UserActionTypes.UPDATE_ITEM_QTY_START, updateItemQty)
}

const putEditUser = async (dataToSubmit) => {
    let results;
    await axios.post(`${USER_SERVER}/update_profile`, dataToSubmit)
    .then(response => results = response.data);
    return results;
}

export function* editUser(dataToSubmit){
    try {
        const data =  yield call(putEditUser, dataToSubmit);
        yield put(editUserSuccess(data))
        const userAuth = yield call(putUserAuth)
        yield put(authSuccess(userAuth))
    } catch(error){
        yield put(editUserFailure(error))
    }
}

export function* onEditUserStart(){
    yield takeLatest(UserActionTypes.EDIT_USER_INFO_START, editUser)
}

const putVerifiedEmail = async (data) => {
    let results;
    await axios.post(`${USER_SERVER}/verification?token=${data.payload}`)
    .then(response => results = response.data);
    return results;
}

export function* verifiedEmail(data){
    try {
        const verified = yield call(putVerifiedEmail, data)
        yield put(verified.success ? verifiedEmailSuccess(verified) : verifiedEmailFailure(verified))
    } catch(error){
        yield put(verifiedEmailFailure(error))
    }
}

export function* onVerifiedEmailStart(){
    yield takeLatest(UserActionTypes.VERIFIED_EMAIL_START, verifiedEmail)
}

const putResetLink = async (data) => {
    let results;
    await axios.post(`${USER_SERVER}/sendResetLink`, data)
    .then(response => results = response.data);
    return results;
}

export function* resetLink(data){
    try {
        const emailSent = yield call(putResetLink, data)
        yield put(emailSent.success ? sendResetSuccess(emailSent) : sendResetFailure(emailSent))
    } catch(error){
        yield put(sendResetFailure(error))
    }
}

export function* onResetLinkStart(){
    yield takeLatest(UserActionTypes.SEND_RESET_LINK_START, resetLink)
}

const putChangePassword = async (data) => {
    let results;
    await axios.post(`${USER_SERVER}/reset_password`, data)
    .then(response => results = response.data);
    return results;
}

export function* changePassword(data){
    try {
        const passwordChanged = yield call(putChangePassword, data)
        yield put(passwordChanged.success ? changePasswordSuccess(passwordChanged) : changePasswordFailure(passwordChanged))
    } catch(error){
        yield put(changePasswordFailure(error))
    }
}

export function* onChangePasswordStart(){
    yield takeLatest(UserActionTypes.CHANGE_PASSWORD_START, changePassword)
}

const putSendVerification = async (data) => {
    let results;
    await axios.post(`${USER_SERVER}/send_verification`, data)
    .then(response => results = response.data);
    return results;
}

export function* sendVerification(data){
    try {
        const verificationSent = yield call(putSendVerification, data)
        yield put(verificationSent.success ? sendVerificationSuccess(verificationSent) : sendVerificationFailure(verificationSent))
    } catch(error){
        yield put(sendVerificationFailure(error))
    }
}

export function* onSendVerifyStart(){
    yield takeLatest(UserActionTypes.SEND_VERIFY_START, sendVerification)
}

export function* userSagas() {
    yield all([
        call(emailSignInStart), 
        call(onCheckUserSession),
        call(onLogoutStart),
        call(onSignUpStart),
        // call(onSignUpSuccess),
        call(onUserAddToCartStart),
        call(onPurchaseByCardStart),
        call(onClearPurchaseOrderStart),
        call(onUpdateCartItemStart),
        call(onUpdateItemQtyStart),
        call(onEditUserStart),
        call(onVerifiedEmailStart),
        call(onResetLinkStart),
        call(onChangePasswordStart),
        call(onSendVerifyStart)
        // call(onUpdateCurrentUserSuccess),
        // call(onIsUserVerified)
    ])
}