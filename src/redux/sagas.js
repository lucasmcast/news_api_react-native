import {call, put, takeEvery} from 'redux-saga/effects'
import getDataAPI  from '../dao/newsDAO'
import EndPoint from '../models/EndPoint'
import {GET_NEWS, SHOW_NEWS} from './actionsTypes'
import {showNews} from './actions'

function* fetchNews(action){

    let endPoint = new EndPoint(action.payload.endpoint,action.payload.query)
    
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
