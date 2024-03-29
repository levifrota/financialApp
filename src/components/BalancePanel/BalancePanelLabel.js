import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const BalancePanelLabel = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Saldo Atual</Text>
      <Text style={styles.value}>$2.102,45</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    color: 'white',
  },
  value: {
    fontSize: 22,
  },
});

export default BalancePanelLabel;
