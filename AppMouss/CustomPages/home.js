import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground ,StyleSheet, Text, View, Button } from 'react-native';

const image = {uri:'./Images/background.jpg'};
function Home({ navigation }) {
  return (
    <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
            <Text>Bienvenue!</Text>
            <StatusBar style="auto" />
            <Button title="Rechercher" onPress={() => navigation.navigate('Rechercher')}/>
        </ImageBackground>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,  
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default Home;