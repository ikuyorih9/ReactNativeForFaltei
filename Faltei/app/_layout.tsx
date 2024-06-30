import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { createStackNavigator } from '@react-navigation/stack';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import AddDisciplinasScreen from './addDisciplinas';

import { useColorScheme } from '@/hooks/useColorScheme';
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
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'light' ? DefaultTheme : DarkTheme}>
      <Stack.Navigator>
        <Stack.Screen name='(tabs)' component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name='addDisciplinas' component={AddDisciplinasScreen} />
      </Stack.Navigator>
    </ThemeProvider>
  );
}
