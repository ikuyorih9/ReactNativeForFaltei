import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { ThemedStatusBar } from '@/components/ThemedStatusBar';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { StyleSheet, SafeAreaView, useColorScheme, View, Text, FlatList, Modal, TouchableOpacity, Button  } from 'react-native';
import { Disciplina, Prova, Trabalho } from '../(tabs)/types/types'; // Ajuste o caminho conforme a estrutura do seu projeto
import SubjectEditor from './SubjectEditor';

export default function Config() {
  const [disciplinas, setDisciplinas] = useState<Disciplina[]>([
    { id: '1', nome: 'Matemática', provas: [{ id: '1', peso: 50 }, { id: '2', peso: 50 }], trabalhos: [{ id: '1', peso: 50 }, { id: '2', peso: 50 }], pesoMediaProvas: 50, pesoMediaTrabalhos: 10 },
    { id: '2', nome: 'Física', provas: [{ id: '1', peso: 60 }, { id: '2', peso: 40 }], trabalhos: [{ id: '1', peso: 60 }, { id: '2', peso: 40 }], pesoMediaProvas: 60, pesoMediaTrabalhos: 10 },
    
    // Adicionar mais disciplinas se necessário
  ]);
  
  const [disciplinaSelecionada, setDisciplinaSelecionada] = useState<Disciplina | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const abrirEditor = (selectedDisciplinaId: string) => {
    const disciplina = disciplinas.find(d => d.id === selectedDisciplinaId);
    if (disciplina) {
      setDisciplinaSelecionada(disciplina);
      setIsModalVisible(true);
    }
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

      <Button title="Editar Disciplina" onPress={() => abrirEditor('1')} />
        {/* Adicione outros botões ou lógica conforme necessário */}

      <Modal visible={isModalVisible} animationType="slide">
        {disciplinaSelecionada && (
          <SubjectEditor disciplina={disciplinaSelecionada} onSave={atualizarDisciplina} onCancel={fecharEditor} />
        )}
      </Modal>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: "column",
    paddingTop: ThemedStatusBar.height,
  },
});