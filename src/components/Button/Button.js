import {TouchableOpacity, Text } from "react-native";
import React from 'react';
import styles from './styles';
import {connect} from 'react-redux'
import {addFavorite, delFavorite, addNewsModal} from '../../redux/actions'

/**
 * clinck action of the favorite button.
 * @param {Object} news - API news
 * @param {Function} dispatch - function of dispatch redux
 */
let handleClickButtonFavorite = (news, dispatch) => event =>{
    dispatch(news)
}

/**
 * clinck action of the delete button.
 * @param {Object} news -  API news
 */
let handleClickButtonDelete = (news, dispatch, index) => event =>{
    dispatch(index)
}

function Button(props){
    let onClick;
    let dispatch;

    if(props.variant === "favorite"){
        onClick = handleClickButtonFavorite
        dispatch = props.addFavorite
    }else if(props.variant === "delete"){
        onClick = handleClickButtonDelete
        dispatch = props.delFavorite
    }
    return(
        <TouchableOpacity
            onPress={props.variant ? onClick(props.item, dispatch, props.index) : props.onClick } 
            style={[styles.buttonContainer,  props.color ? {backgroundColor: props.color}: {backgroundColor:"#006064"}]}>
            <Text style={styles.buttonText}>{props.name ? props.name : "Button"}</Text>
        </TouchableOpacity>
    )
}

export default connect(null, {addFavorite, delFavorite, addNewsModal})(Button);