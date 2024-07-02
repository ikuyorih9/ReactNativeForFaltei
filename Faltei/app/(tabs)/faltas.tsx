import React, { useState } from 'react';
import { ThemedStatusBar } from '@/components/ThemedStatusBar';
import { BannerDisciplinasFaltas } from '@/components/BannerDisciplinasFaltas';
import { ThemedView } from '@/components/ThemedView';
import { StyleSheet, ScrollView, SafeAreaView, useColorScheme, TouchableOpacity, View } from 'react-native';
import { router, useFocusEffect } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Disciplina, carregaDisciplinas } from '@/components/Disciplina';



export default function Faltas() {
  const [banners, setBanners] = useState<Disciplina[]>([]);

  //Toda vez que a tela atualizar, as disciplinas são carregadas.
  useFocusEffect(
    React.useCallback(() => {
      carregaDisciplinas().then((disciplinas)=>{
        setBanners(disciplinas); //Depois que as disciplinas são carregadas, os banners são atualizados
      });
      
    }, [])
  );

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
          {/*View que adicionar banners conforme as disciplinas carregadas.*/}
          <View>
            {banners.map((disciplina, index) => (
              <BannerDisciplinasFaltas 
                key={index}
                {...disciplina}
                onPress={()=>{
                }}
              />
            ))}
          </View>

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