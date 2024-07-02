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
        <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollview} contentContainerStyle={styles.scrollviewContent}>
          <BannerDisciplinasFaltas
            corBarraLateral="#4BA3BE"
            nomeDisciplina="Fundamentos de Microeletrônica"
          />
          <BannerDisciplinasFaltas
          corBarraLateral="#4BA3BE"
          nomeDisciplina="Projeto de Circuitos Integrados"
          />
          <BannerDisciplinasFaltas
            corBarraLateral="#FE5E00"
            nomeDisciplina="Teoria da Computação e Compiladores"
          />
          <BannerDisciplinasFaltas
            corBarraLateral="#FE5E00"
            nomeDisciplina="Desenvolvimento Web e Mobile"
          />
          <BannerDisciplinasFaltas
            corBarraLateral="#FE5E00"
            nomeDisciplina="Sistemas Embarcados" 
          />
          <BannerDisciplinasFaltas
            corBarraLateral="#01CC00"
            nomeDisciplina="Engenharia de Software"
          />
          <BannerDisciplinasFaltas
            corBarraLateral="#FFB700"
            nomeDisciplina="Gestão Ambiental para Engenheiros" 
          />
        </ScrollView>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: ThemedStatusBar.height,
    backgroundColor: 'transparent',
    height: "95%",
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
    padding: 15,
    gap: 15,
  },
});