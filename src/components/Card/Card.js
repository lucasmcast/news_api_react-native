import React, {Fragment} from 'react'
import  {Header}  from "./Header";
import  {Picture}  from "./Picture";
import {View} from "react-native"
import styles from './styles'
import { Footer } from './Footer';

function Card({item}) {
    return (
        <View style={styles.card}>
            <Header title={item.title}/>
            <Picture descriptioPicture={item.source.name} urlPicture={item.urlToImage}/>
            <Footer></Footer>
        </View>
    )
}

export default Card;