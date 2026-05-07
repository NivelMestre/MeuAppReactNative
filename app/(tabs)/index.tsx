import { View, Text, Image, StyleSheet } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>
      
      <Image
        source={{ uri: 'https://bkpsitecpsnew.blob.core.windows.net/uploadsitecps/sites/1/2022/08/cps-logo-identidade.jpg' }}
        style={styles.imagemTopo}
      />

      <Text style={styles.texto1}>
        Etec de Itanhaém
      </Text>

      <Image
        source={{ uri: 'https://s3.static.brasilescola.uol.com.br/be/2023/09/1-escudo-do-corinthians.jpg' }}
        style={styles.imagem2}
      />

      <Text style={styles.texto2}>
        Informática para internet
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d31717',
    padding: 20,
  },

  imagemTopo: {
    width: 350,
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },

  texto1: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#ffffff',
  },

  imagem2: {
    width: 250,
    height: 250,
    borderRadius: 10,
    marginBottom: 20,
  },

  texto2: {
    fontSize: 16,
    textAlign: 'center',
    color: '#ffffff',
  },
});