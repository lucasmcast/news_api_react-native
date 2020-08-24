import React from 'react'
import {View, Text} from 'react-native'
import styles from './styles'
import { Button } from '../../Button'

function Footer(props) {
    return(
        <View style={styles.container}>
            <Button item={props.item} variant={"modal"} color={"#01579B"} name={"Ver Mais"}/>
            <Button item={props.item} variant={"favorite"} color={"#B71C1C"} name={"Favoritar"}/>
        </View>
    ) 
}

export default Footer;