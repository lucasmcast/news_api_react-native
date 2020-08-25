import React, { useState, useEffect } from 'react';
import { View, TextInput } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';
import { getNews } from '../../redux/actions'
import { Button } from "../Button";
import EndPoint from '../../models/EndPoint';
import getDataAPI from '../../dao/newsDAO'

const getData = (endPoint) => {
    const news = getDataAPI(endPoint);
    return news;
}

function ContainerSearch(props) {
    const [search, setSearch] = useState("");

    return (
        <View style={styles.containerSearch}>
            <TextInput
                style={styles.inputSearch}
                onChangeText={text => {
                    setSearch(text)
                }}
                placeholder={"Pesquisar por assunto..."}
                value={search}
            />
            <Button
                onClick={event => {

                    let query = `q=${search}&language=pt`;
                    let functionSearch = "everything";

                    props.getNews(functionSearch, query)
                    setSearch("")

                }}

                color={"#01579B"}
                name={"Buscar"} />
        </View>
    )
}


export default connect(null, { getNews })(ContainerSearch);