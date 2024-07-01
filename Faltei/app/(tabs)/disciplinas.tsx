import { ThemedView } from '@/components/ThemedView';

import { Ionicons } from '@expo/vector-icons';

import React, { useState, useEffect } from 'react';
import { useColorScheme, SafeAreaView, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { ThemedStatusBar } from '@/components/ThemedStatusBar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BannerDisciplinas } from '@/components/BannerDisciplinas';



export default function Disciplinas() {
  const router = useRouter();
  const [nomeDisciplina, setNomeDisciplina] = useState('');
  const [nomeProfessor, setNomeProfessor] = useState('');
  const [numCreditos, setNumCreditos] = useState('');
  const [corDisciplina, setCorDisciplina] = useState('#2D3855'); // Cor padrão ou inicial da disciplina
  
  useEffect(() => {
    // Função para carregar os dados salvos ao inicializar a tela
    loadSavedData();
  }, []); // Executar apenas uma vez ao montar o componente

  const loadSavedData = async () => {
    try {
      const savedDisciplina = await AsyncStorage.getItem('disciplina');
      
      if (savedDisciplina !== null) {
        // Converter de volta para objeto JavaScript
        const disciplina = JSON.parse(savedDisciplina);
        setNomeDisciplina(disciplina.nome);
        setNomeProfessor(disciplina.professor);
        setNumCreditos(disciplina.creditos);
        setCorDisciplina(disciplina.cor);
        console.log('Dados recuperados:', disciplina);
      } else {
        console.log('Nenhum dado salvo encontrado.');
      }
    } catch (error) {
      console.error('Erro ao recuperar dados:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ThemedStatusBar
        lightColor={'#2D3855'} // Cor para o tema claro
        darkColor={'#2D3855'} // Cor para o tema escuro
        lightContent={useColorScheme() === 'light' ? true : false} // Conteúdo da barra de status claro
      />
      <ScrollView style={styles.scrollview} contentContainerStyle={styles.scrollviewContent}>
        <BannerDisciplinas
          corPrimaria="#4BA3BE"
          corSecundaria="#B4D1EC"
          nomeDisciplina="Fundamentos de Microeletrônica"
          siglaDisciplina='SEL0617'
          nomeProfessor="Joao Navarro Soares Junior"
          numCreditos={2}
        />
        <BannerDisciplinas
          corPrimaria="#4BA3BE"
          corSecundaria="#B4D1EC"
          nomeDisciplina="Projeto de Circuitos Integrados"
          siglaDisciplina='SEL 0618'
          nomeProfessor="Joao Paulo Pereira do Carmo"
          numCreditos={2}
        />
        <BannerDisciplinas
          corPrimaria="#FE5E00"
          corSecundaria="#FFE2BF"
          nomeDisciplina="Teoria da Computação e Compiladores"
          siglaDisciplina='SCC 0605'
          nomeProfessor="Thiago Alexandre Salgueiro Pardo"
          numCreditos={4}
        />
        <BannerDisciplinas
          corPrimaria="#FE5E00"
          corSecundaria="#FFE2BF"
          nomeDisciplina="Desenvolvimento Web e Mobile"
          siglaDisciplina='SSC 0961'
          nomeProfessor="Lina Maria Garcés Rodriguez"
          numCreditos={2}
        />
        <BannerDisciplinas
          corPrimaria="#FE5E00"
          corSecundaria="#FFE2BF"
          nomeDisciplina="Sistemas Embarcados"
          siglaDisciplina='SSC 0740'
          nomeProfessor="Vanderlei Bonato"
          numCreditos={3}
        />
        <BannerDisciplinas
          corPrimaria="#01CC00"
          corSecundaria="#D7FDCE"
          nomeDisciplina="Engenharia de Software"
          siglaDisciplina="SSC 0620"
          nomeProfessor="Elisa Yumi Nakagawa"
          numCreditos={4}
        />
        <BannerDisciplinas
          corPrimaria="#FFB700"
          corSecundaria="#F6ECB8"
          nomeDisciplina="Gestão Ambiental para Engenheiros"
          siglaDisciplina='SHS 0623'
          nomeProfessor="Juliano Henrique Corbi"
          numCreditos={2}
        />
      </ScrollView>
      <ThemedView style={styles.viewButton}>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => router.push({ pathname: 'addDisciplinas' })}>        
          <Ionicons name="add" size={24} style={styles.text} />
        </TouchableOpacity>
      </ThemedView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: ThemedStatusBar.height,
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
  viewButton: {
    paddingHorizontal: 10,
    paddingBottom: 5,
    display: 'flex',
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: 'transparent',
  },
  addButton:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: 75,
    height: 75,
    backgroundColor:"#2D3855",
    borderRadius:20,

    padding: 20,
  },

  text:{
    width: "100%",
    height: "100%",
    padding: 5,
    fontSize: 24,
    color:"#fff",
    textAlign: 'center',
  },

});