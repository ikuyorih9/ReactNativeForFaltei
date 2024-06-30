import React from 'react';
import { ThemedStatusBar } from '@/components/ThemedStatusBar';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { StyleSheet, SafeAreaView, useColorScheme, View, Button, TouchableOpacity, Text} from 'react-native';
import { useNavigation } from 'expo-router';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../routes';

type disciplinasScreenProp = StackNavigationProp<RootStackParamList, 'disciplinas'>;

export default function Disciplinas() {
  const navigation = useNavigation<disciplinasScreenProp>();
  return (
    <View style={styles.container}>
      <View style={styles.viewButton}>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('addDisciplinas')}>
        <Text style={styles.text}>+</Text>
      </TouchableOpacity>

      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 10,
    gap: 15,
    paddingTop: ThemedStatusBar.height,
    backgroundColor: 'transparent',
  },
  viewButton: {
    paddingLeft: 10,
    paddingRight: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },

  addButton:{
    width: 75,
    height: 75,
    backgroundColor:"#2D3855",
    borderRadius:20
  },

  text:{
    width: "100%",
    height: "100%",
    padding: 5,
    fontSize: 24,
    color:"#fff"
  },

});