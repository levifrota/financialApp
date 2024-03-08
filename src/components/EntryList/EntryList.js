import { View, Text, StyleSheet, FlatList } from 'react-native';
import React from 'react';
import EntryListItem from './EntryListItem';

export default function EntryList() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Últimos Lançamentos</Text>
      <EntryListItem />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
});
