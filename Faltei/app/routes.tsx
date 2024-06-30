import { createStackNavigator } from '@react-navigation/stack';
import * as SplashScreen from 'expo-splash-screen';
import 'react-native-reanimated';

import AddDisciplinasScreen from './addDisciplinas';

import HomeScreen from './(tabs)/index';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export type RootStackParamList = {
  "(tabs)": undefined;
  Home: undefined;
  addDisciplinas: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function RootLayout() {
  return (
    <Stack.Navigator>
        <Stack.Screen name='(tabs)' component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name='addDisciplinas' component={AddDisciplinasScreen} options={{ title: "Adicionar Disciplinas" }}/>
    </Stack.Navigator>
  );
}
