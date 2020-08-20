import React, { Fragment } from 'react';
import {
    Text,
    Image,
    View
} from "react-native";

import styles from "./styles"

const Header = ({ title}) => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

export default Header;