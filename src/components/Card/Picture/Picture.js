import {Image, Text} from 'react-native'
import React, {Fragment} from 'react'
import styles from "./styles"

function Picture({descriptioPicture, urlPicture}){
    //console.log(descriptioPicture)
    return(
        <Fragment>
            <Image
                source={{uri: urlPicture}}
                style={styles.picture}
            />
            <Text style={styles.description}>{descriptioPicture ? descriptioPicture : ""}</Text>
        </Fragment>
    )
}

export default Picture;