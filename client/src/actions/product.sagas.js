import axios from 'axios';
import ProductActionTypes from './product.type';
import {takeLatest, put, all, call} from 'redux-saga/effects';
import { PRODUCT_SERVER } from '../utils/misc';
import {fetchArrivalSuccess, fecthArrivalFailure, getProductDetailSuccess, getProductDetailFailure,
    getProductsSuccess, getProductsFailure, fetchByBrandSuccess, fetchByBrandFailure, clearProductSuccess, clearProductFailure,
    getRandomProductSuccess, getRandomProductFailure, getAllProductsByBrandSuccess, getAllProductsByBrandFailure, getFilterProductFailure,
    getFilterProductSuccess, getModelsSuccess, getModelsFailure, getBrandNameFailure, getBrandNameSuccess
} from './productActions';


const putProductByArrival = async () => {
    let results;
    await axios.get(`${PRODUCT_SERVER}/articles?sortBy=createdAt&order=desc&limit=9`)
    .then(response => results = response.data);
    return results;
}

export function* getProductByArrival(){
    try {
        const arrivalMap = yield call(putProductByArrival)
        yield put(fetchArrivalSuccess(arrivalMap));
    } catch(error) {
        yield fecthArrivalFailure(error.message)
    }
    
};

export function* fetchArrivalStart() {
    yield takeLatest(
        ProductActionTypes.FETCH_ARRIVAL_START,
        getProductByArrival
    )
};

const putGetProducts = async () => {
    let results;
    await axios.get(`${PRODUCT_SERVER}/articles`)
    .then(response => results = response.data);
    return results;
}

export function* getProducts(){
    try {
        const products = yield call(putGetProducts)
        yield put(getProductsSuccess(products))
    } catch (error) {
        yield getProductsFailure(error.message)
    }
};

export function* onGetProductStart() {
    yield takeLatest(
        ProductActionTypes.GET_PRODUCTS_START,
        getProducts
    )
};

const putGetProductByBrand = async (id) => {
    let results;
    await axios.get(`${PRODUCT_SERVER}/articles_by_brand?brand=${id}&sortBy=price&limit=6`)
    .then(response => results = response.data);
    return results;
}

export function* getProductByBrand({payload: id}){
    try {
        const brandMap = yield call(putGetProductByBrand, id)
        yield put(fetchByBrandSuccess(brandMap))
    } catch (error) {
        yield fetchByBrandFailure(error.message)
    }
};

export function* fetchByBrandStart() {
    yield takeLatest(
        ProductActionTypes.FETCH_BY_BRAND_START,
        getProductByBrand
    )
};

const putGetProductDetails = async (id) => {
    let results;
    await axios.get(`${PRODUCT_SERVER}/articles_by_id?id=${id}&type=single`)
    .then(response => results = response.data[0]);
    return results;
}

export function* getProductDetails({payload: id}){
    try{
        const detailMap = yield call(putGetProductDetails, id) 
        yield put(getProductDetailSuccess(detailMap))
    } catch (error) {
        yield getProductDetailFailure(error.message)
    }
}

export function* getProductDetailStart() {
    yield takeLatest(
        ProductActionTypes.GET_PRODUCT_DETAIL_START,
        getProductDetails
    )
}

export function* clearProduct({payload: clearArray}) {
    try {
        yield put(clearProductSuccess(clearArray))
    } catch (error) {
        yield clearProductFailure(error.message)
    }
}

export function* clearProductStart() {
    yield takeLatest(
        ProductActionTypes.CLEAR_PRODUCT_START,
        clearProduct
    )
}

const putGetRandomProd = async () => {
    let results;
    await axios.get(`${PRODUCT_SERVER}/articles_random`)
    .then(response => results = response.data);
    return results;
}

export function* getRandomProd() {
    try {
        const randomArray = yield call(putGetRandomProd)
        yield put(getRandomProductSuccess(randomArray));
    } catch (error) {
        yield getRandomProductFailure(error.message)
    }
}


export function* getRandomProductStart() {
    yield takeLatest(
        ProductActionTypes.GET_RANDOM_PRODUCT_START,
        getRandomProd
    )
}

const putGetAllProductsBrand = async (id) => {
    let results;
    await axios.get(`${PRODUCT_SERVER}/articles_by_brand?brand=${id}&sortBy=createdAt`)
    .then(response => results = response.data);
    return results;
}

export function* getAllProductsBrand({payload: id}) {
    try {
        const allBrandMap = yield call(putGetAllProductsBrand, id)
        yield put(getAllProductsByBrandSuccess(allBrandMap))

    } catch (error) {
        yield getAllProductsByBrandFailure(error.message)
    }
}

export function* getAllProductsBrandStart() {
    yield takeLatest(
        ProductActionTypes.GET_ALL_PRODUCTS_BY_BRAND_START,
        getAllProductsBrand
    )
}

const putGetFilterProduct = async (data) => {
    let results;
    const newData = {
        'limit': data.payload.limit,
        'skip': data.payload.skip,
        'filters': data.payload.filters
    }
    await axios.post(`${PRODUCT_SERVER}/shop?brand=${data.payload.id}`,newData)
    .then(response => {
        results = [
            ...response.data.articles
        ] 
    });
    return results;
}

export function* getFilterProduct(data) {
    try {
        
        const dataMap = yield call(putGetFilterProduct, data)
        yield put(getFilterProductSuccess(dataMap))
    } catch (error) {
        yield getFilterProductFailure(error.message)
    }
}

export function* getFilterProductStart() {
    yield takeLatest(
        ProductActionTypes.GET_FILTER_PRODUCT_START,
        getFilterProduct
    )
}

const putGetModels = async (id) => {
    let results;
    await  axios.get(`${PRODUCT_SERVER}/articles_by_model?brand=${id}&sortBy=model`)
    .then(response => results = response.data);
    return results;
}

export function* getModels({payload: id}) {
    try {
        const modelArray = yield call(putGetModels, id)
        yield put(getModelsSuccess(modelArray))
    } catch (error) {
        yield getModelsFailure(error.message)
    }
}

export function* getModelsStart() {
    yield takeLatest(
        ProductActionTypes.GET_MODELS_START,
        getModels
    )
}

const putGetBrandName = async (id) => {
    let results;
    await  axios.get(`${PRODUCT_SERVER}/brand_by_id?id=${id.payload}`)
    .then(response => results = response.data);
    return results;
}

export function* getBrandName(id){
    try {
        const brandName = yield call(putGetBrandName, id)
        yield put(getBrandNameSuccess(brandName))
    } catch (error) {
        yield getBrandNameFailure(error)
    }
}

export function* getBrandNameStart() {
    yield takeLatest(
        ProductActionTypes.GET_BRAND_NAME_START,
        getBrandName
    )
}

export function* productSagas() {
    yield(all([
        call(fetchArrivalStart),
        call(onGetProductStart),
        call(fetchByBrandStart),
        call(getProductDetailStart),
        call(clearProductStart),
        call(getRandomProductStart),
        call(getAllProductsBrandStart),
        call(getFilterProductStart),
        call(getModelsStart),
        call(getBrandNameStart)
    ]))
};