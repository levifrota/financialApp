import { View, StyleSheet, Button, Text } from 'react-native';
import React from 'react';
import BalancePanelChart from './BalancePanelChart';
import BalancePanelLabel from './BalancePanelLabel';

import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../styles/colors';

const BalancePanel = () => {
  return (
    <LinearGradient
      colors={[Colors.violet, Colors.blue]}
      style={styles.container}>
      <BalancePanelLabel />
      <BalancePanelChart />
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  container: {
    // padding: 10,
  },
});

export default BalancePanel;
