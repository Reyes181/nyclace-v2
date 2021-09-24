import {call, all} from 'redux-saga/effects';

import {userSagas} from '../actions/user.sagas';
import {productSagas} from '../actions/product.sagas';

export default function* rootSaga() {
    yield all([call(userSagas), call(productSagas)])
}