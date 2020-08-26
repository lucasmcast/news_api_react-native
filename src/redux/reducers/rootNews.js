import {SHOW_NEWS, CHANGE_TYPE_NEWS} from '../actionsTypes'

const initialState = {
    news: [],
    isFavorite:false,
}

export default function(state = initialState, action){
    switch(action.type){
        case SHOW_NEWS:{
            const newsAPI = action.payload.news
            return {
                ...state, news: newsAPI, 
                isFavorite:false
            }
        }
        case CHANGE_TYPE_NEWS:{
            const isFavorite = action.payload.isFavorite;
            return {...state, isFavorite: isFavorite}
        }
        default:
            return state;
    }
}