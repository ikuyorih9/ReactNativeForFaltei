import React, {useState} from 'react';
import { ThemedStatusBar } from '@/components/ThemedStatusBar';
import { ThemedView } from '@/components/ThemedView';

import { StyleSheet, SafeAreaView, useColorScheme, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { PieChart } from "react-native-gifted-charts";
import { useFocusEffect } from '@react-navigation/native';

import { BannerDisciplinasHome } from '@/components/BannerDisciplinasHome';

import {View } from 'react-native';
import {Disciplina, carregaDisciplinas} from '@/components/Disciplina';

export default function HomeScreen() {
  const router = useRouter();

  const data = [
    {value: 54, color: '#177AD5', text: '54%'},
    {value: 40, color: '#79D2DE', text: '30%'},
    {value: 20, color: '#ED6665', text: '26%'},
  ];

  const [banners, setBanners] = useState<Disciplina[]>([]);

  useFocusEffect(
    React.useCallback(() => {
      carregaDisciplinas().then((disciplinas)=>{
        setBanners(disciplinas);
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
      <SafeAreaView style={styles.container}>
        <ThemedView style={styles.view}>
          <PieChart
            donut
            showText
            textColor="black"
            radius={130}
            textSize={20}
            data = {data}
          />
        </ThemedView>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollview} contentContainerStyle={styles.scrollviewContent}>
          <View>
            {banners.map((disciplina, index) => (
              <BannerDisciplinasHome 
                key={index}
                nomeDisciplina={disciplina.nomeDisciplina}
                porCentagemFaltas={0}
                faltasRestantes={10}
              />
            ))}
          </View>
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
