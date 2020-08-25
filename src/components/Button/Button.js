import {TouchableOpacity, Text } from "react-native";
import React from 'react';
import styles from './styles';
import {connect} from 'react-redux'
import {addFavorite} from '../../redux/actions'

let handleClickButtonFavorite = (task, dispatch) => event =>{
    dispatch(task)
}

let handleClickButtonModal = (task) => event =>{
    console.log("Modal")
}

let handleClickButtonDelete = (task) => event =>{
    console.log("Apagou")
}

function Button(props){
    let onClick;
    let dispatch;
    
    if(props.variant === "favorite"){
        onClick = handleClickButtonFavorite
        dispatch = props.addFavorite
    }else if(props.variant === "modal"){
        onClick = handleClickButtonModal
    }else if(props.variant === "delete"){
        onClick = handleClickButtonDelete
    }
    return(
        <TouchableOpacity
            onPress={props.variant ? onClick(props.item, dispatch) : props.onClick } 
            style={[styles.buttonContainer,  props.color ? {backgroundColor: props.color}: {backgroundColor:"#006064"}]}>
            <Text style={styles.buttonText}>{props.name ? props.name : "Button"}</Text>
        </TouchableOpacity>
    )
}

export default connect(null, {addFavorite})(Button);