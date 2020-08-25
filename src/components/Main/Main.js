import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getNews } from '../../redux/actions'
import {ContainerNews} from '../ContainerNews';
import { ContainerSearch } from '../ContainerSearch';
import { View } from 'react-native'
import { Tabs } from '../Tabs';

function Main(props) {

    let functionSearch = "top-headlines"
    let query = "country=br"

    props.getNews(functionSearch, query); 

    return (
        <View>
            <Tabs></Tabs>
            <ContainerSearch></ContainerSearch>
            <ContainerNews/>
        </View>
        
    )
}

export default connect(null, { getNews })(Main);