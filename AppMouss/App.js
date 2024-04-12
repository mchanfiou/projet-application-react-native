import React from 'react';

import Home from './CustomPages/home';
import Search from './CustomPages/search';
import AboutUs from './CustomPages/aboutus';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{headerStyle: { backgroundColor: 'gray' } }}>
      <Stack.Screen name="Acceuil" component={Home} />
      <Stack.Screen name="Rechercher" component={Search}/>
      <Stack.Screen name="A propos" component={AboutUs}/> 
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator  screenOptions={{headerStyle: { backgroundColor: 'gray' }, tabBarStyle:{backgroundColor: 'gray'}, tabBarInactiveTintColor: 'black' }} tabBarOptions={{}}>
        <Tab.Screen name="Accueil" component={StackNavigator} />
        <Tab.Screen name="Rechercher" component={Search}/>
        <Tab.Screen name="A propos" component={AboutUs}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}



export default App;