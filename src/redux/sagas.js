/**
 * @author Lucas Martins de Castro <lucas.martins.c03@gmail.com>
 * @since 1.0.0
 * 
 * File model searched in the redux-sagas documentation
 * @see https://redux-saga.js.org/
 */

import {call, put, takeEvery} from 'redux-saga/effects'
import getDataAPI  from '../dao/newsDAO'
import EndPoint from '../models/EndPoint'
import {GET_NEWS} from './actionsTypes'
import {showNews} from './actions'

/**
 * Has API Search by action GET_NEWS
 * @param {Object} action - redux-sagas action for API search
 */
function* fetchNews(action){

    let endPoint = new EndPoint(action.payload.functionSearch, action.payload.query)
    
    try{
        const news = yield call(getDataAPI, endPoint);
        yield put(showNews(news));
    }catch(e){
        yield console.log(e)
    }
}

function* mySaga() {
    yield takeEvery(GET_NEWS, fetchNews);
}

export default mySaga;
