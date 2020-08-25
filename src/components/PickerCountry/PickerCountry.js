import React, { useState } from 'react'
import { View, Picker } from 'react-native'
import { getNews } from '../../redux/actions'
import { connect } from 'react-redux'
import styles from './styles'


function ModalCountry(props) {

    const [selectedValue, setSelectedValue] = useState("BSele");

    return (
        <View >
            <Picker
                style={styles.picker}
                selectedValue={selectedValue}
                onValueChange={(itemValue, itemIndex) => {

                    // let query = `country=${itemValue}`
                    // let endPoint = new EndPoint("top-headlines", query)

                    // let data = getData(endPoint);

                    // data.then((resp) => {
                    //     props.getNews(resp)
                    //     setSelectedValue(itemValue)
                    // })
                    
                    let query = `country=${itemValue}`
                    let endpoint = "top-headlines"
                    props.getNews(endpoint,query)

                    setSelectedValue(itemValue)

                }}
            >
                <Picker.Item label="Brasil" value="br" />
                <Picker.Item label="Estados Unidos" value="us" />
            </Picker>
        </View>


    );
}


export default connect(null, { getNews })(ModalCountry);