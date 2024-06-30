import React, { useState } from 'react';
import { ThemedStatusBar } from '@/components/ThemedStatusBar';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { StyleSheet, SafeAreaView, useColorScheme, View, Text, Button, FlatList, Modal, TouchableOpacity } from 'react-native';
import { Disciplina } from './types';
import SubjectEditor from './SubjectEditor';

export default function Config() {

  // isso vai ter que ficar dinamico de tal forma que o nome da disciplina venha da tela disciplina
  const [disciplinas, setDisciplinas] = useState<Disciplina[]>([
    // Dados iniciais das disciplinas
    { id: '1', nome: 'Matemática', provas: 2, trabalhos: 3, pesoProvas: 50, pesoTrabalhos: 50 },
    // Adicionar mais disciplinas se necessário
  ]);

  const [disciplinaSelecionada, setDisciplinaSelecionada] = useState<Disciplina | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const abrirEditor = (disciplina: Disciplina) => {
    setDisciplinaSelecionada(disciplina);
    setIsModalVisible(true);
  };

  const fecharEditor = () => {
    setDisciplinaSelecionada(null);
    setIsModalVisible(false);
  };

  const atualizarDisciplina = (disciplinaAtualizada: Disciplina) => {
    setDisciplinas(disciplinas.map(disciplina => (disciplina.id === disciplinaAtualizada.id ? disciplinaAtualizada : disciplina)));
    fecharEditor();
  };

  return (
    <ThemedView>
      <ThemedStatusBar
        lightColor={'#2D3855'} // Cor para o tema claro
        darkColor={'#2D3855'} // Cor para o tema escuro
        lightContent={useColorScheme() === 'light' ? true : false} // Conteúdo da barra de status claro
      />
      {/* Usar a SafeAreaView após o DefaultTopBar para evitar que o conteúdo fique atrás da barra de status no IOS */}
      <SafeAreaView style={styles.container}>
        <ThemedText type="title" lightColor='#000' darkColor='#fff'>Configurações</ThemedText>
      </SafeAreaView>

      <View>
        <FlatList
          data={disciplinas}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => abrirEditor(item)}>
              <Text>{item.nome}</Text>
            </TouchableOpacity>
          )}
        />
        <Modal visible={isModalVisible} animationType="slide">
          {disciplinaSelecionada && (
            <SubjectEditor disciplina={disciplinaSelecionada} onSave={atualizarDisciplina} onCancel={fecharEditor} />
          )}
        </Modal>
      </View>

    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: "column",
    gap: 15,
    paddingTop: ThemedStatusBar.height,
    backgroundColor: 'transparent',
  },
});