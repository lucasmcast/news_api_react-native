/**
 * Actions for redux
 * @author Lucas Martins de Castro <lucas.martins.c03@gmail.com>
 * @since 1.0.0
 */
import 
{
    GET_NEWS, 
    ADD_FAVORITE, 
    CHANGE_TYPE_NEWS, 
    CHANGE_VISIBLE_MODAL,
    SHOW_NEWS

} from './actionsTypes'

/**
 * Send the request to redux-sagas
 * @param {EndPoint} functionSearch - url search function
 * @param {String} query - query settings in api search
 */
export const getNews = (functionSearch, query) => ({
    type: GET_NEWS,
    payload: {
        functionSearch, query
    }
})

/**
 * Send the news object for redux
 * @param {Object} news - returned Object by API request 
 */
export const showNews = (news) => ({
    type: SHOW_NEWS,
    payload: {
        news
    }
})

/**
 * 
 * @param {Object} news - returned Object by favorite action 
 */
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