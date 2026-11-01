import { View, Text, Pressable, StyleSheet } from 'react-native';
import styles from '../../../Styles/AllStyles';
import CalendarState from '../../../components/CalendarComponent';
export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}> </View>

      <View style={stylesHome.rowHorizontal}>
        <View style={styles.imgLogo}> </View>
        <Text style={styles.title}>5Minutes.</Text>
      </View>

      <View style={styles.row}>
        {' '}
        //centraliza todos os elementos da tela e põe o espaçamento entre cada
        elemento
        <Text style={styles.subText}>Olá, -nome aqui-</Text>
        <View style={stylesHome.blocoMessage}>
          <Text style={styles.text}>
            É melhor você tentar algo, vê-lo não funcionar e aprender com isso,
            do que não fazer nada.{' '}
          </Text>
        </View>
        <View style={styles.rowHorizontal}>
          <CalendarState />
          <View style={stylesHome.gapArea}>
            <Text
              style={styles.subText}
              onPress={() => navigation.navigate('Video')}>
              Meus vídeos
            </Text>
            <Text
              style={styles.subText}
              onPress={() => navigation.navigate('Text')}>
              Anotações
            </Text>
            <Text
              style={styles.subText}
              onPress={() => navigation.navigate('Timer')}>
              Timer
            </Text>
            <Text
              style={styles.subText}
              onPress={() => navigation.navigate('Curiosidad')}>
              Curiosidades
            </Text>
            <Text
              style={styles.subText}
              onPress={() => navigation.navigate('Music')}>
              Músicas
            </Text>
            <View style={styles.hr}> </View>
          </View>
        </View>
        <Text style={styles.subText}>Tem uma dúvida? Escreva aqui.</Text>
        <View style={stylesHome.inputText}></View>
        <View style={styles.button}>
          <Text style={styles.text}>ENVIAR</Text>
        </View>
      </View>
    </View>
  );
}

const stylesHome = StyleSheet.create({
  rowHorizontal: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    margin: 10,
    gap: 10,
  },
  blocoMessage: {
    backgroundColor: '#F7CF3757',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    height: 80,
    borderWidth: 2,
    borderStyle: 'solid',
    borderRadius: 10,
    padding: 10,
  },
  gapArea: {
    gap: 10,
    marginTop: 20,
  },
  inputText: {
    backgroundColor: '#E8E8E8',
    width: '90%',
    height: 100,
    borderWidth: 2,
    borderStyle: 'solid',
    borderRadius: 10,
  },
});
