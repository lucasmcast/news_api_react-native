import React from 'react';
import {Card} from '../Card';
import { connect } from 'react-redux';
import {View, FlatList} from 'react-native'

function ContainerNews(props){
    return(
        <View>
            <FlatList
                data={props.news}
                keyExtractor={(item) => item.title}
                renderItem={({ item }) =>
                    <Card item={item} />}
            />
        </View>
    )
}

const mapStateToProps = (state) => {
    return (
        { news: state.rootNews.news }
    )
}

export default connect(mapStateToProps)(ContainerNews);