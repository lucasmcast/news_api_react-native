import React, {useState, Fragment} from 'react'
import {View, Text} from 'react-native'
import styles from './styles'
import { Button } from '../../Button'
import { ModalNews } from '../ModalNews';

function Footer(props) {
    const  [modalVisible, setModalVisible] = useState(false);
    return(
        <Fragment>
            <ModalNews 
            onClickHide={event => {setModalVisible(false)}} 
            modalVisible={modalVisible}
            item={props.item}
            >
            </ModalNews>
        <View style={styles.container}>
            <Button 
                onClick={() =>{setModalVisible(true)}}
                color={"#01579B"} 
                name={"Ver Mais"}/>
            {props.isFavorite 
            ?  <Button index={props.index} item={props.item} variant={"delete"} color={"#B71C1C"} name={"Apagar"}/>
            :  <Button item={props.item} variant={"favorite"} color={"#66BB6A"} name={"Favoritar"}/>
            }
            
        </View>
        </Fragment>
    ) 
}

export default Footer;