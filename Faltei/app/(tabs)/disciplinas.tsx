import React from 'react';
import { ThemedStatusBar } from '@/components/ThemedStatusBar';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { StyleSheet, SafeAreaView, useColorScheme, View, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from 'expo-router';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../_layout';

type homeScreenProp = StackNavigationProp<RootStackParamList, 'Home'>;

export default function Disciplinas() {
  const navigation = useNavigation<homeScreenProp>();
  return (
    <View style={styles.container}>
      <TouchableOpacity
      style={styles.addButton}
      onPress={() => navigation.navigate('addDisciplinas')}>+</TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: "column",
    gap: 15,
    paddingTop: ThemedStatusBar.height,
    backgroundColor: 'transparent',
  },

  addButton:{
    width: 100,
    height: 100,
    backgroundColor:"#2D3855",
    color:"#fff"
  }
});