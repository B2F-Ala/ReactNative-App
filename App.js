import React from 'react';
import Login from './Login';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Register from './Register';
import Ala from './Ala';
const Stack = createStackNavigator();
export default function App(){
return(
<NavigationContainer>
      <Stack.Navigator screenOptions={{
    headerShown: false
  }}>
        <Stack.Screen 
  name="Login" component={Login} />
  <Stack.Screen 
  name="Register" component={Register} />
  <Stack.Screen 
  name="Ala" component={Ala} />
       
      </Stack.Navigator>
    </NavigationContainer>
)
}
