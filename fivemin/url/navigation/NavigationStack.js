import LoginScreen from '../screens/LoginScreen';
import MusicScreen from '../screens/HomeTelas/MusicScreen';
import TimerScreen from '../screens/HomeTelas/TimerScreen';
import VideoScreen from '../screens/HomeTelas/VideoScreen';
import TextScreen from '../screens/HomeTelas/TextScreen';
import CuriosidadeScreen from '../screens/PrincipaisTelas/CuriosidadeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './NavigationTab';
export default function NavigationStack() {
  
const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Music" screenOptions={{ headerShown: false }}>
        {/* Tab como "tela" */}
        <Stack.Screen 
          name="MainTabs" 
          component={TabNavigator} 
        />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Music" component={MusicScreen} />
        <Stack.Screen name="Text" component={TextScreen} />
        <Stack.Screen name="Video" component={VideoScreen} />
        <Stack.Screen name="Timer" component={TimerScreen} />
        <Stack.Screen name="Curiosidad" component={CuriosidadeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}