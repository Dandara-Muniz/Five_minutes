import React, { useState } from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import styles from '../../../Styles/AllStyles';
import { musicasDB } from '../../db/musicasdb';
import MusicComponent from '../../../components/MusicComponent/MusicComponent.js';
import NavBarMusicComponent from '../../../components/MusicComponent/NavBarMusicComponent.js';

export default function MusicScreen() {
  const [currentMusic, setCurrentMusic] = useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <View style={stylesMusic.row}>
        <View style={styles.title}>
          <Text style={styles.title}>5minutes.</Text>
          <Text style={styles.subText}>De músicas :D</Text>
        </View>
        //Músicas
        <ScrollView
          style={stylesMusic.scrollView}
          contentContainerStyle={stylesMusic.scrollContent}
          showsVerticalScrollIndicator={false}>
          {musicasDB.map((item) => (
            <MusicComponent
              key={item.id}
              music={item}
              isSelected={currentMusic?.id === item.id}
              onSelect={(selectedMusic) => setCurrentMusic(selectedMusic)}
            />
          ))}
        </ScrollView>
      </View>
      //Navbar)
      <NavBarMusicComponent
        currentMusic={currentMusic}
        musicasDB={musicasDB}
        onMusicChange={(newMusic) => setCurrentMusic(newMusic)}
      />
      <View style={styles.footer}></View>
    </View>
  );
}

const stylesMusic = StyleSheet.create({
  row: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
  },
  scrollView: {
    flex: 1,
    width: '100%',
  },
  scrollContent: {
    alignItems: 'center',
  },
});
