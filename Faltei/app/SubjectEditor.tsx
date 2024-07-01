// SubjectEditor.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { Disciplina } from './types';

interface SubjectEditorProps {
  disciplina: Disciplina;
  onSave: (disciplina: Disciplina) => void;
  onCancel: () => void;
}

const SubjectEditor: React.FC<SubjectEditorProps> = ({ disciplina, onSave, onCancel }) => {
  const [nome, setNome] = useState(disciplina.nome);
  const [provas, setProvas] = useState(disciplina.provas);
  const [trabalhos, setTrabalhos] = useState(disciplina.trabalhos);
  const [pesoProvas, setPesoProvas] = useState(disciplina.pesoProvas);
  const [pesoTrabalhos, setPesoTrabalhos] = useState(disciplina.pesoTrabalhos);
  const [informacoesAdicionais, setInformacoesAdicionais] = useState(disciplina.informacoesAdicionais);

  const handleSave = () => {
    onSave({
      ...disciplina,
      nome,
      provas,
      trabalhos,
      pesoProvas,
      pesoTrabalhos,
      informacoesAdicionais,
    });
  };

  return (
    <View>
      <Text>Editar Disciplina</Text>
      <TextInput placeholder="Nome" value={nome} onChangeText={setNome} />
      <TextInput placeholder="Provas" value={String(provas)} keyboardType="numeric" onChangeText={text => setProvas(Number(text))} />
      <TextInput placeholder="Trabalhos" value={String(trabalhos)} keyboardType="numeric" onChangeText={text => setTrabalhos(Number(text))} />
      <TextInput placeholder="Peso das Provas" value={String(pesoProvas)} keyboardType="numeric" onChangeText={text => setPesoProvas(Number(text))} />
      <TextInput placeholder="Peso dos Trabalhos" value={String(pesoTrabalhos)} keyboardType="numeric" onChangeText={text => setPesoTrabalhos(Number(text))} />
      <TextInput placeholder="Informações Adicionais" value={informacoesAdicionais} onChangeText={setInformacoesAdicionais} />
      <Button title="Salvar" onPress={handleSave} />
      <Button title="Cancelar" onPress={onCancel} />
    </View>
  );
};

export default SubjectEditor;
