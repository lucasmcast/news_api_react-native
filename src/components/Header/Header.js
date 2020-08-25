import React from 'react'
import { View, Image, TouchableOpacity, Text } from 'react-native';
import {changeVisibleModal} from '../../redux/actions'
import {connect} from 'react-redux'
import styles from './styles'
import PickerCountry from '../PickerCountry/PickerCountry';

function Header(props) {
    return (
        <View style={styles.containerHeader}>
            <Image
                style={styles.imageHeader}
                source={require('../../../res/img/header.png')}
            ></Image>
            {/* <TouchableOpacity
                onPress={event =>{
                    props.changeVisibleModal(true)
                }}
                >
                <Text style={styles.textCountry}>País</Text>
            </TouchableOpacity> */}
            <PickerCountry></PickerCountry>
            <TouchableOpacity
                style={styles.menuHeader}
                >
                <Image
                    style={styles.imageMenu}
                    source={require('../../../res/img/menu.png')}
                ></Image>
            </TouchableOpacity>
            
        </View>
    )
}

export default connect(null, {changeVisibleModal})(Header);