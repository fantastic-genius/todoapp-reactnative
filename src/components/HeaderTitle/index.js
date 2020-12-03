import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HeaderTitle = ({ title }) => {
  return (
    <View
      style={styles.contanier}
    >
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  contanier: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  title: {
    color: '#d3d7de',
    fontSize: 25,
    lineHeight: 50
  }
})

export default HeaderTitle;
