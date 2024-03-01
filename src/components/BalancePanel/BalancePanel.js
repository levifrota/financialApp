import { View, Text, StyleSheet, Button } from 'react-native';
import React from 'react';
import BalancePanelChart from './BalancePanelChart';
import BalancePanelLabel from './BalancePanelLabel';

export default function BalancePanel() {
  const addEntry = () => {
    alert('adaf');
  };
  return (
    <View>
      <BalancePanelLabel />
      <BalancePanelChart />
      <Button onPress={addEntry} title="Adicionar" />
    </View>
  );
}
const styles = StyleSheet.create({});
