import React from 'react';
import { DefaultTopBar } from '@/components/DefaultTopBar';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { StyleSheet, useColorScheme } from 'react-native';

export default function HomeScreen() {
  return (
    <ThemedView>
      <DefaultTopBar />
      <ThemedView style={styles.container}>
        <ThemedText type="title">Disciplinas</ThemedText>
      </ThemedView>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    color: 'red',
  },
});
