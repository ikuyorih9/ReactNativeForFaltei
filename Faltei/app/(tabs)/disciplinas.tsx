import React from 'react';
import { ThemedStatusBar } from '@/components/ThemedStatusBar';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { StyleSheet, SafeAreaView, useColorScheme, TouchableOpacity} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import { useNavigation } from 'expo-router';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../routes';

type disciplinasScreenProp = StackNavigationProp<RootStackParamList, 'disciplinas'>;

export default function Disciplinas() {
  const navigation = useNavigation<disciplinasScreenProp>();
  return (
    <SafeAreaView style={styles.container}>
      <ThemedStatusBar
        lightColor={'#2D3855'} // Cor para o tema claro
        darkColor={'#2D3855'} // Cor para o tema escuro
        lightContent={useColorScheme() === 'light' ? true : false} // Conteúdo da barra de status claro
      />
      <ThemedView style={styles.viewButton}>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate('addDisciplinas')}>        
          <Ionicons name="add" size={24} style={styles.text} />
        </TouchableOpacity>
      </ThemedView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingTop: ThemedStatusBar.height,
    paddingBottom: 10,
  },
  viewButton: {
    paddingHorizontal: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
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