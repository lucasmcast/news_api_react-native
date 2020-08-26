import { ADD_FAVORITE, DEL_NEWS_FAVORITES} from '../actionsTypes'

const initialState = {
    newsFavorites: []
}

export default function(state = initialState, action){
    switch(action.type){
        case ADD_FAVORITE:{
            const newsFavorite = action.payload.news
            return {...state, newsFavorites: [...state.newsFavorites, newsFavorite]}
        }
        case DEL_NEWS_FAVORITES:{
            const index = action.payload.index
            const arrayNewsFavorites = [...state.newsFavorites]
            arrayNewsFavorites.splice(index, 1)
            return {...state, newsFavorites: arrayNewsFavorites}
        }
        default:
            return state;
    }
}