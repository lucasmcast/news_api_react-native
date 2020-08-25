import {combineReducers} from 'redux';
import rootNews from './rootNews'
import rootFavoritesNews from './rootFavoritesNews'

export default combineReducers({rootNews, rootFavoritesNews});