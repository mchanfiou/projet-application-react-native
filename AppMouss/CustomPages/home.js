import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground ,StyleSheet, Text, View, Button } from 'react-native';



function Home({ navigation }) {
  return (
    <View style={styles.container}>
        <ImageBackground source={require('../assets/background.jpg')} resizeMode="cover" style={styles.image}>
            <Text style={styles.text}>Bienvenue!</Text>
            <StatusBar style="auto" />
            <Button title="Rechercher" onPress={() => navigation.navigate('Rechercher')}/>
        </ImageBackground>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,   
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Home;