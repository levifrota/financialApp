import { View, StyleSheet, Button, Text } from 'react-native';
import React from 'react';
import BalancePanelChart from './BalancePanelChart';
import BalancePanelLabel from './BalancePanelLabel';

const BalancePanel = () => {
  const addEntry = () => {
    alert('teste');
  };
  return (
    <View style={styles.container}>
      <BalancePanelLabel />
      <BalancePanelChart />
      <Button onPress={addEntry} title="Adicionar" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 10,
  },
});

export default BalancePanel;
