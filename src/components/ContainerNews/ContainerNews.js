import React from 'react';
import { Card } from '../Card';
import { connect } from 'react-redux';
import { View, FlatList } from 'react-native'
import styles from './styles'

function ContainerNews(props) {

    return (
        <View style={styles.containerNews}>
            <FlatList
                style={{marginBottom: 220}}
                data={props.isFavorite ? props.newsFavorites : props.news}
                keyExtractor={(item) => item.title}
                renderItem={({ item, index }) =>
                    <Card index={index} isFavorite={props.isFavorite} item={item} />}
            />
        </View>
    )
}

const mapStateToProps = (state) => {
    return (
        {
            news: state.rootNews.news,
            isFavorite: state.rootNews.isFavorite,
            newsFavorites: state.rootFavoritesNews.newsFavorites
        }
    )
}

export default connect(mapStateToProps)(ContainerNews);