import React from 'react';
import { DefaultTopBar } from '@/components/DefaultTopBar';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { StyleSheet, SafeAreaView} from 'react-native';

export default function Disciplinas() {
  return (
    <ThemedView>
      <DefaultTopBar 
        lightColor='#2D3855'
        darkColor='#2D3855'
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
    paddingTop: DefaultTopBar.height,
    backgroundColor: 'transparent',
  },
});