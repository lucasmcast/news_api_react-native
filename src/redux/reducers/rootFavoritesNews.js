import { ADD_FAVORITE} from '../actionsTypes'

const initialState = {
    newsFavorites: []
}

export default function(state = initialState, action){
    switch(action.type){
        case ADD_FAVORITE:{
            const newsFavorite = action.payload.news
            return {...state, newsFavorites: [...state.newsFavorites, newsFavorite]}
        }
        default:
            return state;
    }
}