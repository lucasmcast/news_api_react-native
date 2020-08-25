import 
{
    GET_NEWS, 
    ADD_FAVORITE, 
    CHANGE_TYPE_NEWS, 
    CHANGE_VISIBLE_MODAL

} from './actionsTypes'

export const getNews = newsAPI => ({
    type: GET_NEWS,
    payload: {
        newsAPI
    }
})

export const addFavorite = news => ({
    type: ADD_FAVORITE,
    payload:{
        news
    }
})

export const changeTypeNews = isFavorite => ({
    type: CHANGE_TYPE_NEWS,
    payload:{
        isFavorite
    }
});

export const changeVisibleModal = isVisible => ({
    type: CHANGE_VISIBLE_MODAL,
    payload:{
        isVisible
    }
});