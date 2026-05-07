import { View, Text, StyleSheet } from 'react-native';

export default function Primeiro() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Primeiro ano</Text>
      <Text style={styles.subtitulo}>
        Certificado de auxiliar técnico em informática
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2fe350',
    padding: 20,
  },

  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#293edf',
  },

  subtitulo: {
    fontSize: 18,
    color: '#293edf',
    textAlign: 'center',
  },
});