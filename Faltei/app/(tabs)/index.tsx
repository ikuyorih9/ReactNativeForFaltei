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
          <Image source={PlaceHolder} style={styles.grafico}/>
        </ThemedView>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollview} contentContainerStyle={styles.scrollviewContent}>
          <BannerDisciplinasHome
            nomeDisciplina="Fundamentos de Microeletrônica"
            porCentagemFaltas={0}
            faltasRestantes={10}
          />
          <BannerDisciplinasHome
            nomeDisciplina="Computação de Alto Desempenho"
            porCentagemFaltas={7}
            faltasRestantes={8}
          />
          <BannerDisciplinasHome
            nomeDisciplina="Projeto de Circuitos Integrados"
            porCentagemFaltas={13}
            faltasRestantes={3}
          />
          <BannerDisciplinasHome
            nomeDisciplina="Teoria da Computação e Compiladores"
            porCentagemFaltas={18}
            faltasRestantes={8}
          />
          <BannerDisciplinasHome
            nomeDisciplina="Desenvolvimento Web e Mobile"
            porCentagemFaltas={22}
            faltasRestantes={2}
          />
          <BannerDisciplinasHome
            nomeDisciplina="Sistemas Embarcados"
            porCentagemFaltas={26}
            faltasRestantes={3}
          />
          <BannerDisciplinasHome
            nomeDisciplina="Engenharia de Software"
            porCentagemFaltas={27}
            faltasRestantes={1}
          />
          <BannerDisciplinasHome
            nomeDisciplina="Gestão Ambiental para Engenheiros"
            porCentagemFaltas={35}
            faltasRestantes={0}
          />
        </ScrollView>
      </SafeAreaView>
    </ThemedView>

  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: ThemedStatusBar.height + 5,
    marginBottom: 5,
    marginHorizontal: 5,

    backgroundColor: 'transparent',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: 15,
  },
  view:{
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    height: 320,
    marginHorizontal: 5,
    backgroundColor: '#E3E1E1',
    borderRadius: 10,
  },
  grafico: {
    width: 350,
    height: 350,
    borderRadius: 18,
  },
  scrollview: {
    height: 440,
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
