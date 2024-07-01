// SubjectEditor.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import { Disciplina, Prova, Trabalho } from '../(tabs)/types/types';

interface SubjectEditorProps {
    disciplina: Disciplina;
    onSave: (disciplina: Disciplina) => void;
    onCancel: () => void;
}

const SubjectEditor: React.FC<SubjectEditorProps> = ({ disciplina, onSave, onCancel }) => {
    const [id, setID] = useState(disciplina.id);
    const [nome, setNome] = useState(disciplina.nome);
    const [provas, setProvas] = useState(disciplina.provas);
    const [trabalhos, setTrabalhos] = useState(disciplina.trabalhos);
    const [pesoMediaProvas, setPesoProvas] = useState(disciplina.pesoMediaProvas);
    const [pesoMediaTrabalhos, setPesoTrabalhos] = useState(disciplina.pesoMediaTrabalhos);
    const [informacoesAdicionais, setInformacoesAdicionais] = useState(disciplina.informacoesAdicionais);

    const handleSave = () => {
        onSave({
            ...disciplina,
            id,
            nome,
            provas,
            trabalhos,
            pesoMediaProvas,
            pesoMediaTrabalhos,
            informacoesAdicionais,
        });
    };

    const updateProvaPeso = (id: string, newPeso: number) => {
        setProvas(provas.map(prova => prova.id === id ? { ...prova, peso: newPeso } : prova));
    };

    const updateTrabalhoPeso = (id: string, newPeso: number) => {
        setProvas(trabalhos.map(trabalho => trabalho.id === id ? { ...trabalho, peso: newPeso } : trabalho));
    };

    const renderProvaItem = ({ item }: { item: Prova }) => (
        <View>
            <Text>Prova {item.id}</Text>
            <TextInput
                placeholder="Peso da Prova"
                value={String(item.peso)}
                keyboardType="numeric"
                onChangeText={text => updateProvaPeso(item.id, Number(text))}
            />
        </View>
    );

    const renderTrabalhoItem = ({ item }: { item: Prova }) => (
        <View>
            <Text>Trabalho {item.id}</Text>
            <TextInput
                placeholder="Peso do Trabalho"
                value={String(item.peso)}
                keyboardType="numeric"
                onChangeText={text => updateTrabalhoPeso(item.id, Number(text))}
            />
        </View>
    );

    return (
        <View>
            <Text>Editar Disciplina</Text>
                <FlatList
                    data={provas}
                    keyExtractor={item => item.id}
                    renderItem={renderProvaItem}
                />

                <FlatList
                    data={trabalhos}
                    keyExtractor={item => item.id}
                    renderItem={renderTrabalhoItem}
                />

            <TextInput placeholder="Peso da Média das Provas" value={String(pesoMediaProvas)} keyboardType="numeric" onChangeText={text => setPesoProvas(Number(text))} />
            <TextInput placeholder="Peso da Média dos Trabalhos" value={String(pesoMediaTrabalhos)} keyboardType="numeric" onChangeText={text => setPesoTrabalhos(Number(text))} />
            <TextInput placeholder="Informações Adicionais" value={informacoesAdicionais} onChangeText={setInformacoesAdicionais} />
            <Button title="Salvar" onPress={handleSave} />
            <Button title="Cancelar" onPress={onCancel} />

        </View>
    );
};

export default SubjectEditor;
