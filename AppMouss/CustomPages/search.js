import React, { useState } from 'react';
import { View, TextInput, Button, Image, ScrollView, Text, StyleSheet } from 'react-native';

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
      <TextInput
        style={styles.input}
        placeholder="Rechercher les meilleurs paysages !"
        value={query}
        onChangeText={handleChange}
      />
      <Button title="Search" onPress={handleSubmit} />
      <ScrollView style={styles.results}>
        {results.map((result) => (
          <Image
            key={result.id}
            source={{ uri: result.previewURL }}
            style={styles.image}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  results: {
    marginTop: 20,
  },
  image: {
    width: 300,
    height: 300,
    margin: 5,
  },
});

export default Search;