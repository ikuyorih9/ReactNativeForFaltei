import React from 'react';
import { DefaultTopBar } from '@/components/DefaultTopBar';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { StyleSheet, SafeAreaView } from 'react-native';

export default function Faltas() {
  return (
    <ThemedView>
      <DefaultTopBar/>
      {/* Usar a SafeAreaView após o DefaultTopBar para evitar que o conteúdo fique atrás da barra de status no IOS */}
      <SafeAreaView style={styles.container}>
        <ThemedText type="title" lightColor='#000' darkColor='#fff'>Faltas</ThemedText>
      </SafeAreaView>
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
});