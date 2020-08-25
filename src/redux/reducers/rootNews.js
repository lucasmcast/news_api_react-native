import {GET_NEWS, CHANGE_TYPE_NEWS, CHANGE_VISIBLE_MODAL} from '../actionsTypes'

const initialState = {
    news: [],
    isFavorite:false,
    visibleModalCountry: false
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_NEWS:{
            const newsAPI = action.payload.newsAPI;
            return {
                ...state, news: newsAPI, 
                isFavorite:false, 
                visibleModalCountry: false
            }
        }
        case CHANGE_TYPE_NEWS:{
            const isFavorite = action.payload.isFavorite;
            return {...state, isFavorite: isFavorite}
        }
        case CHANGE_VISIBLE_MODAL:{
            const visible = action.payload.isVisible
            return{...state, visibleModalCountry: visible}
        }
        default:
            return state;
    }
}