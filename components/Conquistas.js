import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { Image } from 'expo-image';

import fundo from '../assets/fundo3.jpg';
import foto5 from '../assets/foto5.jpg';
import foto6 from '../assets/foto6.jpg';
import foto7 from '../assets/foto7.jpg';
import foto8 from '../assets/foto8.jpg';
import { ScrollView } from 'react-native-web';

export default function Home() {
  return (
    <ScrollView>
      <ImageBackground source={fundo} style={styles.fundo2}>
        <View style={styles.container}>
          <View style={styles.container3}>
            <View style={styles.container2}>
              <Text style={styles.escrita3}>Yuki Tsunoda em números</Text>
              <Text style={styles.escrita2}>Yuki Tsunoda em correu inúmeras corridas na fórmula 4, na fórmula 3 correu cerca de 16-18 corridas, na fórmula 2 cerca de 24 corridas, já na fórmula 1 correu cerca de 23 corridas até o momento, na temporada final de 2021</Text>
              <Text style={styles.descricao3}>🏆 94 Corridas Disputadas</Text>
              <Text style={styles.descricao3}>🏆 5 Posições no Podio</Text>
              <Text style={styles.descricao3}>🏆 2 Vitorias</Text>
              <Text style={styles.descricao4}>🏆 0 Campeão Mundial</Text>
            </View>
          </View>

          <View style={styles.container2}>
            <Text style={styles.escrita}>Grande Prêmio da Áustralia de 2019</Text>
            <Image source={foto5} style={styles.foto}/>
          </View>

          <View style={styles.container2}>
            <Text style={styles.escrita}>Grande Prêmio da Grá-Bretanha de 2019</Text>
            <Image source={foto6} style={styles.foto}/>
          </View>

          <View style={styles.container2}>
            <Text style={styles.escrita}>Sprint Race em Silverstone</Text>
            <Image source={foto7} style={styles.foto}/>
          </View>

          <View style={styles.container2}>
            <Text style={styles.escrita}>Feature Race em Spa-Francorchamps</Text>
            <Image source={foto8} style={styles.foto}/>
          </View>

        </View>
      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  container2: {
    textAlign: "center",
    alignItems: "center",
    backgroundColor: "black",
    opacity: "50",
    marginTop: 20,
    marginBottom: 20
  },
  container3: {
    marginLeft: 20,
    marginRight: 20
  },
  foto: {
    width: 350,
    height: 200
  },
  escrita: {
    padding: 10,
    color: "white"
  },
  escrita2: {
    color: "#969696",
    fontSize: 12,
    marginLeft: 40,
    marginRight: 40,
    alignItems: "center",
    textAlign: "center",
    marginBottom: 10
  },
  escrita3: {
    fontWeight: "bold",
    color: "white",
    fontSize: 15,
    padding: 10
  },
  descricao3:{
    color: "#969696",
    marginTop: 10,
    borderRadius: 10,
    fontWeight: "bold",
    fontSize: 15
  },
  descricao4:{
    color: "#969696",
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 10,
    fontWeight: "bold",
    fontSize: 15
  },
 fundo:{
    flex: 1
  },
});
