import React from 'react';
import { ThemedStatusBar } from '@/components/ThemedStatusBar';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { StyleSheet, Image, SafeAreaView, useColorScheme} from 'react-native';

import PlaceHolder from '@/assets/images/generic_pie.png';

export default function HomeScreen() {
  return (
    <ThemedView>
      <ThemedStatusBar
        lightColor={'#2D3855'} // Cor para o tema claro
        darkColor={'#2D3855'} // Cor para o tema escuro
        lightContent={useColorScheme() === 'light' ? true : false} // Conteúdo da barra de status claro
      />
      {/* Usar a SafeAreaView após o DefaultTopBar para evitar que o conteúdo fique atrás da barra de status no IOS */}
      <SafeAreaView style={styles.container}>
        <ThemedView style={styles.view}>
          <Image source={PlaceHolder} style={styles.image}/>
        </ThemedView>
        <ThemedView style={styles.view}>
          <ThemedText>Ele é um barato e é da pesada!</ThemedText>
        </ThemedView>
      </SafeAreaView>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: "column",
    paddingTop: ThemedStatusBar.height,
    gap: 15,
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
