import React from 'react';
import { ThemedStatusBar } from '@/components/ThemedStatusBar';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';

export function DefaultTopBar() {
  const scheme = useColorScheme();
  return (
    <View>
      <ThemedStatusBar
        lightColor="#554991" // Cor para o tema claro
        darkColor="#554991" // Cor para o tema escuro
        lightContent={scheme === "light" ? true : false} // Conteúdo da barra de status claro
      />
      <View style={styles.container}>
        <View style={styles.horizontalBar}></View>
      </View>
    </View>
  );
};

// Calcula a altura baseada na altura da StatusBar e na altura definida para a barra horizontal
const calculatedHeight = 30 + (StatusBar.currentHeight ? StatusBar.currentHeight : 0);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  horizontalBar: {
    backgroundColor: "#2D3856",
    height: calculatedHeight,
  }
});

// Exporta a altura como uma propriedade estática do componente
DefaultTopBar.height = calculatedHeight;