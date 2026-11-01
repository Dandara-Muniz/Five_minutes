import React, { useState } from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function SearchComponent({ onSearch, tabs }) {
  const [search, setSearch] = useState('');

  const handleSearch = (text) => {
    setSearch(text);
    if (onSearch) {
      onSearch(text); // Passa o texto digitado para o componente pai
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Pesquise um item aqui..."
        value={search}
        onChangeText={handleSearch}
      />
      <Ionicons name="search" size={30} style={styles.icon} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EEEEEE',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: 330,
    borderRadius: 10,
    padding: 6,
  },
  input: {
    width: 200,
    borderWidth: 0,
    outline: 'none',
  },
  icon: {
    color: '#888',
    marginRight: 8,
  },
});
