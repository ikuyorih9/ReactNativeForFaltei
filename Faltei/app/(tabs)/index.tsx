import React from 'react';
import { DefaultTopBar } from '@/components/DefaultTopBar';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { StyleSheet, View, Image, Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const PlaceHolder = require('@/assets/images/generic_pie.png');

export default function HomeScreen() {
  return (
    <View>
        <DefaultTopBar/>
        <View style={styles.container}>
          <View style={styles.view}>
            <Image source={PlaceHolder} style={styles.image}/>
          </View>
          <View style={styles.view}>
            <Text>Ele é um barato e é da pesada!</Text>
          </View>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: "column",
    gap: 15,
    paddingTop: DefaultTopBar.height+ 15,
    backgroundColor: 'transparent',
  },
  view:{
    padding: 25,
    backgroundColor: '#E3E1E1'
  },
  image: {
    width: "100%",
    borderRadius: 18,
  },

});
