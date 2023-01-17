import {createStackNavigator} from '@react-navigation/stack'
import Home from '../pages/Home'
import Individual from '../pages/Individual'
const Stack = createStackNavigator();
import Bottomtab from './MyTab'
import Cart from '../pages/Cart'

const MyStack = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen name="home1" component = {Bottomtab} />
      <Stack.Screen name="singleitem" component = {Individual} />
      <Stack.Screen name="cart" component = {Cart} />
    </Stack.Navigator>
  )
}

export default MyStack;