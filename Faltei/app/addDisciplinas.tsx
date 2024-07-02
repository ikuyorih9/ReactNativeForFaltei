import React, { useState } from 'react';
import { Text, useColorScheme, SafeAreaView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { useNavigation } from 'expo-router';
import { ThemedStatusBar } from '@/components/ThemedStatusBar';
import { ThemedView } from '@/components/ThemedView';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Disciplina} from '@/components/Disciplina';

import Header from '@/components/HeaderPagina';
import Disciplinas from './(tabs)/disciplinas';

export default function AddDisciplinasScreen() {
  const navigation = useNavigation();
  const [nomeDisciplina, setNomeDisciplina] = useState('');
  const [nomeProfessor, setNomeProfessor] = useState('');
  const [siglaDisciplina, setSiglaDisciplina] = useState('');
  const [numCreditos, setNumCreditos] = useState('');
  const [corDisciplina, setCorDisciplina] = useState('#2D3855'); // Cor padrão ou inicial da disciplina

  const salvarDisciplina = async()=>{
    try {
      const disciplina:Disciplina={
        nomeDisciplina:nomeDisciplina, 
        nomeProfessor:nomeProfessor, 
        sigla:siglaDisciplina,
        creditos:parseInt(numCreditos), 
        cor:corDisciplina
      };
      console.log("Enviando:", disciplina);

      let disciplinasArray: string[];
      const listaDisciplinas = await AsyncStorage.getItem('listaDisciplinas');
      if(listaDisciplinas != null){
        disciplinasArray = JSON.parse(listaDisciplinas) as string[];
      }
      else{
        disciplinasArray = [disciplina.sigla];
      }

      let disciplinaJaCriada = false;

      disciplinasArray.forEach(d => {
        if(disciplina.sigla === d){
          disciplinaJaCriada = true;
        }
      });

      if(!disciplinaJaCriada){
        await AsyncStorage.setItem(disciplina.sigla, JSON.stringify(disciplina));
        disciplinasArray.push(disciplina.sigla);
        await AsyncStorage.setItem('listaDisciplinas', JSON.stringify(disciplinasArray));
        console.log('Disciplina salva com sucesso!');
      }
      else{
        console.log('Disciplina já existe!');
      }
      
    } catch (error) {
      console.error('Erro ao salvar disciplina:', error);
    }
    navigation.goBack();
  }

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
            placeholder="Sigla da disciplina"
            value={siglaDisciplina}
            onChangeText={text => setSiglaDisciplina(text)}
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
            <Picker.Item label="Azul" value="#4BA3BE" />
            <Picker.Item label="Laranja" value="#FE5E00" />
            <Picker.Item label="Verde" value="#01CC00" />
            <Picker.Item label="Amarelo" value="#FFB700" />
          </Picker>

          <TouchableOpacity
            style={styles.button}
            onPress={()=>{
              salvarDisciplina();
            }}
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
    marginLeft: 25,
    marginRight: 25,
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