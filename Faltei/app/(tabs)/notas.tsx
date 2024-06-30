import React, { useEffect, useState } from 'react';
import { ThemedStatusBar } from '@/components/ThemedStatusBar';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { StyleSheet, SafeAreaView, useColorScheme, View, Dimensions, ScrollView } from 'react-native';
import axios from 'axios';
import { Table, Row, Rows } from 'react-native-table-component';

const screenWidth = Dimensions.get('window').width; // Definindo screenWidth fora do componente

export default function Notas() {
    
    // retangulo Quadro de Notas
    const tableTrabalhos = ['Trabalhos'];
    const tableProvas = ['Provas'];
    const tableMedia = ['Média'];
    const tableT = ['T1', 'T2']; // colunas variaveis
    const tableP = ['P1', 'P2', 'P3']; // colunas variaveis
    const tableM = ['MP', 'MT']; // colunas variaveis

    // retangulo Objetivos
    const mediaT = ['Média de trabalho que quero chegar'];
    const mediaP = ['Média de provas que quero chegar'];
    const mediaF = ['Média final que quero chegar'];

    // retangulo Analises
    const tableNT = ['Notas dos próximos trabalhos'];
    const tableNP = ['Notas das próximas provas'];
    // usar as colunas variaveis tableT, tableP e tableM do retangulo Quadro de Notas
    const cincobola = ['Para alcançar o 5bola'];
    const obj = ['Para alcançar os objetivos'];


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
            <SafeAreaView style={styles.barraSuperior}>
                <ThemedText type="title" lightColor='#000' darkColor='#fff'>Notas</ThemedText>
            </SafeAreaView>
            <ScrollView>
                <SafeAreaView style={styles.container}>
                    {/* aqui tem que arrumar tanto as colunas personalizaveis e as areas onde o usuario vai colocar as notas e tem que fazer o calcula da media */}
                    <View style={styles.rectangle}>
                        <ThemedText style={styles.rectangleTitle} type="title" lightColor='#000' darkColor='#fff'>Quadro de Notas</ThemedText>
                        <View style={styles.tableRow}>
                            {[1].map((_, index) => (
                                <View key={index} style={styles.tableContainer}>
                                    <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
                                        <Row data={tableTrabalhos} style={styles.head} textStyle={styles.text} />
                                        <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
                                            <Row data={tableT} style={styles.head} textStyle={styles.text} />
                                        </Table>
                                    </Table>
                                </View>
                            ))}
                            {[1].map((_, index) =>(
                                <View key={index} style={styles.tableContainer}>
                                    <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
                                        <Row data={tableProvas} style={styles.head} textStyle={styles.text} />
                                        <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
                                            <Row data={tableP} style={styles.head} textStyle={styles.text} />
                                        </Table>
                                    </Table>
                                </View>
                            ))}
                            {[1].map((_, index) =>(
                                <View key={index} style={styles.tableContainer}>
                                    <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
                                        <Row data={tableMedia} style={styles.head} textStyle={styles.text} />
                                        <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
                                            <Row data={tableM} style={styles.head} textStyle={styles.text} />
                                        </Table>
                                    </Table>
                                </View>
                            ))}
                        </View>
                    </View>

                    {/* aqui tem que arrumar a coluna onde o usuario vai inserir os seus objetivos */}
                    <View style={styles.rectangle}> 
                        <ThemedText style={styles.rectangleTitle} type="title" lightColor='#000' darkColor='#fff'>Objetivos</ThemedText>
                        <View style={styles.tableRow}>
                            {[1].map((_, index) => (
                                <View key={index} style={styles.tableContainer}>
                                    <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
                                        <Row data={mediaT} style={styles.head} textStyle={styles.text} />
                                        <Row data={mediaP} style={styles.head} textStyle={styles.text} />
                                        <Row data={mediaF} style={styles.head} textStyle={styles.text} />
                                    </Table>
                                </View>
                            ))}
                        </View>
                    </View>

                    {/* aqui tem que arrumar as colunas que o usuario vai poder personalizar, fazer as contas para chegar nos objetivos e no 5bola */}
                    <View style={styles.rectangle}>
                        <ThemedText style={styles.rectangleTitle} type="title" lightColor='#000' darkColor='#fff'>Análises</ThemedText>
                            
                        <View style={styles.tableRow}>
                            {[2].map((_, index) => (
                                <View key={index} style={styles.tableContainer}>
                                    <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
                                        <Row data={tableNT} style={styles.head} textStyle={styles.text} />
                                        <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
                                            <Row data={tableT} style={styles.head} textStyle={styles.text} />
                                        </Table>
                                    </Table>
                                </View>
                            ))}
                            {[2].map((_, index) =>(
                                <View key={index} style={styles.tableContainer}>
                                    <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
                                        <Row data={tableNP} style={styles.head} textStyle={styles.text} />
                                        <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
                                            <Row data={tableP} style={styles.head} textStyle={styles.text} />
                                        </Table>
                                    </Table>
                                </View>
                            ))}
                            {[1].map((_, index) =>(
                                <View key={index} style={styles.tableContainer}>
                                    <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
                                        <Row data={cincobola} style={styles.head} textStyle={styles.text} />
                                        <Row data={obj} style={styles.head} textStyle={styles.text} />
                                    </Table>
                                </View>
                            ))}
                        </View>
                    </View>
                </SafeAreaView>
            </ScrollView>
        </ThemedView>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: ThemedStatusBar.height,
    paddingBottom: 50,
    backgroundColor: 'transparent',
  },
  barraSuperior: {
    display: 'flex',
    flexDirection: "column",
    gap: 15,
    paddingTop: ThemedStatusBar.height,
    backgroundColor: 'transparent',
  },
  tableContainer: {
    width: screenWidth / 3 - 10, // 1/3 da largura da tela, menos a margem
    // marginHorizontal: 10, // Espaçamento entre as tabelas
  },
  head: {
    height: 50,
    backgroundColor: '#f1f8ff',
  },
  text: {
    margin: 6,
    textAlign: 'center',
  },
  row: {
    height: 40,
    backgroundColor: '#f1f8ff',
  },
  rectangle: {
    borderWidth: 2,
    borderColor: 'gray',
    padding: 10,
    marginTop: 20,
    marginRight: 5,  // 20 pixels de margem à direita
    marginLeft: 5,   // 40 pixels de margem à esquerda
    marginBottom: 10, // 30 pixels de margem em baixo
    borderRadius: 10, // Cantos arredondados, se desejar
  },
  rectangleTitle: {
    textAlign: 'center',
    marginBottom: 10,
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  
});
