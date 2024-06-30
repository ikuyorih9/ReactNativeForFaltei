import React, { useEffect, useState } from 'react';
import { ThemedStatusBar } from '@/components/ThemedStatusBar';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { StyleSheet, SafeAreaView, useColorScheme, View, Dimensions } from 'react-native';
import axios from 'axios';
import { Table, Row, Rows } from 'react-native-table-component';

const screenWidth = Dimensions.get('window').width; // Definindo screenWidth fora do componente

export default function Notas() {
    

    // Cabeçalho da tabela
    // const tableHead = ['P1', 'P2', 'P3'];
    const tableHead = ['Quadro de Notas'];
    const tableTrabalhos = ['Trabalhos'];
    const tableProvas = ['Provas'];
    const tableMedia = ['Média'];
    const tableHead3 = ['T1', 'T2', 'P1', 'P2', 'P3', 'MP', 'MT'];

    // Dados da tabela (substitua com os dados reais da disciplina)
    // const tableData = data.map((passenger) => [
        // passenger.p1,
        // passenger.p2,
        // passenger.p3,
        // Math.floor(Math.random() * 100) // Substitua com a nota real
    // ]);

  return (
    <ThemedView>
      <ThemedStatusBar
        lightColor={'#2D3855'} // Cor para o tema claro
        darkColor={'#2D3855'} // Cor para o tema escuro
        lightContent={useColorScheme() === 'light' ? true : false} // Conteúdo da barra de status claro
      />
      {/* Usar a SafeAreaView após o DefaultTopBar para evitar que o conteúdo fique atrás da barra de status no IOS */}
      <SafeAreaView style={styles.container}>
        <ThemedText type="title" lightColor='#000' darkColor='#fff'>Notas</ThemedText>
        <View style={styles.tableContainer}>
          <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
            <Row data={tableHead} style={styles.head} textStyle={styles.text} />
            <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
                <Row data={tableTrabalhos} style={styles.tipos} textStyle={styles.text} />
                <Row data={tableProvas} style={styles.tipos} textStyle={styles.text} />
                <Row data={tableMedia} style={styles.tipos} textStyle={styles.text} />
            </Table>
            {/* <Rows data={tableData} textStyle={styles.text} /> */}
          </Table>
        </View>
      </SafeAreaView>
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
  tableContainer: {
    marginTop: 20,
  },
  head: {
    height: 50,
    backgroundColor: '#f1f8ff',
  },
  tipos: {
    height: 40,
    backgroundColor: '#f1f8ff',
    width: screenWidth / 3, // 1/3 da largura da tela, menos a margem
  },
  text: {
    margin: 6,
    textAlign: 'center',
  },
});
