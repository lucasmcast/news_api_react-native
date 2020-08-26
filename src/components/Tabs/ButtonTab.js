import { TouchableOpacity, Text } from "react-native";
import React from 'react';
import styles from './styles';
import { connect } from 'react-redux'
import { changeTypeNews } from '../../redux/actions'

/**
 * favorite news button action on the tabbar
 * @param {Function} dispatch - function dispatch by redux
 */
const handleClickFavorites = (dispatch) => (event) => {
    dispatch(true)
}

/**
 * news button action highlighted in tabbar
 * @param {Function} dispatch - function dispatch by redux
 */
const handleClickDestaques = (dispatch) => (event) => {
    dispatch(false)
}

function ButtonTab(props) {
    let onClick;
    let dispatch;

    if (props.variant === "favoritas") {
        onClick = handleClickFavorites;
        dispatch = props.changeTypeNews;
    } else if (props.variant === "destaques") {
        onClick = handleClickDestaques;
        dispatch = props.changeTypeNews;
    }
    return (
        <TouchableOpacity
            onPress={onClick(dispatch)}
            style={[styles.buttonContainer, props.color ? { backgroundColor: props.color } : { backgroundColor: "#006064" }]}>
            <Text style={styles.buttonText}>{props.name ? props.name : "Button"}</Text>
        </TouchableOpacity>
    )
}

const mapStateToProps = (state) => {
    return (
        {
            isFavorite: state.rootNews.isFavorites
        }
    )
}

export default connect(mapStateToProps, { changeTypeNews })(ButtonTab);