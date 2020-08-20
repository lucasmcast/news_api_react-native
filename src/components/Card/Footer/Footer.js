import React from 'react'
import {View, Text} from 'react-native'
import styles from './styles'
import { Button } from './Button'

function Footer({source}) {
    return(
        <View style={styles.container}>
            <Button  color={"#01579B"} name={"Ver Mais"}/>
            <Button  color={"#B71C1C"}name={"Favoritar"}/>
        </View>
    ) 
}

export default Footer;