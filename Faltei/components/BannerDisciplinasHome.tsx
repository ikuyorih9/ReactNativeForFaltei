import React, { useState } from 'react';
import { Image, StyleSheet, TouchableWithoutFeedback, useColorScheme } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors } from '@/constants/Colors';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { FontAwesome6, Ionicons } from '@expo/vector-icons';

type BannerDisciplinasHomeProps = {
  nomeDisciplina: string;
  porCentagemFaltas: number;
};

export function BannerDisciplinasHome({ nomeDisciplina, porCentagemFaltas }: BannerDisciplinasHomeProps) {
  const [opacidade, setOpacidade] = useState(1);
  const router = useRouter();

  let comentraioHide : boolean = true;
  let nomeDisciplinaHide : boolean = false;

  const percentValues = (porCentagemFaltas: number): [string, string] => {
    const percentColors = useColorScheme() === 'light' ? Colors.light : Colors.dark;
    if (porCentagemFaltas <= 7) {
      return [percentColors.safesafe, "face-laugh-beam"];
    }  
    if (porCentagemFaltas <= 13) {
      return [percentColors.safe, "face-smile"];
    }
    if (porCentagemFaltas <= 17) {
      return [percentColors.safewarning, "face-meh"]; // Supondo que 'safewarning' foi um erro de digitação para 'safeWarning'
    }
    if (porCentagemFaltas <= 20) {
      return [percentColors.warning, "face-frown-open"];
    }
    if (porCentagemFaltas <= 23) {
      return [percentColors.hardwaring, "face-frown"]; // Supondo que 'hardwaring' foi um erro de digitação para 'hardWarning'
    }
    if (porCentagemFaltas <= 25) {
      return [percentColors.danger, "face-flushed"];
    }
    if (porCentagemFaltas <= 30) {
      return [percentColors.dead, "face-dizzy"]; // Supondo que 'dead' é uma cor definida para os casos mais críticos
    }
    // Retornar valores padrão se nenhum dos casos acima for atendido
    return [percentColors.safesafe, "face-laugh-beam"]; // Substitua 'face-smile' pelo ícone padrão desejado
  };

  const [percentColor, faceIcon] = percentValues(porCentagemFaltas);

  return (
    <TouchableWithoutFeedback
      onPressIn={() => setOpacidade(0.6)}
      onPressOut={() => {
        setOpacidade(1);
      }}
      onPress={() => {
        ~comentraioHide;
        ~nomeDisciplinaHide;	
      }}
    >
      <ThemedView lightColor={Colors.light.background} darkColor={Colors.dark.background} style={[styles.container, { opacity: opacidade, backgroundColor: percentColor }]}>
        <ThemedView style={styles.cotainerInfos}>
          <ThemedView style={styles.faceIconContainer}>
            <FontAwesome6 name={faceIcon} size={30} color={"black"} />
          </ThemedView>
          <ThemedView style={styles.nomeDisciplinaContainer}>
            <ThemedText style={styles.nomeDisciplina}>{nomeDisciplina}</ThemedText>
          </ThemedView>
          <ThemedView style={styles.containerFalta}>
            <Ionicons name='add-circle-outline' size={24} style={styles.iconFalta} />
            <ThemedText style={styles.falta}>{porCentagemFaltas}%</ThemedText>
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
  cotainerInfos: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',

    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,

    paddingLeft: 15,
    paddingRight: 10,

    backgroundColor: 'transparent',
  },
  faceIconContainer: {
    backgroundColor: 'transparent',
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
  containerFalta: {
    backgroundColor: 'transparent',
  },
  iconFalta: {

  },
  falta: {

  },
});