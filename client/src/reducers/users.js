import UserActionTypes from '../actions/user.types';

const INITIAL_STATE = {
    currentUser: {
        isAuth: false,
        cart: []
    },
    userLogin: false,
    purchasedItems: [{
        porder: '',
        dataOfPurchase: '',
        orderTotal: '',
        items: []
    }],
    purchaseSuccess: false,
    userVerified: null,
    isLoading: false,
    message: null,
    error: null
}

const userReducer = (state = INITIAL_STATE, action) => {
    
    switch(action.type){
        case UserActionTypes.CLEAR_MESSAGE:
            return {
                ...state,
                message: null,
                error: null
            }
        case UserActionTypes.SIGN_UP_START:
            return {
                ...state,
                error: null,
                isLoading: true,
                currentUser: {
                    cart: [],
                    isAuth: false
                }
            };
        case UserActionTypes.SIGN_UP_SUCCESS:
            return {
                ...state, 
                error: null,
                userLogin: action.payload,
                isLoading: false
            }
        case UserActionTypes.LOGOUT_START:
            return {
                ...state,
                isLoading: true
                
            };
        case UserActionTypes.EMAIL_SIGN_IN_START:
            return {
                ...state,
                error: null,
                isLoading: true
            };
        case UserActionTypes.SIGN_IN_SUCCESS:
            return {
                ...state,
                currentUser: {
                    ...action.payload,
                    isAuth: true
                },
                isLoading: false,
                error: null
            };
        case UserActionTypes.CHECK_USER_SESSION:
            return {
                ...state,
                userLogin: false,
                userVerified: null,
                message: null,
                isLoading: true
            }
        case UserActionTypes.AUTH_SUCCESS: 
            return {
                ...state,
                currentUser: action.payload,
                isLoading: false,
                error: null
            }
        case UserActionTypes.LOGOUT_SUCCESS:
            return {
                ...state,
                currentUser: {
                    ...action.payload
                },
                isLoading: false, 
                error: null
            }
        case UserActionTypes.USER_ADD_TO_CART_START: 
            return {
                ...state,
                isLoading: true
            }
        case UserActionTypes.USER_ADD_TO_CART_SUCCESS:
            return {
                ...state,
                isLoading: false,
                currentUser: action.payload,
                error: null
            }
        case UserActionTypes.USER_PRODUCT_PURCHASE_BY_CARD_START:
            return {
                ...state,
                isLoading: true
            }
        case UserActionTypes.USER_PRODUCT_PURCHASE_BY_CARD_SUCCESS: 
            return {
                ...state,
                currentUser: {
                    isAuth: true,
                    ...action.payload.doc
                },
                purchasedItems: action.payload.orderConfirmation,
                isLoading: false,
                purchaseSuccess: true,
                error: null
            }
        case UserActionTypes.CLEAR_PURCHASE_ORDER_START:
            return {
                ...state,
                isLoading: true
            }
        case UserActionTypes.CLEAR_PURCHASE_ORDER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                purchasedItems: action.payload,
                purchaseSuccess: false
            }
        case UserActionTypes.UPDATE_CART_ITEM_START:
            return {
                ...state,
                isLoading: true
            }
        case UserActionTypes.UPDATE_CART_ITEM_SUCCESS:
            return {
                ...state,
                currentUser: {
                    ...state.currentUser,
                    ...action.payload.doc
                },
                isLoading: false
            }
        case UserActionTypes.UPDATE_ITEM_QTY_START:
            return {
                ...state,
                isLoading: true
            }
        case UserActionTypes.UPDATE_ITEM_QTY_SUCCESS:
            return {
                ...state,
                currentUser: {
                    isAuth: true,
                    ...action.payload.doc
                },
                isLoading: false
            }
        case UserActionTypes.EDIT_USER_INFO_START:
            return {
                ...state,
                isLoading: true
            }
        case UserActionTypes.EDIT_USER_INFO_SUCCESS:
            return {
                ...state,
                isLoading: false,
                currentUser: action.payload.user,
                
            }
        case UserActionTypes.VERIFIED_EMAIL_START:
            return {
                ...state,
                userVerified: false,
                isLoading: true,
                message: null
            }
        case UserActionTypes.VERIFIED_EMAIL_SUCCESS:
            return {
                ...state,
                userVerified: action.payload.success,
                isLoading: false,
                message: action.payload
            }
        case UserActionTypes.SEND_RESET_LINK_START:
            return {
                ...state,
                message: null,
                isLoading: true
            }
        case UserActionTypes.SEND_RESET_LINK_SUCCESS:
            return {
                ...state,
                isLoading: false,
                message: action.payload
            }
        case UserActionTypes.CHANGE_PASSWORD_START:
            return {
                ...state,
                isLoading: true,
                message: null
            }
        case UserActionTypes.CHANGE_PASSWORD_SUCCESS:
            return {
                ...state,
                isLoading: false,
                message: action.payload
            }
        case UserActionTypes.SEND_VERIFY_START:
            return {
                ...state,
                isLoading: true,
                message: null
            }
        case UserActionTypes.SEND_VERIFY_SUCCESS:
            return {
                ...state,
                isLoading: false,
                message: action.payload
            }
        case UserActionTypes.CHANGE_PASSWORD_FAILURE:
            return {
                ...state,
                isLoading: false,
                message: action.payload
            }
        case UserActionTypes.SEND_RESET_LINK_FAILURE:
            return {
                ...state,
                isLoading: false,
                message: action.payload
            }
        case UserActionTypes.SIGN_UP_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }
        case UserActionTypes.VERIFIED_EMAIL_FAILURE:
            return {
                ...state,
                isLoading: false,
                userVerified: action.payload.success,
                message: action.payload
            }
        case UserActionTypes.SEND_VERIFY_FAILURE:
            return {
                ...state,
                isLoading: false,
                message: action.payload
            }
        case UserActionTypes.SIGN_IN_FAILURE:
        case UserActionTypes.AUTH_FAILURE:
        case UserActionTypes.LOGOUT_FAILURE:
        case UserActionTypes.USER_ADD_TO_CART_FAILURE:
        case UserActionTypes.USER_PRODUCT_PURCHASE_BY_CARD_FAILURE:
        case UserActionTypes.CLEAR_PURCHASE_ORDER_FAILURE:
        case UserActionTypes.UPDATE_CART_ITEM_FAILURE:
        case UserActionTypes.UPDATE_ITEM_QTY_FAILURE:
        case UserActionTypes.EDIT_USER_INFO_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }
        default:
            return state
    }
}

export default userReducer;