import React from 'react';
import {
  Button,
  FlatList,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Main from './pages/main/index.js';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const addEntry = () => {
    alert('adaf');
  };

  return (
    <View style={{ padding: 10 }}>
      <Text
        style={{
          fontSize: 22,
          fontWeight: 'bold',
          marginTop: 10,
          marginBottom: 10,
        }}>
        Saldo: $2.102,45
      </Text>
      <Button onPress={addEntry} title="Adicionar" />

      <Text
        style={{
          fontSize: 22,
          fontWeight: 'bold',
          marginTop: 10,
          marginBottom: 10,
        }}>
        Categorias
      </Text>

      <FlatList
        data={[
          { key: 'Alimentação: $200' },
          { key: 'Combustível: $12' },
          { key: 'Aluguel: $120' },
          { key: 'Lazer: $250' },
          { key: 'Outros: $1200' },
        ]}
        renderItem={({ item }) => <Text>{item.key}</Text>}
      />
      <Text
        style={{
          fontSize: 22,
          fontWeight: 'bold',
          marginTop: 10,
          marginBottom: 10,
        }}>
        Últimos Lançamentos
      </Text>

      <FlatList
        data={[
          { key: 'Padaria Asa Branca: $10' },
          { key: 'Supermercado Isadora: $190' },
          { key: 'Posto Ipiranga: $190' },
        ]}
        renderItem={({ item }) => <Text>{item.key}</Text>}
      />

      <Main />
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;