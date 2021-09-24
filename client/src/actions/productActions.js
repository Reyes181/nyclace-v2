import axios from 'axios';
import ProductActionTypes from './product.type';

import { PRODUCT_SERVER } from '../utils/misc';

export function getProducts(){
    const request = axios.get(`${PRODUCT_SERVER}/articles`)
                    .then(response => response.data);
    return {
        type: ProductActionTypes.GET_PRODUCTS,
        payload: request
    }
}

export function getProductByArrival(){
    const request = axios.get(`${PRODUCT_SERVER}/articles?sortBy=createdAt&order=desc&limit=9`)
                    .then(response => response.data);
    return {
        type: ProductActionTypes.GET_PRODUCTS_BY_ARRIVAL,
        payload: request
    }
}

export function getProductsByBrand(id){
    const request = axios.get(`${PRODUCT_SERVER}/articles_by_brand?brand=${id}&sortBy=price&limit=6`)
                    .then(response => response.data);
    return {
        type: ProductActionTypes.GET_PRODUCTS_BY_BRAND,
        payload: request
    }
}

// export function getAllProductsByBrand(id){
//     const request = axios.get(`${PRODUCT_SERVER}/articles_by_brand?brand=${id}&sortBy=createdAt`)
//                     .then(response => response.data);
//     return {
//         type: ProductActionTypes.GET_ALL_PRODUCTS_BY_BRAND,
//         payload: request
//     }
// }

export function getProductDetail(id){

    const request = axios.get(`${PRODUCT_SERVER}/articles_by_id?id=${id}&type=single`)
    .then(response=>{
        return response.data[0]
    });

    return {
        type: ProductActionTypes.GET_PRODUCT_DETAIL,
        payload: request
    }

}

// export function clearProductDetail(){
//     return {
//         type: ProductActionTypes.CLEAR_PRODUCT_DETAIL,
//         payload: ''
//     }
// }

export function getRandomProduct(){
    const request = axios.get(`${PRODUCT_SERVER}/articles_random`)
                    .then(response => response.data);
    return {
        type: ProductActionTypes.GET_RANDOM_PRODUCT,
        payload: request
    }
}

export function getModels(id){
    const request = axios.get(`${PRODUCT_SERVER}/articles_by_model?brand=${id}&sortBy=model`)
                    .then(response => response.data);
                    
    return {
        type: ProductActionTypes.GET_MODELS,
        payload: request
    }
}

export function getProductsToShop(id, skip, limit, filters = [], previousState = []){
    const data = {
        limit,
        skip,
        filters
    }
    const request = axios.post(`${PRODUCT_SERVER}/shop?brand=${id}`,data)
                    .then(response => {
                        let newState = [
                            ...response.data.articles
                        ]
                    
                        return {
                            size: response.data.size,
                            articles: newState
                        }
                    });
    return {
        type: ProductActionTypes.GET_PRODUCTS_TO_SHOP,
        payload: request
    }
};

export const fetchArrivalStart = () => ({
    type: ProductActionTypes.FETCH_ARRIVAL_START
});

export const fetchArrivalSuccess = (arrivalMap) => ({
    type: ProductActionTypes.FETCH_ARRIVAL_SUCCESS,
    payload: arrivalMap
});

export const fecthArrivalFailure = (errorMessage) => ({
    type: ProductActionTypes.FETCH_ARRIVAL_FAILURE,
    payload: errorMessage
});

export const getProductsStart = () => ({
    type: ProductActionTypes.GET_PRODUCTS_START
});

export const getProductsSuccess = (products) => ({
    type: ProductActionTypes.GET_PRODUCTS_SUCCESS,
    payload: products
});

export const getProductsFailure = (errorMessage) => ({
    type: ProductActionTypes.GET_PRODUCTS_FAILURE,
    payload: errorMessage
});

export const fetchByBrandStart = (id) => ({
    type: ProductActionTypes.FETCH_BY_BRAND_START,
    payload: id
});

export const fetchByBrandSuccess = (brandMap) => ({
    type: ProductActionTypes.FETCH_BY_BRAND_SUCCESS,
    payload: brandMap
});

export const fetchByBrandFailure = (errorMessage) => ({
    type: ProductActionTypes.FETCH_BY_BRAND_FAILURE,
    payload: errorMessage
});

export const getProductDetailStart = (id) => ({
    type: ProductActionTypes.GET_PRODUCT_DETAIL_START,
    payload: id
});

export const getProductDetailSuccess = (detailMap) => ({
    type: ProductActionTypes.GET_PRODUCT_DETAIL_SUCCESS,
    payload: detailMap
});

export const getProductDetailFailure = (errorMessage) => ({
    type: ProductActionTypes.GET_PRODUCT_DETAIL_FAILURE,
    payload: errorMessage
});

export const clearProductStart = (clearArray) => ({
    type: ProductActionTypes.CLEAR_PRODUCT_START,
    payload: clearArray
});

export const clearProductSuccess = (clearArray) => ({
    type: ProductActionTypes.CLEAR_PRODUCT_SUCCESS,
    payload: clearArray
});

export const clearProductFailure = (errorMessage) => ({
    type: ProductActionTypes.CLEAR_PRODUCT_FAILURE,
    payload: errorMessage
});

export const getRandomProductStart = () => ({
    type: ProductActionTypes.GET_RANDOM_PRODUCT_START
});

export const getRandomProductSuccess = (randomArray) => ({
    type: ProductActionTypes.GET_RANDOM_PRODUCT_SUCCESS,
    payload: randomArray
});

export const getRandomProductFailure = (errorMessage) => ({
    type: ProductActionTypes.GET_RANDOM_PRODUCT_FAILURE,
    payload: errorMessage
});

export const getAllProductsByBrandStart = (id) => ({
    type: ProductActionTypes.GET_ALL_PRODUCTS_BY_BRAND_START,
    payload: id
});

export const getAllProductsByBrandSuccess = (allBrandMap) => ({
    type: ProductActionTypes.GET_ALL_PRODUCTS_BY_BRAND_SUCCESS,
    payload: allBrandMap
});

export const getAllProductsByBrandFailure = (errorMessage) => ({
    type: ProductActionTypes.GET_ALL_PRODUCTS_BY_BRAND_FAILURE,
    payload: errorMessage
});

export const getFilterProductStart = (data) => ({
    type: ProductActionTypes.GET_FILTER_PRODUCT_START,
    payload: data
});

export const getFilterProductSuccess = (dataMap) => ({
    type: ProductActionTypes.GET_FILTER_PRODUCT_SUCCESS,
    payload: dataMap
});

export const getFilterProductFailure = (errorMessage) => ({
    type: ProductActionTypes.GET_FILTER_PRODUCT_FAILURE,
    payload: errorMessage
});

export const getModelsStart = (id) => ({
    type: ProductActionTypes.GET_MODELS_START,
    payload: id
});

export const getModelsSuccess = (modelArray) => ({
    type: ProductActionTypes.GET_MODELS_SUCCESS,
    payload: modelArray
});

export const getModelsFailure = (errorMessage) => ({
    type: ProductActionTypes.GET_MODELS_FAILURE,
    payload: errorMessage
});

export const getBrandNameStart = (id) => ({
    type: ProductActionTypes.GET_BRAND_NAME_START,
    payload: id
});

export const getBrandNameSuccess = (data) => ({
    type: ProductActionTypes.GET_BRAND_NAME_SUCCESS,
    payload: data
});

export const getBrandNameFailure = (error) => ({
    type: ProductActionTypes.GET_BRAND_NAME_FAILURE,
    payload: error
});