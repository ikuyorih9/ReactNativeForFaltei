import React, { useEffect, useState } from 'react';
import { BackHandler, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from 'expo-router';
import { Colors } from '@/constants/Colors';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

import GraficoPNG from '@/assets/images/grafico_faltas.png';

type BannerDisciplinasFaltasProps = {
  corBarraLateral: string;
  nomeDisciplina: string;
};

export function BannerDisciplinasFaltas({ corBarraLateral, nomeDisciplina }: BannerDisciplinasFaltasProps) {
  const [opacidade, setOpacidade] = useState(1);
  const navigation = useNavigation();

  return (
    <TouchableWithoutFeedback
      onPressIn={() => setOpacidade(0.6)}
      onPressOut={() => {
        setOpacidade(1);
      }}
      onPress={() => {
        navigation.navigate('addFaltas', { nomeDisciplina, corBarraLateral });
      }}
    >
      <ThemedView lightColor={Colors.light.background} darkColor={Colors.dark.background} style={[styles.container, { opacity: opacidade }]}>
        <ThemedView style={[styles.barralateral, { backgroundColor: corBarraLateral }]}></ThemedView>
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