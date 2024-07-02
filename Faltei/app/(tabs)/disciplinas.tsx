import { ThemedView } from '@/components/ThemedView';

import { Ionicons } from '@expo/vector-icons';

import React, { useState, useEffect } from 'react';
import { useColorScheme, SafeAreaView, StyleSheet, TouchableOpacity, ScrollView, View, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { useFocusEffect } from '@react-navigation/native';
import { ThemedStatusBar } from '@/components/ThemedStatusBar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BannerDisciplinas } from '@/components/BannerDisciplinas';
import {Disciplina, apagarTodasDisciplinas, carregaDisciplinas} from '@/components/Disciplina';

export default function Disciplinas() {
  const router = useRouter();
  const [nomeDisciplina, setNomeDisciplina] = useState('');
  const [nomeProfessor, setNomeProfessor] = useState('');
  const [numCreditos, setNumCreditos] = useState('');
  const [corDisciplina, setCorDisciplina] = useState('#2D3855'); // Cor padrão ou inicial da disciplina
  
  useFocusEffect(
    React.useCallback(() => {
      carregaDisciplinas().then((disciplinas)=>{
        setBanners(disciplinas);
      });
      
    }, [])
  );

  const [banners, setBanners] = useState<Disciplina[]>([]);

  return (
    
    <SafeAreaView style={styles.container}>
      <ThemedStatusBar
        lightColor={'#2D3855'} // Cor para o tema claro
        darkColor={'#2D3855'} // Cor para o tema escuro
        lightContent={useColorScheme() === 'light' ? true : false} // Conteúdo da barra de status claro
      />
      <ScrollView style={styles.scrollview} contentContainerStyle={styles.scrollviewContent}>
        <View>
          {banners.map((disciplina, index) => (
            <BannerDisciplinas 
              key={index}
              {...disciplina}
              onPress={()=>{
                carregaDisciplinas().then((disciplinas)=>{
                  setBanners(disciplinas);
                });
              }}
            />
          ))}
        </View>
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