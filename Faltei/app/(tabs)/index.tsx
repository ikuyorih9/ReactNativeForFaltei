import React from 'react';
import { DefaultTopBar } from '@/components/DefaultTopBar';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
      <View >
        <DefaultTopBar/>
        <ThemedView style={styles.container}>
          <ThemedText type="title" lightColor='#000' darkColor='#fff'>HUgo</ThemedText>
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
