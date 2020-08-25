import React from 'react'
import {View, Text} from 'react-native'
import styles from './styles'
import { Button } from '../../Button'

function Footer(props) {
    return(
        <View style={styles.container}>
            <Button item={props.item} variant={"modal"} color={"#01579B"} name={"Ver Mais"}/>
            {props.isFavorite 
            ?  <Button item={props.item} variant={"delete"} color={"#B71C1C"} name={"Apagar"}/>
            :  <Button item={props.item} variant={"favorite"} color={"#66BB6A"} name={"Favoritar"}/>
            }
            
        </View>
    ) 
}

export default Footer;