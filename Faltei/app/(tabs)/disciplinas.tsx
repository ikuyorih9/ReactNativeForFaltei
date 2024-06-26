import React from 'react';
import { DefaultTopBar } from '@/components/DefaultTopBar';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { StyleSheet, View } from 'react-native';

export default function Disciplinas() {
  return (
    <View >
      <DefaultTopBar/>
      <ThemedView style={styles.container}>
        <ThemedText type="title" lightColor='#000' darkColor='#fff'>Disciplinas</ThemedText>
      </ThemedView>
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
});