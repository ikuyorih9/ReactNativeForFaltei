import React from 'react';
import { ThemedStatusBar } from '@/components/ThemedStatusBar';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';

import { StyleSheet, SafeAreaView, Image, Button, useColorScheme, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

import PlaceHolder from '@/assets/images/generic_pie.png';
import { BannerDisciplinasHome } from '@/components/BannerDisciplinasHome';

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
        <ScrollView style={styles.scrollview} contentContainerStyle={styles.scrollviewContent}>
          <BannerDisciplinasHome
            nomeDisciplina="Fundamentos de Microeletrônica"
            porCentagemFaltas={7}
          />
          <BannerDisciplinasHome
            nomeDisciplina="Projeto de Circuitos Integrados"
            porCentagemFaltas={13}
          />
          <BannerDisciplinasHome
            nomeDisciplina="Teoria da Computação e Compiladores"
            porCentagemFaltas={17}
          />
          <BannerDisciplinasHome
            nomeDisciplina="Desenvolvimento Web e Mobile"
            porCentagemFaltas={20}
          />
          <BannerDisciplinasHome
            nomeDisciplina="Sistemas Embarcados"
            porCentagemFaltas={23}
          />
          <BannerDisciplinasHome
            nomeDisciplina="Engenharia de Software"
            porCentagemFaltas={25}
          />
          <BannerDisciplinasHome
            nomeDisciplina="Gestão Ambiental para Engenheiros"
            porCentagemFaltas={30}
          />
        </ScrollView>
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
    scrollview: {
    marginBottom: 5,
    marginHorizontal: 5,
    backgroundColor: "#D9D9D9",
    borderRadius: 10,
  },
  scrollviewContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 5,
    gap: 15,
  },
});
