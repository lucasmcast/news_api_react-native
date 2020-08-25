import {call, put, takeE} from 'redux-saga/effects'
import { getDataAPI } from '../dao/newsDAO'
import EndPoint from '../models/EndPoint'
import {GET_NEWS} from './actionsTypes'

function* fetchNews(action){
    let endPoint = new EndPoint()
    try{
        const news = yield call(getDataAPI(endPoint), action.payload.news);
        yield put({type: GET_NEWS, news: news});
    }catch(e){
        yield console.log("Deu Erro")
    }
}

function* mySaga() {
    yield takeEvery(GET_NEWS, fetchNews);
}

export default mySaga;
