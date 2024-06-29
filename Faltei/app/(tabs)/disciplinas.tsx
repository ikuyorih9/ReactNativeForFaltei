import React from 'react';
import { ThemedStatusBar } from '@/components/ThemedStatusBar';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { StyleSheet, SafeAreaView, useColorScheme } from 'react-native';

export default function Disciplinas() {
  return (
    <ThemedView>
      <ThemedStatusBar
        lightColor={'#2D3855'} // Cor para o tema claro
        darkColor={'#2D3855'} // Cor para o tema escuro
        lightContent={useColorScheme() === 'light' ? true : false} // Conteúdo da barra de status claro
      />
      {/* Usar a SafeAreaView após o DefaultTopBar para evitar que o conteúdo fique atrás da barra de status no IOS */}
      <SafeAreaView style={styles.container}>
        <ThemedText type="title" lightColor='#000' darkColor='#fff'>Disciplinas</ThemedText>
      </SafeAreaView>
    </ThemedView>
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
});