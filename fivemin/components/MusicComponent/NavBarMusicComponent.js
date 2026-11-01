import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons as MaterialDesignIcons } from '@expo/vector-icons';
import { Audio } from 'expo-av';

export default function NavBarMusicComponent({
  currentMusic,
  musicasDB,
  onMusicChange,
}) {
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Vê quando a música atual muda para carregar e dar play automaticamente
  useEffect(() => {
    if (currentMusic) {
      playMusic(currentMusic);
    }

    // Limpa o som quando o componente fecha
    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, [currentMusic]);

  //reproduz áudio da música selecionada 
    async function playMusic(music) {
    try {
      setIsLoading(true);
      if (sound) {
        await sound.unloadAsync(); // Descarrega a música anterior se houver
      }

      console.log(`Carregando: ${music.title}`);
      const { sound: playbackObject } = await Audio.Sound.createAsync(
        { uri: music.uri },
        { shouldPlay: true }
      );

      setSound(playbackObject);
      setIsPlaying(true);
    } catch (error) {
      console.log('Erro ao reproduzir áudio:', error);
    } finally {
      setIsLoading(false);
    }
  }

  // Alterna entre pausar e continuar tocando a música atual
  async function togglePlayPause() {
    try {
      if (!sound) return;

      if (isPlaying) {
        await sound.pauseAsync();
        setIsPlaying(false);
      } else {
        await sound.playAsync();
        setIsPlaying(true);
      }
    } catch (error) {
      console.log('Erro no controle de reprodução:', error);
    }
  }

  //mudar para a próxima música
  function playNext() {
    const currentIndex = musicasDB.findIndex((m) => m.id === currentMusic.id);
    const nextIndex = (currentIndex + 1) % musicasDB.length;
    onMusicChange(musicasDB[nextIndex]);
  }

  //voltar para a música anterior
  function playPrevious() {
    const currentIndex = musicasDB.findIndex((m) => m.id === currentMusic.id);
    const prevIndex = (currentIndex - 1 + musicasDB.length) % musicasDB.length;
    onMusicChange(musicasDB[prevIndex]);
  }

  return (
    <View style={styles.playerBar}>
      <Text style={styles.playerLabel}>Música tocando:</Text>
      <Text style={styles.playingTitle} numberOfLines={1}>
        {currentMusic ? currentMusic.title : 'Nenhuma música selecionada'}
      </Text>


        {/* Botão de voltar */}
      <View style={styles.rowHorizontal}>
        <TouchableOpacity onPress={playPrevious}>
          <MaterialDesignIcons name="skip-backward" size={30} color="#000" />
        </TouchableOpacity>

        {/* Botão de Play / Pause */}
        <TouchableOpacity onPress={togglePlayPause}>
          <MaterialDesignIcons
            name={isPlaying ? 'pause' : 'play'}
            size={30}
            color="#000"
          />
        </TouchableOpacity>

        {/* Botão de avançar */}
        <TouchableOpacity onPress={playNext}>
        <MaterialDesignIcons name="skip-forward" size={30} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rowHorizontal: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
  },
  playerBar: {
    backgroundColor: '#FFFBE6',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 10,
  },
  playerLabel: {
    fontSize: 12,
    color: '#7C7C7C',
  },
  playingTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
});
