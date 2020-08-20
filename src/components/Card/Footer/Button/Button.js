import {TouchableOpacity, Text } from "react-native";
import React from 'react';
import styles from './styles';

function Button(props){
    return(
        <TouchableOpacity 
            style={[styles.buttonContainer,  props.color ? {backgroundColor: props.color}: {backgroundColor:"#006064"}]}>
            <Text style={styles.buttonText}>{props.name ? props.name : "Button"}</Text>
        </TouchableOpacity>
    )
}
export default Button;