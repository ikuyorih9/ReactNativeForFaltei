import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SplashScreen from 'expo-splash-screen';
import 'react-native-reanimated';

import tabs from './(tabs)';
import HomeScreen from './(tabs)/index';
import AddDisciplinasScreen from './addDisciplinas';
import AddFaltasScreen from './addFaltas';



// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export type RootStackParamList = {
  tabs: undefined;
  Home: undefined;
  disciplinas: undefined;
  addDisciplinas: undefined;
  addFaltas: { nomeDisciplina: string, corGrafico: string };
};

const Stack = createNativeStackNavigator();

export default function RootLayout() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='(tabs)' component={tabs} options={{ headerShown: false }} />
        <Stack.Screen name='addDisciplinas' component={AddDisciplinasScreen} options={{ headerShown: false }}/>
        <Stack.Screen name='addFaltas' component={AddFaltasScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
