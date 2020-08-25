import React from 'react';
import styles from './styles';
import {connect} from 'react-redux'
import { View } from 'react-native';
import ButtonTab from './ButtonTab';

function Tabs(props){
    return(
        <View style={styles.tabContainer}>
            <ButtonTab variant={"destaques"} color={"#01579B"} name={"DESTAQUES"}></ButtonTab>
            <ButtonTab variant={"favoritas"} color={"#01579B"} name={"FAVORITAS"}></ButtonTab>
        </View>
    )
}

export default Tabs;