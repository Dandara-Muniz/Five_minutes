import { View, Text, Pressable, StyleSheet } from 'react-native';
import styles from '../../../Styles/AllStyles';
export default function PerfilScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}> </View>

      <View style={styles.row}>
      
        <View style={styles.justify}>
          <View style={stylesPerfil.logo}> </View>
          <Text style={stylesPerfil.title}>Nome da conta</Text>
        </View>

        <Text style={stylesPerfil.subText}>Meus dados:</Text>
        <View>
          <Text style={styles.subText}>Email:</Text>
          <View style={styles.buttonMaior}> </View>
        </View>

        <View>
          <Text style={styles.subText}>Senha:</Text>
          <View style={styles.buttonMaior}> </View>
        </View>

        <View>
          <Text style={styles.subText}>Escola(opcional):</Text>
          <View style={styles.buttonMaior}> </View>
        </View>

        <View style={stylesPerfil.space}>
          <Text style={stylesPerfil.text}>Digite aqui o que você estuda.</Text>
        </View>
      </View>
    </View>
  );
}

const stylesPerfil = StyleSheet.create({
  logo: {
    backgroundColor: '#F7CF3757',
    width: 150,
    height: 150,
    borderRadius: 1000,
    borderWidth: 4,
  },
  title: {
    fontSize: 30,
  },
  subText: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  text: {
    fontSize: 18,
    textAlign: 'left',
  },
  space: {
    backgroundColor: '#F7CF3757',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    height: 40,
    borderWidth: 2,
    borderStyle: 'solid',
    borderRadius: 10,
    padding: 4,
  },
});
