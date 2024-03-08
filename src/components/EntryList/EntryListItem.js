import { View, Text, FlatList, StyleSheet } from 'react-native';
import React from 'react';

export default function EntryListItem() {
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          { key: 'Padaria Asa Branca: $10' },
          { key: 'Supermercado Isadora: $190' },
          { key: 'Posto Ipiranga: $190' },
        ]}
        renderItem={({ item }) => <Text>{item.key}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
});
