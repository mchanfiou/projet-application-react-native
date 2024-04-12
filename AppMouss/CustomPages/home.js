import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity ,ImageBackground ,StyleSheet, Text, View, Button } from 'react-native';



function Home({ navigation }) {
  return (
    <View style={styles.container}>
        <ImageBackground source={require('../assets/background.jpg')} resizeMode="cover" style={styles.image}>
            <Text style={styles.text}>Bienvenue!</Text>
            <StatusBar style="auto" />
            <TouchableOpacity style={[styles.button, { borderColor: "gray" }]} onPress={() => navigation.navigate('Rechercher')}>
                <Text style={styles.buttonText}>Aller à la page Rechercher</Text>
            </TouchableOpacity>
            
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
  button: {
    borderWidth: 2,
    borderRadius: 5,
    width: '60%',
    marginLeft: '20%',
    padding: 10,
    alignItems: 'center',
    borderColor: 'gray', 
    backgroundColor: 'gray',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white', 
  },
});

export default Home;