import React, { useState } from 'react';
import { Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';

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

  return (
    <TouchableWithoutFeedback
      onPressIn={() => setOpacidade(0.6)}
      onPressOut={() => {
        setOpacidade(1);
      }}
    >
      <ThemedView lightColor={Colors.light.background} darkColor={Colors.dark.background} style={[{ opacity: opacidade }, styles.container]}>
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
    height: 130,
    borderRadius: 15,

    flex: 1,
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
    justifyContent: 'space-between',
    alignItems: 'center',

    gap: 5,

    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,

    paddingHorizontal: 25,
  },
  grafico: {
    width: 100,
    height: 100,
  },
  nomeDisciplinaContainer: {
    flex: 1,
    marginLeft: 25,
  },
  nomeDisciplina: {
    flexShrink: 1,
    fontSize: 18,
    fontWeight: 'regular',
  },
});