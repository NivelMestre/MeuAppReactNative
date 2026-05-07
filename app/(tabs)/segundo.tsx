import { View, Text, StyleSheet } from 'react-native';

export default function Segundo() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Segundo ano</Text>
      <Text style={styles.subtitulo}>
        Certificado em programador de computadores
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