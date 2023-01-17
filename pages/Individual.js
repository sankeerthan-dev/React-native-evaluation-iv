import React, {useState, useEffect} from 'react'
import {  Button, Card, Text } from 'react-native-paper';


const Individual=({route, navigation})=>{
  const [item, setItem] = useState([])

  useEffect(()=>{
    fetch(`https://dummyjson.com/products/${route?.params.productid}`)
    .then((res)=>res.json())
    .then((json)=>setItem(json));
            
  },[]);
  return(<Card style={{backgroundColor:'#84dcc6'}}>
        <Card.Title title={item.title} subtitle={item.category} />
        <Card.Cover source={{ uri: item.image }} resizeMode="contain" style={{backgroundColor:'#fff'}} />
        <Card.Content>
          <Text variant="bodyMedium" style={{textAlign:'justify'}}>{item.description}</Text>
          <Text variant="bodyMedium" style={{textAlign:'justify'}}>$ {item.price}</Text>
        </Card.Content>
        <Card.Actions>
          <Button mode="contained" onPress={navigation.navigate('cart')} >Add To Cart</Button>
        </Card.Actions>
      </Card>)
}

export default Individual