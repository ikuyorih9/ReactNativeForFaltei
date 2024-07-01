import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface HeaderProps {
    title: string;
  }
  
  const Header: React.FC<HeaderProps> = ({ title }) => {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    );
  };

const styles = StyleSheet.create({
  header: {
    width:"100%",
    height: 30,
    backgroundColor: '#2d3855',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Header;
