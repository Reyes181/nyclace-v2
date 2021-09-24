import axios from 'axios';
import UserActionTypes from './user.types';
import { USER_SERVER } from '../utils/misc';

export function auth(){
    const request = axios.get(`${USER_SERVER}/auth`)
    .then(response => response.data);
    
    return {
        type: UserActionTypes.AUTH_USER,
        payload: request
    }
}

// export function registerUser(dataToSubmit){
//     const request = axios.post(`${USER_SERVER}/register`,dataToSubmit)
//         .then(response => response.data);
        
//     return {
//         type: UserActionTypes.REGISTER_USER,
//         payload: request
//     }
// };

export function loginUser(dataToSubmit){
    const request = axios.post(`${USER_SERVER}/login`,dataToSubmit)
        .then(response => response.data);
        
    return {
        type: UserActionTypes.LOGIN_USER,
        payload: request
    }
};

// export const registerUser = dataToSubmit => ({
//     type: UserActionTypes.REGISTER_USER,
//     payload: dataToSubmit
// })

export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
});

export const emailSignInStart = dataToSubmit => ({
    type: UserActionTypes.EMAIL_SIGN_IN_START,
    payload: dataToSubmit
});

export const logoutStart = (userId) => ({
    type: UserActionTypes.LOGOUT_START,
    payload: userId
});

export const logoutSuccess = (userAccount) => ({
    type: UserActionTypes.LOGOUT_SUCCESS,
    payload: userAccount
})

export const logoutFailure = error => ({
    type: UserActionTypes.LOGOUT_FAILURE,
    payload: error
});

export const signInSuccess = user => ({
    type: UserActionTypes.SIGN_IN_SUCCESS,
    payload: user
});

export const signInFailure = error => ({
    type: UserActionTypes.SIGN_IN_FAILURE,
    payload: error
});

export const signUpStart = (userCredential) => ({
    type: UserActionTypes.SIGN_UP_START,
    payload: userCredential
});

export const signUpSuccess = (userCredential) => ({
    type: UserActionTypes.SIGN_UP_SUCCESS,
    payload: userCredential
});

export const signUpFailure = (error) => ({
    type: UserActionTypes.SIGN_UP_FAILURE,
    payload: error
});

export const checkUserSession = () => ({
    type: UserActionTypes.CHECK_USER_SESSION
});

export const authSuccess = (userAuth) => ({
    type: UserActionTypes.AUTH_SUCCESS,
    payload: userAuth
});

export const authFailure = (error) => ({
    type: UserActionTypes.AUTH_FAILURE,
    payload: error
});

export const userAddToCartStart = (data) => ({
    type: UserActionTypes.USER_ADD_TO_CART_START,
    payload: data
});

export const userAddToCartSuccess = (data) => ({
    type: UserActionTypes.USER_ADD_TO_CART_SUCCESS,
    payload: data
});

export const userAddToCartFailure = (error) => ({
    type: UserActionTypes.USER_ADD_TO_CART_FAILURE,
    payload: error
});

export const userPurchaseByCardStart = (data) => ({
    type: UserActionTypes.USER_PRODUCT_PURCHASE_BY_CARD_START,
    payload: data
});

export const userPurchaseByCardSuccess = (data) => ({
    type: UserActionTypes.USER_PRODUCT_PURCHASE_BY_CARD_SUCCESS,
    payload: data
});

export const userPurchaseByCardFailure = (error) => ({
    type: UserActionTypes.USER_PRODUCT_PURCHASE_BY_CARD_FAILURE,
    payload: error
});

export const clearPurchaseOrderStart = () => ({
    type: UserActionTypes.CLEAR_PURCHASE_ORDER_START
});

export const clearPurchaseOrderSuccess = (data) => ({
    type: UserActionTypes.CLEAR_PURCHASE_ORDER_SUCCESS,
    payload: data
});

export const clearPurchaseOrderFailure = (error) => ({
    type: UserActionTypes.CLEAR_PURCHASE_ORDER_FAILURE,
    payload: error    
});

export const updateCartItemStart = (data) => ({
    type: UserActionTypes.UPDATE_CART_ITEM_START,
    payload: data
});

export const updateCartItemSuccess = (data) => ({
    type: UserActionTypes.UPDATE_CART_ITEM_SUCCESS,
    payload: data
});

export const updateCartItemFailure = (error) => ({
    type: UserActionTypes.UPDATE_CURRENT_USER_FAILURE,
    payload: error
});

export const updateItemQtyStart = (data) => ({
    type: UserActionTypes.UPDATE_ITEM_QTY_START,
    payload: data
});

export const updateItemQtySuccess = (data) => ({
    type: UserActionTypes.UPDATE_ITEM_QTY_SUCCESS,
    payload: data
});

export const updateItemQtyFailure = (error) => ({
    type: UserActionTypes.UPDATE_ITEM_QTY_FAILURE,
    payload: error
});

export const editUserStart = (data) => ({
    type: UserActionTypes.EDIT_USER_INFO_START,
    payload: data
});

export const editUserSuccess = (data) => ({
    type: UserActionTypes.EDIT_USER_INFO_SUCCESS,
    payload: data
});

export const editUserFailure = (error) => ({
    type: UserActionTypes.EDIT_USER_INFO_FAILURE,
    payload: error
});

export const verifiedEmailStart = (data) => ({
    type: UserActionTypes.VERIFIED_EMAIL_START,
    payload: data
});

export const verifiedEmailSuccess = (data) => ({
    type: UserActionTypes.VERIFIED_EMAIL_SUCCESS,
    payload: data
});

export const verifiedEmailFailure = (error) => ({
    type: UserActionTypes.VERIFIED_EMAIL_FAILURE,
    payload: error
});

export const sendResetStart = (data) => ({
    type: UserActionTypes.SEND_RESET_LINK_START,
    payload: data
});

export const sendResetSuccess = (data) => ({
    type: UserActionTypes.SEND_RESET_LINK_SUCCESS,
    payload: data
});

export const sendResetFailure = (error) => ({
    type: UserActionTypes.SEND_RESET_LINK_FAILURE,
    payload: error
});

export const changePasswordStart = (data) => ({
    type: UserActionTypes.CHANGE_PASSWORD_START,
    payload: data
});

export const changePasswordSuccess = (data) => ({
    type: UserActionTypes.CHANGE_PASSWORD_SUCCESS,
    payload: data
});

export const changePasswordFailure = (error) => ({
    type: UserActionTypes.CHANGE_PASSWORD_FAILURE,
    payload: error
});

export const clearMessage = () => ({
    type: UserActionTypes.CLEAR_MESSAGE
});

export const sendVerificationStart = (data) => ({
    type: UserActionTypes.SEND_VERIFY_START,
    payload: data
});

export const sendVerificationSuccess = (data) => ({
    type: UserActionTypes.SEND_VERIFY_SUCCESS,
    payload: data
});

export const sendVerificationFailure = (error) => ({
    type: UserActionTypes.SEND_VERIFY_FAILURE,
    payload: error
});
