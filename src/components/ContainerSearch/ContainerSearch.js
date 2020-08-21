import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';
import { getNews } from '../../redux/actions'
import { Button } from "../Button";

const handleSearchNews = (input, dispach) => event =>{
    console.log(input.text)
}
function ContainerSearch(props){
    const [search, setSearch] = useState("")
    let dispach = props.getNews
    return(
        <View style={styles.containerSearch}>
            <TextInput 
            style={styles.inputSearch}
            onChangeText={text => {
                setSearch({text})
            }}
            />
            <Button 
                onClick={handleSearchNews(search, dispach)}
                color={"#01579B"} 
                name={"Buscar"} />
        </View>
    )
}

export default connect(null, {getNews})(ContainerSearch);