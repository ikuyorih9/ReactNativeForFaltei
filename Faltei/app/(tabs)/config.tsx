import React, { useState, useEffect } from 'react';
import { ThemedStatusBar } from '@/components/ThemedStatusBar';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { ScrollView, StyleSheet, useColorScheme, View, TextInput, Switch } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import { useRouter } from 'expo-router';
// import { alterarSenhaEmail } from './alterarSenhaEmail';

export default function Config() {
  const router = useRouter();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [creditValue, setCreditValue] = useState('');
    const [disciplineColor, setDisciplineColor] = useState('#000000');
    // const [isDarkMode, setIsDarkMode] = useState(false);
    // const [lightContent, setIsDarkMode] = useState(false);
    const [lightContent, setLightContent] = useState(useColorScheme() === 'light');
    const [notificationsEnabled, setNotificationsEnabled] = useState(false);
    const [selectedDisciplina, setSelectedDisciplina] = useState('');
    
    const navigation = useNavigation();
    
    const disciplinas = [
      { id: '1', nome: 'Matemática' },
      // Adicione as disciplinas pelo banco de dados
    ];

    // Atualizar o estado de lightContent quando o esquema de cores mudar
    // useEffect(() => {
    //   setLightContent(useColorScheme() === 'light');
    // }, [useColorScheme()]);

  return (
    <ThemedView lightColor={'#FFFFFF'} darkColor={'#121212'} style={styles.container}>
        <ThemedStatusBar
            lightColor={'#2D3855'} // Cor para o tema claro
            darkColor={'#2D3855'} // Cor para o tema escuro
            lightContent={useColorScheme() === 'light' ? true : false} // Conteúdo da barra de status claro
        />

        <ScrollView>
            {/* configuracoes de usuario */}
            {/* <View style={styles.rectangle}>
                <ThemedText type="title" style={styles.sectionTitle}>Configurações do Usuário</ThemedText>
                <ThemedText style={styles.label}>Nome: {name}</ThemedText>
                <ThemedText style={styles.label}>Email: {email}</ThemedText> */}
                {/* nao estou conseguindo entrar na tela de alterar */}
                {/* <View style={styles.buttonRow}>
                  <TouchableOpacity style={styles.button} onPress={() => router.push('alterarSenhaEmail')}>
                    <Text style={styles.buttonText}>Alterar Email</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.button} onPress={() => router.push('alterarSenhaEmail')}>
                    <Text style={styles.buttonText}>Alterar Senha</Text>
                  </TouchableOpacity>
                </View>
            </View> */}

            {/* Configurações sobre Créditos */}
            <View style={styles.rectangle}>
                <ThemedText type="title" style={styles.sectionTitle}>Configurações sobre Créditos</ThemedText>
                <TextInput
                    style={styles.input}
                    placeholder="Valor (em horas) de cada crédito. Ex.: 1 crédito equivale 3h na semana."
                    value={creditValue}
                    onChangeText={setCreditValue}
                    keyboardType="numeric"
                />
            </View>

            {/* Configurações de Aparência */}
            <View style={styles.rectangle}>
                <ThemedText type="title" style={styles.sectionTitle}>Configurações de Aparência</ThemedText>

                <ThemedText type="title" style={styles.sectionSubtitle}>Cor de cada disciplina:</ThemedText>
                {/* Seletor de Disciplinas */}
                <View style={styles.section}>
                  <ThemedText type="title" style={styles.sectionSubtitle}>Selecione uma Disciplinas</ThemedText>
                  <Picker
                    selectedValue={selectedDisciplina}
                    onValueChange={(itemValue) => setSelectedDisciplina(itemValue)}
                    style={styles.picker}
                  >
                    {disciplinas.map((disciplina) => (
                      <Picker.Item key={disciplina.id} label={disciplina.nome} value={disciplina.id} />
                    ))}
                  </Picker>
                  <ThemedText style={styles.selectedText}>Disciplina Selecionada: {selectedDisciplina}</ThemedText>
                </View>
                <ThemedText style={styles.selectedText}>Cor para a disciplina selecionada: {selectedDisciplina}</ThemedText>
                <TextInput
                    style={styles.input}
                    placeholder="Cor das disciplinas"
                    value={disciplineColor}
                    onChangeText={setDisciplineColor}
                    // tem que jogar o codigo da cor no bd
                />

                {/*<ThemedText type="title" style={styles.sectionSubtitle}>Tema do aplicativo:</ThemedText>
                <View style={styles.switchContainer}>
                  <ThemedText style={styles.label}>Modo Escuro</ThemedText>
                  <Switch
                      value={lightContent}
                      onValueChange={setLightContent}
                  />
                </View> */}
            </View>

            {/* Configurações de Notificações */}
            {/* <View style={styles.rectangle}>
                <ThemedText type="title" style={styles.sectionTitle}>Configurações de Notificações</ThemedText>
                <View style={styles.switchContainer}>
                <ThemedText style={styles.label}>Habilitar Notificações</ThemedText>
                <Switch
                    value={notificationsEnabled}
                    onValueChange={setNotificationsEnabled}
                />
                </View>
            </View> */}

            {/* Interligação com Google Calendar */}
            {/* <View style={styles.section}>
                <ThemedText type="title" style={styles.sectionTitle}>Interligação com Google Calendar</ThemedText>
                <Button
                title="Conectar ao Google Calendar"
                onPress={() => {
                    // Lógica para integrar com Google Calendar
                }}
                />
            </View> */}

        </ScrollView>

    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  section: {
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 20,
    marginBottom: 10,
  },
  sectionSubtitle: {
    fontSize: 15,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginVertical: 5,
  },
  label: {
    fontSize: 16,
  },
  rectangle: {
    borderWidth: 2,
    borderColor: 'gray',
    padding: 10,
    marginTop: 40,
    marginRight: 5,  // 20 pixels de margem à direita
    marginLeft: 5,   // 40 pixels de margem à esquerda
    marginBottom: 10, // 30 pixels de margem em baixo
    borderRadius: 10, // Cantos arredondados, se desejar
  },
  rectangleTitle: {
    textAlign: 'center',
    marginBottom: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    padding: 10,
    borderWidth: 2,
    borderColor: 'gray',
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 5,
  },
  buttonText: {
    // color: '#fff',
    // fontSize: 16,
  },
  picker: {
    height: 50,
    width: '100%',
  },
  selectedText: {
    fontSize: 16,
    marginTop: 10,
  },
});