import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  ScrollView,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  const [loading, setLoading] = useState(true);

  // Simula conexão com IoT
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  // Sensores fictícios
  const sensores = Array.from({ length: 15 }, (_, i) => ({
    id: i.toString(),
    nome: `Sensor ${100 + i} - Linha de Montagem`,
    valor:
      i % 2 === 0
        ? `${(Math.random() * 80 + 10).toFixed(2)} °C`
        : `${(Math.random() * 80 + 10).toFixed(2)} Bar`,
  }));

  // Tela de carregamento
  if (loading) {
    return (
      <SafeAreaProvider>
        <SafeAreaView style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#1565C0" />
          <Text style={styles.loadingText}>Conectando ao sistema IoT...</Text>
        </SafeAreaView>
      </SafeAreaProvider>
    );
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>

        {/* Status da fábrica */}
        <ScrollView style={styles.header} horizontal>
          <View>
            <Text style={styles.titulo}>
              Monitoramento IoT - Unidade São Carlos
            </Text>
            <Text style={styles.status}>
              Status: Conectado à Rede Industrial
            </Text>
            <Text style={styles.atualizacao}>
              Última atualização: Agora mesmo
            </Text>
          </View>
        </ScrollView>

        {/* Lista de sensores */}
        <FlatList
          data={sensores}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.lista}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.nomeSensor}>{item.nome}</Text>
              <Text style={styles.valorSensor}>{item.valor}</Text>
            </View>
          )}
        />

      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eaeef2',
  },

  // Loading
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
  },

  // Header
  header: {
    backgroundColor: '#1565C0',
    padding: 15,
  },
  titulo: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  status: {
    color: '#fff',
    marginTop: 5,
  },
  atualizacao: {
    color: '#fff',
    marginTop: 2,
  },

  // Lista
  lista: {
    padding: 10,
  },

  // Card sensor
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 3,
  },
  nomeSensor: {
    fontWeight: '600',
    color: '#333',
  },
  valorSensor: {
    fontWeight: 'bold',
    color: '#C62828',
  },
});