import React, { useState } from 'react';
import { Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors } from '@/constants/Colors';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

import GraficoPNG from '@/assets/images/grafico_faltas.png';
import { Disciplina } from './Disciplina';
import Disciplinas from '@/app/(tabs)/disciplinas';


interface BannerDisciplinasFaltasProps extends Disciplina {
  onPress:() => void;
};

export function BannerDisciplinasFaltas({ nomeDisciplina, nomeProfessor, sigla, creditos, cor, datas, onPress }: BannerDisciplinasFaltasProps) {
  const [opacidade, setOpacidade] = useState(1);
  const router = useRouter();

  const disciplina:Disciplina = {
    nomeDisciplina:nomeDisciplina, 
    nomeProfessor:nomeProfessor, 
    sigla:sigla,
    creditos:creditos, 
    cor:cor,
    datas:datas
  };

  return (
    <TouchableWithoutFeedback
      onPressIn={() => setOpacidade(0.6)}
      onPressOut={() => {
        setOpacidade(1);
      }}
      onPress={() => {
        router.push({pathname: "addFaltas", params: {sigla}})
      }}
    >
      <ThemedView lightColor={Colors.light.background} darkColor={Colors.dark.background} style={[styles.container, { opacity: opacidade }]}>
        <ThemedView style={[styles.barralateral, { backgroundColor: cor }]}></ThemedView>
        <ThemedView style={styles.cotainerInfos}>
          <ThemedView style={styles.nomeDisciplinaContainer}>
            <ThemedText style={styles.nomeDisciplina}>{nomeDisciplina}</ThemedText>
          </ThemedView>
          <ThemedView>
            <Image source={GraficoPNG} style={styles.grafico} />
          </ThemedView>
        </ThemedView>
      </ThemedView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',

    height: 130,
    borderRadius: 15,

    flexDirection: 'row',
  },
  barralateral: {
    width: 30,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },
  cotainerInfos: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',

    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,

    paddingLeft: 15,
    paddingRight: 10,
  },
  nomeDisciplinaContainer: {
    width: 215,
    marginRight: 10,
    backgroundColor: 'transparent',
  },
  nomeDisciplina: {
    flexShrink: 1,
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  grafico: {
    width: 90,
    height: 93,
  },
});