import 
{
    GET_NEWS, 
    ADD_FAVORITE, 
    CHANGE_TYPE_NEWS, 
    CHANGE_VISIBLE_MODAL,
    SHOW_NEWS

} from './actionsTypes'

export const getNews = (endpoint, query) => ({
    type: GET_NEWS,
    payload: {
        endpoint, query
    }
})

export const showNews = (news) => ({
    type: SHOW_NEWS,
    payload: {
        news
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