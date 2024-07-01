import React, { useState } from 'react';
import { Text, useColorScheme, SafeAreaView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { useNavigation } from 'expo-router';
import { ThemedStatusBar } from '@/components/ThemedStatusBar';
import { ThemedView } from '@/components/ThemedView';
import AsyncStorage from '@react-native-async-storage/async-storage';


import Header from '@/components/HeaderPagina';

export default function AddDisciplinasScreen() {
  const navigation = useNavigation();
  const [nomeDisciplina, setNomeDisciplina] = useState('');
  const [nomeProfessor, setNomeProfessor] = useState('');
  const [numCreditos, setNumCreditos] = useState('');
  const [corDisciplina, setCorDisciplina] = useState('#2D3855'); // Cor padrão ou inicial da disciplina

  const handleSaveDisciplina = async () => {
    try {
      // Salvar os dados no AsyncStorage
      const disciplina = {
        nome: nomeDisciplina,
        professor: nomeProfessor,
        creditos: numCreditos,
        cor: corDisciplina,
      };
      await AsyncStorage.setItem('disciplina', JSON.stringify(disciplina));
      console.log('Disciplina salva localmente:', disciplina);

      // Reiniciar os estados após salvar, se necessário
      setNomeDisciplina('');
      setNomeProfessor('');
      setNumCreditos('');
      setCorDisciplina('#2D3855'); // Voltar para o valor padrão
    } catch (error) {
      console.error('Erro ao salvar disciplina:', error);
    }
    navigation.goBack();
  };

  return (
    <ThemedView style={{backgroundColor: 'transparent'}}>
      <ThemedStatusBar
        lightColor={'#2D3855'} // Cor para o tema claro
        darkColor={'#2D3855'} // Cor para o tema escuro
        lightContent={useColorScheme() === 'light' ? true : false} // Conteúdo da barra de status claro
      />
      <SafeAreaView style={styles.container}>
        <ThemedView style={styles.view}>
        <Header title='Disciplinas' onBackPress={() => navigation.goBack()}/>
          <TextInput
            style={styles.input}
            placeholder="Nome da Disciplina"
            value={nomeDisciplina}
            onChangeText={text => setNomeDisciplina(text)}
            autoCorrect={false}
            autoFocus={true}
          />
          <TextInput
            style={styles.input}
            placeholder="Nome do Professor"
            value={nomeProfessor}
            onChangeText={text => setNomeProfessor(text)}
            autoCorrect={false}
          />
          <TextInput
            style={styles.input}
            placeholder="Número de Créditos-Aula"
            value={numCreditos}
            onChangeText={text => setNumCreditos(text)}
            keyboardType="numeric"
          />
          <Picker
            selectedValue={corDisciplina}
            style={styles.picker}
            onValueChange={(itemValue) => setCorDisciplina(itemValue)}
          >
            <Picker.Item label="Azul" value="#2D3855" />
            <Picker.Item label="Verde" value="#008000" />
            <Picker.Item label="Vermelho" value="#FF0000" />
            {/* Adicione outras cores conforme necessário */}
          </Picker>

          <TouchableOpacity
            style={styles.button}
            onPress={handleSaveDisciplina}
          >
            <Text style={styles.buttonText}>Criar disciplina</Text>
          </TouchableOpacity>
        </ThemedView>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: "column"
  },
  view: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  input: {
    height: 50,
    width: '100%',
    borderColor: 'transparent',
    borderWidth: 0,
    marginBottom: 10,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  picker: {
    height: 50,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
  },
  button: {
    width: '70%',
    height: 50,
    backgroundColor: '#2D3855',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});