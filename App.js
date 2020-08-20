import React, { Fragment, useState, useEffect } from 'react';
import { StyleSheet, ScrollView, View, FlatList } from 'react-native';
import Card from './src/components/Card/Card';


function App() {

  const [news, setNews] = useState([]);
  const key = '35cbe59d9d144abebd03d7c457a45e75'
  
  useEffect(()=>{
    const readNews = async()=>{
      const response = await fetch('https://newsapi.org/v2/top-headlines?country=br&apiKey=35cbe59d9d144abebd03d7c457a45e75')
      const data = await response.json()
      const news = data.articles
      setNews(news)
    }
    readNews()
  }, [])

  return (
    
    <View>
      
      <FlatList 
        data={news}
        keyExtractor={(item) => item.title}
        renderItem={({item}) => 
          <Card item={item}/>}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cecece',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;