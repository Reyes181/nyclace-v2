import ProductActionTypes from '../actions/product.type';

const INITIAL_STATE = {
    getProd: null,
    isFetching: false,
    byArrival: null,
    byBrand: null,
    getProdDetail: null,
    getRandom: null,
    brandProducts: null,
    brandModels: null,
    filteredProd: null,
    brandName: null,
    errorMessage: null
}

const productReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case ProductActionTypes.GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                getProd: action.payload
            }
        case ProductActionTypes.FETCH_ARRIVAL_SUCCESS:
            return {
                ...state,
                isFetching: false,
                byArrival: action.payload
            }
        case ProductActionTypes.FETCH_BY_BRAND_SUCCESS:
            return {
                ...state,
                isFetching: false,
                byBrand: action.payload
            }
        case ProductActionTypes.GET_PRODUCT_DETAIL_SUCCESS:
            return {
                ...state,
                isFetching: false,
                getProdDetail: action.payload
            }
        case ProductActionTypes.GET_RANDOM_PRODUCT_SUCCESS:
            return {
                ...state,
                isFetching: false,
                getRandom: action.payload
            }
        case ProductActionTypes.CLEAR_PRODUCT_SUCCESS:
            return {
                ...state,
                isFetching: false,
                getProdDetail: action.payload
            }
        case ProductActionTypes.GET_ALL_PRODUCTS_BY_BRAND_SUCCESS:
            return {
                ...state,
                isFetching: false,
                brandProducts: action.payload
            }
        case ProductActionTypes.GET_FILTER_PRODUCT_SUCCESS:
            return {
                ...state,
                isFetching: false,
                filteredProd: action.payload
            }
        case ProductActionTypes.GET_MODELS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                brandModels: action.payload
            }
        case ProductActionTypes.GET_BRAND_NAME_SUCCESS:
            return {
                ...state,
                isFetching: false,
                brandName: action.payload
            }
        case ProductActionTypes.GET_MODELS_START:
        case ProductActionTypes.GET_PRODUCTS_START:
        case ProductActionTypes.FETCH_ARRIVAL_START:
        case ProductActionTypes.FETCH_BY_BRAND_START:
        case ProductActionTypes.GET_PRODUCT_DETAIL_START:
        case ProductActionTypes.GET_RANDOM_PRODUCT_START:
        case ProductActionTypes.GET_ALL_PRODUCTS_BY_BRAND_START:
        case ProductActionTypes.GET_FILTER_PRODUCT_START:
        case ProductActionTypes.GET_BRAND_NAME_START:
            return {
                ...state,
                isFetching: true
            }
        case ProductActionTypes.FETCH_ARRIVAL_FAILURE:
        case ProductActionTypes.GET_PRODUCTS_FAILURE:
        case ProductActionTypes.FETCH_BY_BRAND_FAILURE:
        case ProductActionTypes.GET_PRODUCT_DETAIL_FAILURE:
        case ProductActionTypes.GET_RANDOM_PRODUCT_FAILURE:
        case ProductActionTypes.CLEAR_PRODUCT_FAILURE:
        case ProductActionTypes.GET_ALL_PRODUCTS_BY_BRAND_FAILURE:
        case ProductActionTypes.GET_BRAND_NAME_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }
        default:
            return state;
    }
}

export default productReducer;