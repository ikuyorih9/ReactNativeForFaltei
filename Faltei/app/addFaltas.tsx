//TELA DE ADICIONAR FALTAS A UMA DISCIPLINA.

import React, { useState } from 'react';
import { Image, useColorScheme, SafeAreaView, StyleSheet, FlatList, View, Text, TouchableOpacity, Button, Modal } from 'react-native';
import { ThemedStatusBar } from '@/components/ThemedStatusBar';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { router, useLocalSearchParams } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Disciplina, salvaUmaDisciplina } from '@/components/Disciplina';

export default function AddFaltas() {
  //Obtém parâmetros recebidos da tela anterior.
  const disciplina = useLocalSearchParams();
  
  console.log('Parâmetros recebidos:', disciplina);

  //Dados gerais para o datePicker. 
  const [date, setDate] = useState<Date | null>(null);
  const [isVisible, setVisible] = useState(false);

  //Renderização de um item na lista.
  const renderItem = ({ item }: { item: string }) => (
    <View style={styles.item}>
      <Text style={styles.text}>{item}</Text>
    </View>
  );

  function isDisciplina(obj: any): obj is Disciplina {
    return (
      typeof obj.nomeDisciplina === 'string' &&
      typeof obj.nomeProfessor === 'string' &&
      typeof obj.sigla === 'string' &&
      typeof obj.creditos === 'number'
      // Adicione outras verificações conforme necessário
    );
  }

  return (
    <ThemedView style={{backgroundColor: 'transparent'}}>
      <ThemedStatusBar
        lightColor={'#2D3855'}
        darkColor={'#2D3855'}
        lightContent={useColorScheme() === 'light' ? true : false}
      />

      <SafeAreaView style={styles.container}>
        <View style={styles.view}>
          <ThemedView style={styles.titleContainer}>
            <ThemedText style={styles.title}>{disciplina.nomeDisciplina}</ThemedText>
          </ThemedView>

          <View>
            {isVisible &&
            <DateTimePicker
              mode="date"
              value={date || new Date()}
              display="default"
              onChange={(event: any, selectedDate?: Date)=>{
                if (selectedDate) {
                  setDate(selectedDate);
                  if(isDisciplina(disciplina)){
                    disciplina.datas.push(selectedDate);
                    salvaUmaDisciplina(disciplina);
                  }
                }
              }}
            />
            }
          </View>

          {/*Põe a lista de faltas para a disciplina*/}
          <View style={styles.viewFlatlist}>
            <Text>Faltas registradas:</Text>
            <FlatList
              data={disciplina.datas}
              renderItem={((renderItem))}
              keyExtractor={(item, index) => index.toString()}
            />
          </View> 

          <ThemedView style={styles.viewButton}>
            <TouchableOpacity
              style={styles.addButton}
              onPress={() => {setVisible(true);}}>        
              <Ionicons name="add" size={24} style={styles.text} />
            </TouchableOpacity>
          </ThemedView>



          {/*Põe o botão que abre o date picker para adicionar uma falta.*/}
          
        </View>
        
        {/*Põe o nome da disciplina no topo.*/}
        
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: "column",
    paddingTop: ThemedStatusBar.height,
  },
  view: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 25,

    paddingVertical: 25,
    paddingHorizontal: 5,
  
    backgroundColor: 'transparent',
  },
  titleContainer: {
    backgroundColor: 'transparent',

    // borderColor: 'red',
    // borderWidth: 1,
  },
  title: {
    color: '#2D3856',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  graficoContainer: {
    backgroundColor: 'transparent',

    // borderColor: 'red',
    // borderWidth: 1,
  },
  grafico: {
    width: 300,
    height: 300,
  },
  listaContainer: {
    // borderColor: 'red',
    // borderWidth: 1,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    borderRadius: 5,
  },
  text: {
    fontSize: 18,
    color: '#fff'
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 5,
  },
  viewFlatlist:{
    backgroundColor: '2D3855',
    flex:1
  }
});