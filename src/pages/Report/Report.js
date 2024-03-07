import { View, StyleSheet, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import React from 'react';

import EntryLabel from '../../components/BalanceLabel/BalanceLabel';
import EntrySummary from '../../components/EntrySummary/EntrySummary';
import EntryList from '../../components/EntryList/EntryList';

export default function Report() {
  return (
    <View>
      <EntryLabel />
      <View>
        <Picker>
          <Picker.Item label="Todas as Categorias" />
        </Picker>
        <Picker>
          <Picker.Item label="Últimos 7 dias" />
        </Picker>
      </View>
      <EntrySummary />
      <EntryList />

      <View>
        <Button title="Salvar" />
        <Button title="Fechar" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
