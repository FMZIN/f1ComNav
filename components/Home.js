import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'expo-image';

import perfil from '../assets/perfil.jpg';

export default function Home() {
  return (
    <View style={styles.container}>
      <Image
        source={perfil}
        style={styles.perfil}
      />
      <View style={styles.descricao2}>
        <Text style={styles.nome}>Yuki Tsunoda</Text>
        <Text style={styles.descricao}>Yuki Tsunoda é um piloto japonês de corridas de automóveis, nascido em 11 de maio de 2000, conhecido por competir na Fórmula 1. Ele estreou na Fórmula 1 na temporada de 2021, competindo pela equipe AlphaTauri.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  perfil:{
    width: 250,
    height: 250,
    borderRadius: 1000,
  },
  nome:{
    fontSize: 20,
    textAlign: "center"
  },
  descricao:{
    marginTop: 5,
    fontSize: 15,
    textAlign: "center",
  },
  descricao2:{
    backgroundColor: "grey",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 30
  },
});