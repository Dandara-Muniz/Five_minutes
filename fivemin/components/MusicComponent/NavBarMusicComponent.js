import React, { useState, useEffect, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { MaterialCommunityIcons as MaterialDesignIcons } from '@expo/vector-icons';
import { Audio } from 'expo-av';

export default function NavBarMusicComponent({
  currentMusic,
  musicasDB,
  onMusicChange,
}) {
  const soundRef = useRef(null);
  const loadIdRef = useRef(0); // Controla qual é a música mais recente para evitar conflitos
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Toca a musica quando muda
  useEffect(() => {
    if (currentMusic) {
      loadAndPlayMusic(currentMusic);
    }

    // Limpa o som quando fecha a tela
    return () => {
      if (soundRef.current) {
        soundRef.current.unloadAsync().catch(() => {});
        soundRef.current = null;
      }
    };
  }, [currentMusic]);

  // reproduzir a música, controlando pra não tocar várias ao memo tempo
  async function loadAndPlayMusic(music) {
    // pega o valor atual(musica), salva em ua constante global
    const currentLoadId = ++loadIdRef.current;

    try {
      setIsLoading(true);

      // Para qualquer som anterior
      if (soundRef.current) {
        try {
          await soundRef.current.stopAsync();
          await soundRef.current.unloadAsync();
        } catch (e) {
          console.log('Erro ao limpar som anterior:', e);
        }
        soundRef.current = null;
      }

      // Se o usuário clicou em outra música enquanto o som era limpo, cancela esta execução
      if (currentLoadId !== loadIdRef.current) return;
      console.log(`Carregando: ${music.title}`);

      await Audio.setAudioModeAsync({
        playsInSilentModeIOS: true,
        staysActiveInBackground: false,
        shouldDuckAndroid: true,
      });

      // Carrega musica salva, informa que é link, som toca imediatamente ao carregar, som, não começa mudo
      const { sound: playbackObject } = await Audio.Sound.createAsync(
        { uri: music.uri },
        {
          shouldPlay: true,
          volume: 1.0,
          isMuted: false,
        },
        (status) => {
          // Ignora atualizações se não for a música mais recente
          if (currentLoadId !== loadIdRef.current) return;

          if (status.isLoaded) {
            setIsPlaying(status.isPlaying);

            if (status.didJustFinish) {
              playNext();
            }
          } else if (status.error) {
            console.log('ERRO DE ÁUDIO NO STATUS:', status.error);
          }
        }
      );

      // Verifica se a musica mudou enquanto carregava pra tocar, se trocou ent ele para
      if (currentLoadId !== loadIdRef.current) {
        await playbackObject.unloadAsync();
        return;
      }

      soundRef.current = playbackObject;
      setIsPlaying(true);
    } catch (error) {
      console.log(
        'Erro ao reproduzir áudio (URI inválida ou corrompida):',
        error
      );
    } finally {
      // Só tira o loading se esta ainda for a música ativa
      if (currentLoadId === loadIdRef.current) {
        setIsLoading(false);
      }
    }
  }

  // Alterna entre pausar e continuar tocando
  async function togglePlayPause() {
    try {
      if (!soundRef.current) return;

      const status = await soundRef.current.getStatusAsync();
      if (!status.isLoaded) return;

      if (status.isPlaying) {
        await soundRef.current.pauseAsync();
        setIsPlaying(false);
      } else {
        await soundRef.current.playAsync();
        setIsPlaying(true);
      }
    } catch (error) {
      console.log('Erro no controle de reprodução:', error);
    }
  }

  // Próxima música
  function playNext() {
    if (!musicasDB || musicasDB.length === 0 || !currentMusic) return;
    const currentIndex = musicasDB.findIndex((m) => m.id === currentMusic.id);
    const nextIndex = (currentIndex + 1) % musicasDB.length;
    onMusicChange(musicasDB[nextIndex]);
  }

  // Música anterior
  function playPrevious() {
    if (!musicasDB || musicasDB.length === 0 || !currentMusic) return;
    const currentIndex = musicasDB.findIndex((m) => m.id === currentMusic.id);
    const prevIndex = (currentIndex - 1 + musicasDB.length) % musicasDB.length;
    onMusicChange(musicasDB[prevIndex]);
  }

  return (
    <View style={styles.playerBar}>
      <Text style={styles.playerLabel}>Música selecionada:</Text>
      <Text style={styles.playingTitle} numberOfLines={1}>
        {currentMusic ? currentMusic.title : 'Nenhuma música selecionada'}
      </Text>

      <View style={styles.rowHorizontal}>
        <TouchableOpacity onPress={playPrevious} disabled={isLoading}>
          <MaterialDesignIcons
            name="skip-backward"
            size={30}
            color={isLoading ? '#CCC' : '#000'}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={togglePlayPause} disabled={isLoading}>
          {isLoading ? (
            <ActivityIndicator
              size="small"
              color="#000"
              style={{ marginHorizontal: 5 }}
            />
          ) : (
            <MaterialDesignIcons
              name={isPlaying ? 'pause' : 'play'}
              size={30}
              color="#000"
            />
          )}
        </TouchableOpacity>

        <TouchableOpacity onPress={playNext} disabled={isLoading}>
          <MaterialDesignIcons
            name="skip-forward"
            size={30}
            color={isLoading ? '#CCC' : '#000'}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rowHorizontal: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
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
    padding: 12,
    borderTopWidth: 1,
    borderTopColor: '#F0E68C',
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
