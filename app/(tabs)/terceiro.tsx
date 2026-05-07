import { View, Text, StyleSheet } from 'react-native';

export default function Terceiro() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Terceiro ano</Text>
      <Text style={styles.subtitulo}>
        Certificado de técnico em informática para internet
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
    color: '#e28b00',
  },

  subtitulo: {
    fontSize: 18,
    color: '#e28b00',
    textAlign: 'center',
  },
});