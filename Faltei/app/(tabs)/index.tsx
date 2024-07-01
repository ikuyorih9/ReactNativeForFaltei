import React from 'react';
import { ThemedStatusBar } from '@/components/ThemedStatusBar';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';

import { StyleSheet, SafeAreaView, Image, Button, useColorScheme } from 'react-native';
import { useRouter } from 'expo-router';

import PlaceHolder from '@/assets/images/generic_pie.png';

export default function HomeScreen() {
  const router = useRouter();
  return (
    <ThemedView>
      <ThemedStatusBar
        lightColor={'#2D3855'} // Cor para o tema claro
        darkColor={'#2D3855'} // Cor para o tema escuro
        lightContent={useColorScheme() === 'light' ? true : false} // Conteúdo da barra de status claro
      />
      <SafeAreaView style={styles.container}>
        <ThemedView style={styles.view}>
          <Image source={PlaceHolder} style={styles.image}/>
        </ThemedView>
        <ThemedView style={styles.view}>
          <ThemedText>Ele é um barato e é da pesada!</ThemedText>
        </ThemedView>
        <Button
          title="Go to Details"
          onPress={() => router.push({ pathname: 'addDisciplinas' })}
        />
      </SafeAreaView>
    </ThemedView>

  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: ThemedStatusBar.height,
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
