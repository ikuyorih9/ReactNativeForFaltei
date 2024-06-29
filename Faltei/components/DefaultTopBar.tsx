import React from 'react';
import { ThemedStatusBar } from '@/components/ThemedStatusBar';
import { StatusBar, StyleSheet, useColorScheme, View, SafeAreaView } from 'react-native';

type DefaultTopBarProps = {
  lightColor: string;
  darkColor: string;
  statusBarContentColor?: string; 
  horizontalBarColor?: string;
  horizontalBarHeight?: number;
}

// Calcula a altura baseada na altura da StatusBar e na altura definida para a barra horizontal
let calculatedHeight : number = (StatusBar.currentHeight ? StatusBar.currentHeight : 0);

export function DefaultTopBar({ lightColor, darkColor, statusBarContentColor = 'light', horizontalBarColor, horizontalBarHeight}: DefaultTopBarProps) {
  
  let lightContent: boolean = true;
  if(statusBarContentColor === 'auto') {
    lightContent = (useColorScheme() === 'light' ? true : false);
  }
  if(statusBarContentColor === 'dark') {
    lightContent = false;
  }

  if(horizontalBarColor === undefined) {
    horizontalBarColor = (useColorScheme() === 'light' ? lightColor : darkColor);
  } 

  let horizontalBarDisplay: "flex" | "none" = "flex";
  if(horizontalBarHeight === undefined || horizontalBarHeight <= 0) {
    horizontalBarDisplay = "none";
  } else {
    calculatedHeight += horizontalBarHeight;
  }
  
  

  return (
    <View>
      <ThemedStatusBar
        lightColor={lightColor} // Cor para o tema claro
        darkColor={darkColor} // Cor para o tema escuro
        lightContent={lightContent} // Conteúdo da barra de status claro
      />
      <View style={{display: horizontalBarDisplay, ...styles.container}}>
        <SafeAreaView style={{height: horizontalBarHeight, backgroundColor: horizontalBarColor}}></SafeAreaView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
});

// Exporta a altura como uma propriedade estática do componente
DefaultTopBar.height = calculatedHeight;