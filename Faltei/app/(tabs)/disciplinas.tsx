
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';

import { Ionicons } from '@expo/vector-icons';

import { StackNavigationProp } from '@react-navigation/stack';
import TabLayout from './_layout';
import React, { useState, useEffect } from 'react';
import { Text, useColorScheme, SafeAreaView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { useNavigation } from 'expo-router';
import { ThemedStatusBar } from '@/components/ThemedStatusBar';
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function Disciplinas() {
  const navigation = useNavigation();
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
      <ThemedView style={styles.viewButton}>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate('addDisciplinas')}>        
          <Ionicons name="add" size={24} style={styles.text} />
        </TouchableOpacity>
      </ThemedView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingTop: ThemedStatusBar.height,
    paddingBottom: 10,
  },
  viewButton: {
    paddingHorizontal: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
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