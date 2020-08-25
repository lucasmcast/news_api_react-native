import React from 'react'
import {Header}  from "./Header";
import {Picture}  from "./Picture";
import {View} from "react-native"
import styles from './styles'
import { Footer } from './Footer';

function Card(props) {
    return (
        <View style={styles.card}>
            <Header title={props.item.title}/>
            <Picture descriptioPicture={props.item.source.name} urlPicture={props.item.urlToImage}/>
            <Footer isFavorite={props.isFavorite} item={props.item}></Footer>
        </View>
    )
}

export default Card;