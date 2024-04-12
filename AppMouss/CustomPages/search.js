import React, { useState } from 'react';
import { TouchableOpacity, ImageBackground, View, TextInput, Text, Image, ScrollView, StyleSheet } from 'react-native';

function Search () {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const API_KEY = '43342643-b240d853790055fe0f568f00d';
  const URL = `https://pixabay.com/api/?key=${API_KEY}&q=`;

  const handleChange = (text) => {
    setQuery(text);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch(URL + encodeURIComponent(query));
      const data = await response.json();
      setResults(data.hits);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/bg.jpg')} resizeMode="cover" style={styles.imageBG}>
          <TextInput
            style={styles.input}
            placeholder="Alors la recherche ? ..."
            placeholderTextColor="black"
            value={query}
            onChangeText={handleChange}
          />
          <TouchableOpacity style={[styles.button, { borderColor: "gray" }]} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Rechercher</Text>
          </TouchableOpacity>
          
          <ScrollView style={styles.results}>
            {results.map((result) => (
              <Image
                key={result.id}
                source={{ uri: result.previewURL }}
                style={styles.image}
              />
            ))}
          </ScrollView>
          
        </ImageBackground>
        
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    width: '75%',
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: 'rgba(169, 169, 169, 0.8)',
    borderRadius: 5,
    margin: 50,
    padding: 10,
    marginBottom: 10,
    justifyContent: 'center',
    alignContent : 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  results: {
    marginTop: 20,
    
  },
  image: {
    width: '90%' ,
    margin: 20,
    height: 300,
    marginBottom: 25,
    alignContent: 'center',
  },
  imageBG: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  button: {
    borderWidth: 2,
    borderRadius: 5,
    width: '50%',
    marginLeft: '25%',
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

export default Search;