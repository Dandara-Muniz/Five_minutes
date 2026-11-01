import { View, Text, Pressable } from 'react-native';
import SearchComponent from '../../../components/SearchComponent';
import styles from '../../../Styles/AllStyles';
export default function PesquisarScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}> </View>
      <View style={styles.row}>

        <SearchComponent />

        <Text style={styles.text}>oi</Text>
      </View>
    </View>
  );
}
