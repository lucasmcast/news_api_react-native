import {GET_NEWS, ADD_FAVORITE} from './actionsTypes'

export const getNews = newsAPI => ({
    type: GET_NEWS,
    payload: {
        newsAPI
    }
})

export const addFavorite = news =>({
    type: ADD_FAVORITE,
    payload:{
        news
    }
})