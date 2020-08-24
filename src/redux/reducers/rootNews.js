import {GET_NEWS, ADD_FAVORITE} from '../actionsTypes'

const initialState = {
    news: [],
    favorites: []
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_NEWS:{
            const newsAPI = action.payload.newsAPI;
            return {...state, news: newsAPI}
        }
        case ADD_FAVORITE:{
            const newsFavorite = action.payload.news
            const news = [...state.news]
            console.log(state.favorites)
            return{...state.news, news,
                ...state.favorites, favorites: [...state.favorites, newsFavorite]}
        }
        default:
            return state;
    }
}