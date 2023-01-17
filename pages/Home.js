import React, {useState, useEffect} from 'react'
import {FlatList} from 'react-native'
import { Button, Card, Text } from "react-native-paper";

const Home=({navigation})=>{
  const [products, setProducts]=useState([])
  useEffect(()=>{
      fetch('https://dummyjson.com/products')
      .then(res =>res.json())
      .then((json)=>setProducts(json.products));
    
  },[])
   const renderItem = ({ item }) => {
    return (
      <Card style={{backgroundColor:'#84dcc6', margin: 4}}>
        <Card.Title title={item.title} subtitle={item.category} />
        <Card.Cover source={{ uri: item.thumbnail }} />
        <Card.Content>
          <Text variant="bodyMedium" style={{textAlign:'justify'}}>{item.description}</Text>
        </Card.Content>
        <Card.Actions>
          <Button mode="contained" onPress={()=> navigation.navigate('singleitem',{productid:item.id})}>Details</Button>
        </Card.Actions>
      </Card>
    );
  };

  return <FlatList data={products} renderItem={renderItem} />;
};

export default Home