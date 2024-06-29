import React from 'react';
import { DefaultTopBar } from '@/components/DefaultTopBar';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { StyleSheet, Image} from 'react-native';

import PlaceHolder from '@/assets/images/generic_pie.png';

export default function HomeScreen() {
  return (
    <ThemedView>
      <DefaultTopBar/>
      <ThemedView style={styles.container}>
        <ThemedView style={styles.view}>
          <Image source={PlaceHolder} style={styles.image}/>
        </ThemedView>
        <ThemedView style={styles.view}>
          <ThemedText>Ele é um barato e é da pesada!</ThemedText>
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: "column",
    gap: 15,
    paddingTop: DefaultTopBar.height,
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
