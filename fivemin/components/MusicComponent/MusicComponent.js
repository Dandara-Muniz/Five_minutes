import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';

export default function MusicComponent({ music, onSelect, isSelected }) {
  const [sound, setSound] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  //controla o play
  return (
    <TouchableOpacity 
      style={[styles.musicCard, isSelected && styles.selectedCard]} 
      onPress={() => onSelect(music)}
    >
      <Text style={styles.musicText} numberOfLines={1}>
        {music.title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  musicCard: {
    backgroundColor: '#F7CF3757',
    width: '95%',
    borderRadius: 8,
    padding: 12,
    margin: 5,
  },
  selectedCard: {
    borderColor: '#D4AF37',
    borderWidth: 3,
  },
  musicText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});