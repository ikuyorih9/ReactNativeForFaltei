import React, { useState } from 'react';
import { Image, ImageBackground, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors } from '@/constants/Colors';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

import iconCap from '@/assets/images/icons/cap.png';
import iconAcademic from '@/assets/images/icons/academic.png';
import iconCoin from '@/assets/images/icons/coin.png';


type BannerDisciplinasProps = {
  nomeDisciplina: string;
  siglaDisciplina: string;
  nomeProfessor: string;
  numCreditos: number;
  corPrimaria: string;
  corSecundaria: string;
};

export function BannerDisciplinas({ nomeDisciplina, siglaDisciplina, nomeProfessor, numCreditos, corPrimaria, corSecundaria }: BannerDisciplinasProps) {
  const [opacidade, setOpacidade] = useState(1);
  const router = useRouter();

  return (
    <TouchableWithoutFeedback
      onPressIn={() => setOpacidade(0.6)}
      onPressOut={() => {
        setOpacidade(1);
      }}
      onPress={() => {
        console.log('Clicou no banner de disciplina:', nomeDisciplina);
        
      }}
    >
      <ThemedView lightColor={Colors.light.background} darkColor={Colors.dark.background} style={[styles.container, { opacity: opacidade, backgroundColor: corSecundaria }]}>
        <ThemedView style={[styles.header, { backgroundColor: corPrimaria }]}>
          <ThemedView style={styles.nomeProfessorContainer}>
            <Image source={iconCap} style={styles.iconCap}></Image>
            <ThemedText style={styles.nomeProfessor}>{nomeProfessor}</ThemedText>
          </ThemedView>
            <ThemedView style={styles.siglaDisciplinaContainer}>
            <Image source={iconAcademic} style={styles.iconAcademic}></Image>
            <ThemedText style={styles.siglaDisciplina}>{siglaDisciplina}</ThemedText>
          </ThemedView>
          <ImageBackground source={iconCoin} style={styles.iconCoin}>
            <ThemedText style={styles.numCreditos}>{numCreditos}</ThemedText>
          </ImageBackground>
        </ThemedView>
        <ThemedView style={styles.nomeDisciplinaContainer}>
          <ThemedText style={styles.nomeDisciplina}>{nomeDisciplina}</ThemedText>
        </ThemedView>
      </ThemedView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',

    height: 150,
    borderRadius: 14,

    flexDirection: 'column',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-around',

    height: 50,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    padding: 10,
  },
  nomeProfessorContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    

    width: 223,
  },
  iconCap: {
    width: 23,
    height: 23,
  },
  nomeProfessor: {
    flexShrink: 1,
    flex: 1,
    marginLeft: 5,

    height: 25,

    fontSize: 20,
    fontWeight: '600',
    textAlign: 'left',
  },
  siglaDisciplinaContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    
    width: 100,
    
    backgroundColor: 'transparent',
  },
  iconAcademic: {
    width: 18,
    height: 18,
  },
  siglaDisciplina: {
    flexShrink: 1,
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
  },
  iconCoin: {
    width: 25,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numCreditos: {
    textAlign: 'center',
    fontSize: 15,
    backgroundColor: 'trasnparent',
  },
  nomeDisciplinaContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',

    padding: 10,

    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 14,

    backgroundColor: 'transparent',
  },
  nomeDisciplina: {
    flexShrink: 1,
    fontSize: 25,
    fontWeight: '600',
    textAlign: 'center',
  },
});