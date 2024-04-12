import React from 'react';

import Home from './CustomPages/home';
import Search from './CustomPages/search';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home" style={styles.stack}>
      <Stack.Screen name="Acceuil" component={Home} />
      <Stack.Screen name="Rechercher" component={Search}/> 
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator style={styles.tab}>
        <Tab.Screen name="Accueil" component={StackNavigator} />
        <Tab.Screen name="Rechercher" component={Search}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    backgroundColor: 'grey',   
  },
});


export default App;