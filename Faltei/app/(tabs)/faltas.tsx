import React from 'react';
import { ThemedStatusBar } from '@/components/ThemedStatusBar';
import { BannerDisciplinasFaltas } from '@/components/BannerDisciplinasFaltas';
import { ThemedView } from '@/components/ThemedView';
import { StyleSheet, ScrollView, SafeAreaView, useColorScheme } from 'react-native';


export default function Faltas() {
  return (
    <ThemedView>
      <ThemedStatusBar
        lightColor={'#2D3855'} // Cor para o tema claro
        darkColor={'#2D3855'} // Cor para o tema escuro
        lightContent={useColorScheme() === 'light' ? true : false} // Conteúdo da barra de status claro
      />
      {/* Usar a SafeAreaView após o DefaultTopBar para evitar que o conteúdo fique atrás da barra de status no IOS */}
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollview} contentContainerStyle={styles.scrollviewContent}>
          <BannerDisciplinasFaltas
            corBarraLateral="#4BA3BE"
            nomeDisciplina="Fundamentos de Microeletrônica"
          />
          <BannerDisciplinasFaltas
            corBarraLateral="#FFB700"
            nomeDisciplina="Gestão Ambiental para Engenheiros" 
          />
          <BannerDisciplinasFaltas
            corBarraLateral="#FE5E00"
            nomeDisciplina="Teoria da Computação e Compiladores"
            />
          <BannerDisciplinasFaltas
            corBarraLateral="#01CC00"
            nomeDisciplina="Desenvolvimento Web e Mobile"
            />
        </ScrollView>
      </SafeAreaView>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: "column",
    marginTop: ThemedStatusBar.height,
    backgroundColor: 'transparent',
    height: "95%",
  },
  scrollview: {
    flexGrow: 1,
    marginBottom: 5,
    marginHorizontal: 5,
    backgroundColor: "#D9D9D9",
    borderRadius: 10,
  },
  scrollviewContent: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 15,
    gap: 25,
  },
});