import React from 'react';
import { useRoute, RouteProp } from '@react-navigation/native';
import { Image, useColorScheme, SafeAreaView, StyleSheet } from 'react-native';
import { ThemedStatusBar } from '@/components/ThemedStatusBar';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';

type AddFaltasScreenRouteParams = {
  nomeDisciplina: string;
  corBarraLateral: string;
};

type AddFaltasScreenRouteProp = RouteProp<{ params: AddFaltasScreenRouteParams }, 'params'>;

import GraficoPNG from '@/assets/images/garfico_addfaltas.png';

export default function AddFaltasScreen() {
  const route = useRoute<AddFaltasScreenRouteProp>();
  const { nomeDisciplina, corBarraLateral } = route.params;

  // console.log('Nome da disciplina:', nomeDisciplina);
  // console.log('Cor da barra lateral:', corBarraLateral);
  
  return (
    <ThemedView style={{backgroundColor: 'transparent'}}>
      <ThemedStatusBar
        lightColor={'#2D3855'}
        darkColor={'#2D3855'}
        lightContent={useColorScheme() === 'light' ? true : false}
      />
      <SafeAreaView style={styles.view}>
        <ThemedView style={styles.titelContainer}>
          <ThemedText style={styles.title}>{nomeDisciplina}</ThemedText>
        </ThemedView>
        <ThemedView style={styles.graficoContainer}>
          <Image source={GraficoPNG} style={styles.grafico} />
        </ThemedView>
        <ThemedView style={styles.listaContainer}>

        </ThemedView>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  view: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 25,

    paddingVertical: 25,
    paddingHorizontal: 5,
  
    backgroundColor: 'transparent',
    
    height: '100%',

    // borderColor: 'red',
    // borderWidth: 1,
  },
  titelContainer: {
    backgroundColor: 'transparent',

    // borderColor: 'red',
    // borderWidth: 1,
  },
  title: {
    color: '#2D3856',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  graficoContainer: {
    backgroundColor: 'transparent',

    // borderColor: 'red',
    // borderWidth: 1,
  },
  grafico: {
    width: 300,
    height: 300,
  },
  listaContainer: {
    // borderColor: 'red',
    // borderWidth: 1,
  },
});