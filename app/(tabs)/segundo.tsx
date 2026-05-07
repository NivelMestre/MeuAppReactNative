// app/segundo.tsx

import { View, Text, StyleSheet } from 'react-native';

export default function Segundo() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Segunda Página</Text>
      <Text style={styles.subtitulo}>
        Este é o subtítulo da segunda página.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#293edf',
    padding: 20,
  },

  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#bbdf29',
  },

  subtitulo: {
    fontSize: 18,
    color: '#bbdf29',
    textAlign: 'center',
  },
});