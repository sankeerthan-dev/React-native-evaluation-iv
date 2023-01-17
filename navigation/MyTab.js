import React from 'react'
import Home from '../pages/Home'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Ionicons, Entypo} from '@expo/vector-icons'
import Cart from '../pages/Cart'

const Bottomtab=createBottomTabNavigator()

const MyTab=()=>{
 return( <Bottomtab.Navigator
  screenOptions={{
    headerShown: false
  }}
 >
    <Bottomtab.Screen name="home1" component={Home}
    options={{
      tabBarLabel: "Home",
      tabBarIcon: ({ color,size})=> <Ionicons name="home" color={color} size={size}/>
    }}/>
    <Bottomtab.Screen name="cart" component={Cart}
    options={{
      tabBarLabel: "Cart",
      tabBarIcon: ({ color,size})=> <Entypo name="shopping-cart" color={color} size={size}/>
    }}/>
    
  </Bottomtab.Navigator>)
}
export default MyTab