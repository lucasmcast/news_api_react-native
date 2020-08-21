import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getNews } from '../../redux/actions'
import {ContainerNews} from '../ContainerNews';
import getDataAPI from '../../dao/newsDAO'
import EndPoint from '../../models/EndPoint';
import { ContainerSearch } from '../ContainerSearch';
import { View } from 'react-native'

function Main(props) {

    const [news, setNews] = useState([]);
    const endPoint = new EndPoint("everything", "q=futebol")

    useEffect(() => {
        const readNews = async () => {
            const news = await getDataAPI(endPoint);
            setNews(news);
        }
        
        readNews()
    
    }, [])

    props.getNews(news);

    return (
        <View>
            <ContainerSearch></ContainerSearch>
            <ContainerNews/>
        </View>
        
    )
}

export default connect(null, { getNews })(Main);