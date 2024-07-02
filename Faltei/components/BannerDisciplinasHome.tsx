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
  faltasRestantes: number;
};

export function BannerDisciplinasHome({ nomeDisciplina, porCentagemFaltas, faltasRestantes }: BannerDisciplinasHomeProps) {
  const [opacidade, setOpacidade] = useState(1);
  const router = useRouter();

  const [nomeDisciplinaHide, setNomeDisciplinaHide] = useState(false);

  const percentValues = (porCentagemFaltas: number, faltasRestantes : number): [string, string, string] => {
    const percentColors = useColorScheme() === 'light' ? Colors.light : Colors.dark;
    let vezes_ou_vez : string = "vezes";
    if(faltasRestantes === 1) {
      vezes_ou_vez = "vez";
    }
    
    if (porCentagemFaltas == 0) {
      return [percentColors.safesafe, "face-laugh-beam", "Perfeito! Você não possui faltas."];
    }
    if (porCentagemFaltas <= 7) {
      return [percentColors.safesafe, "face-laugh-beam", `Tá suave! Você ainda pode faltar ${faltasRestantes} ${vezes_ou_vez}.`];
    }  
    if (porCentagemFaltas <= 13) {
      return [percentColors.safe, "face-smile", `Ainda tá tranquilo! Você pode faltar ${faltasRestantes} ${vezes_ou_vez}.`];
    }
    if (porCentagemFaltas <= 17) {
      return [percentColors.safewarning, "face-meh", `Cuidado! Você pode faltar ${faltasRestantes} ${vezes_ou_vez}.`]; // Supondo que 'safewarning' foi um erro de digitação para 'safeWarning'
    }
    if (porCentagemFaltas <= 20) {
      return [percentColors.warning, "face-frown-open", `Tá preocupante! Você pode faltar apenas ${faltasRestantes} ${vezes_ou_vez}.`];
    }
    if (porCentagemFaltas <= 25) {
      return [percentColors.hardwaring, "face-frown", `Não falte mais! Você pode faltar só mais ${faltasRestantes} ${vezes_ou_vez}.`]; // Supondo que 'hardwaring' foi um erro de digitação para 'hardWarning'
    }
    if (porCentagemFaltas <= 30) {
      return [percentColors.danger, "face-flushed", `Tá turistando? Se você faltar ${faltasRestantes} ${vezes_ou_vez} já era!`];
    }
    if (porCentagemFaltas > 30) {
      return [percentColors.dead, "face-dizzy", "Parabéns turista!! Você reprovou por falta..."]; // Supondo que 'dead' é uma cor definida para os casos mais críticos
    }
    // Retornar valores padrão se nenhum dos casos acima for atendido
    return [percentColors.safesafe, "face-laugh-beam", "Perfeito! Você não possui faltas."]; // Substitua 'face-smile' pelo ícone padrão desejado
  };

  const [percentColor, faceIcon, frase] = percentValues(porCentagemFaltas, faltasRestantes);

  return (
    <TouchableWithoutFeedback
      // onPressIn={() => setOpacidade(0.6)}
      // onPressOut={() => setOpacidade(1)}
      onPress={() => {
        setNomeDisciplinaHide(!nomeDisciplinaHide);
      }}
    >
      <ThemedView lightColor={Colors.light.background} darkColor={Colors.dark.background} style={[styles.container, { opacity: opacidade, backgroundColor: percentColor }]}>
        <ThemedView style={styles.cotainerInfos}>
          <ThemedView style={styles.faceIconContainer}>
            <FontAwesome6 name={faceIcon} size={30} color={"black"} />
          </ThemedView>
          <ThemedView style={styles.nomeDisciplinaContainer}>
            <ThemedText style={[styles.nomeDisciplina, nomeDisciplinaHide ? { display: 'none' } : {}]}>{nomeDisciplina}</ThemedText>
            <ThemedText style={[styles.nomeDisciplina, nomeDisciplinaHide ? {} : { display: 'none' }]}>{frase}</ThemedText>
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
  
    height: 115,
    borderRadius: 15,

    flexDirection: 'row',
  },
  cotainerInfos: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,

    gap: 5,

    padding: 20,

    backgroundColor: 'transparent',
  },
  faceIconContainer: {
    backgroundColor: 'transparent',
  },
  nomeDisciplinaContainer: {
    width: 255,
    backgroundColor: 'transparent',
  },
  nomeDisciplina: {
    flexShrink: 1,
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  containerFalta: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 5,
    backgroundColor: 'transparent',
  },
  iconFalta: {
    transform: [{ rotate: '45deg' }]
  },
  falta: {

  },
});