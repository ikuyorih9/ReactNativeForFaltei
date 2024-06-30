import React from 'react';
import { ThemedStatusBar } from '@/components/ThemedStatusBar';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';

import { StyleSheet, View, Image, Text, Button } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../_layout'

const PlaceHolder = require('@/assets/images/generic_pie.png');

type homeScreenProp = StackNavigationProp<RootStackParamList, 'Home'>;

export default function HomeScreen() {
  const navigation = useNavigation<homeScreenProp>();
  return (
    <View>
        <View style={styles.container}>
          <View style={styles.view}>
            <Image source={PlaceHolder} style={styles.image}/>
          </View>
          <View style={styles.view}>
            <Text>Ele é um barato e é da pesada!</Text>
          </View>
        </View>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('addDisciplinas')}
        />
      </View>

  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: "column",
    paddingTop: ThemedStatusBar.height,
    gap: 15,
    backgroundColor: 'transparent',
  },
  view:{
    padding: 10,
    margin: 25,
    backgroundColor: '#E3E1E1'
  },
  image: {
    width: "100%",
    borderRadius: 18,
  },

});
