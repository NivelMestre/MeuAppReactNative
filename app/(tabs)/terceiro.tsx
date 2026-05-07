// app/terceiro.tsx

import { View, Text, StyleSheet } from 'react-native';

export default function Terceiro() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Terceira Página</Text>
      <Text style={styles.subtitulo}>
        Este é o subtítulo da terceira página.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#bbdf29',
    padding: 20,
  },

  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#de9c30',
  },

  subtitulo: {
    fontSize: 18,
    color: '#de9c30',
    textAlign: 'center',
  },
});