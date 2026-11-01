import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import HomeScreen from '../screens/PrincipaisTelas/HomeScreen';
import CreateScreen from '../screens/PrincipaisTelas/CreateScreen';
import PerfilScreen from '../screens/PrincipaisTelas/PerfilScreen';
import PesquisarScreen from '../screens/PrincipaisTelas/PesquisarScreen';
import CuriosidadeScreen from '../screens/PrincipaisTelas/CuriosidadeScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#000000', // Cor ativo
        tabBarInactiveTintColor: '#777777', // Cor inativo
        tabBarStyle: {
          backgroundColor: '#F7CF3757', // Cor de fundo da barra
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          borderTopWidth: 0,
          height: 100, // pra ficar acima do botão do celular
          paddingBottom: 40, // Espaçamento pro ícone ficar acima do botão
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Início',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Pesquisa"
        component={PesquisarScreen}
        options={{
          tabBarLabel: 'Pesquisar',
          tabBarIcon: ({ color, size }) => (
           <MaterialIcons name="search" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Create"
        component={CreateScreen}
        options={{
          tabBarLabel: 'Publicar',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="add" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Curiosidade"
        component={CuriosidadeScreen}
        options={{
          tabBarLabel: 'Curiosidades',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="lightbulb" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={PerfilScreen}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="account-circle" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
