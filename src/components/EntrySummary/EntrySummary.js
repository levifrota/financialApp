import { View, StyleSheet } from 'react-native';
import React from 'react';
import EntrySummaryChart from './EntrySummaryChart';
import EntrySummaryList from './EntrySummaryList';

export default function EntrySummary() {
  return (
    <View style={styles.container}>
      <EntrySummaryChart />
      <EntrySummaryList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
});
