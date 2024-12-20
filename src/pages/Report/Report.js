import { View, StyleSheet, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import React from 'react';

import BalanceLabel from '../../components/BalanceLabel/BalanceLabel';
import EntrySummary from '../../components/EntrySummary/EntrySummary';
import EntryList from '../../components/EntryList/EntryList';

export default function Report() {
  const currentBalance = 2065.11;

  const entries = [
    { key: '1', description: 'Padaria Asa Branca', amount: 10 },
    { key: '2', description: 'Supermercado Isadora', amount: 190 },
    { key: '3', description: 'Posto Ipiranga', amount: 30 },
  ];

  const entriesGrouped = [
    { key: '1', description: 'Alimentação', amount: 200 },
    { key: '2', description: 'Combustível', amount: 12 },
    { key: '3', description: 'Aluguel', amount: 120 },
    { key: '4', description: 'Lazer', amount: 250 },
    { key: '5', description: 'Outros', amount: 1200 },
  ];

  return (
    <View>
      <BalanceLabel currentBalance={currentBalance} />
      <View>
        <Picker>
          <Picker.Item label="Todas as Categorias" />
        </Picker>
        <Picker>
          <Picker.Item label="Últimos 7 dias" />
        </Picker>
      </View>
      <EntrySummary entriesGrouped={entriesGrouped} />
      <EntryList entries={entries} />

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
