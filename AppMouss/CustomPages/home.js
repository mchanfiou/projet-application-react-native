import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Bienvenue!</Text>
      <StatusBar style="auto" />
      <Button title="Rechercher" onPress={() => navigation.navigate('Rechercher')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;