import { StyleSheet, Text, View, ImageBackground, ScrollView } from 'react-native';
import { Image } from 'expo-image';

import perfil from '../assets/perfil.jpg';
import foto1 from '../assets/foto1.jpg';
import foto2 from '../assets/foto2.jpeg';
import foto3 from '../assets/foto3.webp';
import foto4 from '../assets/foto4.png';

export default function Sobre() {
  return (
    <ScrollView>    
      <View style={styles.container}>
        <Text style={styles.nome}>Yuki Tsunoda</Text>
        <View style={styles.container2}>
          <Image source={perfil} style={styles.foto}/>
          <Text style={styles.descricao}>Yuki Tsunoda, nascido em 2000 no Japão, iniciou sua carreira no karting em 2010. Ele se destacou na Fórmula 4 Japonesa, terminando em terceiro em 2017. Após competir na Fórmula 3 em 2019 e na Fórmula 2 em 2020, onde também ficou em terceiro, Tsunoda estreou na Fórmula 1 pela Scuderia AlphaTauri em 2021. Ele mostrou talento e velocidade, enfrentando alguns desafios típicos de um novato.</Text>
        </View>

        <View style={styles.container4}>
          <View style={styles.container3}>
            <Image source={foto1} style={styles.foto1}/>
            <View>
              <Text style={styles.altura}>Altura</Text>
            </View>
            <View>
              <Text style={styles.altura2}>Com 1,59 m de altura, Tsunoda é um dos pilotos mais baixos da Fórmula 1 moderna.</Text>
            </View>
          </View>

          <View style={styles.container3}>
            <Image source={foto2} style={styles.foto1}/>
            <View>
              <Text style={styles.altura}>Treinamento Diferenciado</Text>
            </View>
            <View>
              <Text style={styles.altura2}>Como muitos jovens de sua geração, Tsunoda gosta de videogames e já mencionou que jogar simuladores de corrida ajudou em seu treinamento.</Text>
            </View>
          </View>

          <View style={styles.container3}>
            <Image source={foto3} style={styles.foto1}/>
            <View>
              <Text style={styles.altura}>Gosto pela Culinária</Text>
            </View>
            <View>
              <Text style={styles.altura2}>Yuki gosta de cozinhar e frequentemente compartilha fotos de suas refeições caseiras em suas redes sociais.</Text>
            </View>
          </View>

          <View style={styles.container3}>
            <Image source={foto4} style={styles.foto1}/>
            <View>
              <Text style={styles.altura}>Queridinho da Honda</Text>
            </View>
            <View>
              <Text style={styles.altura2}>Tsunoda foi fortemente apoiado pela Honda, sendo parte de seu programa de desenvolvimento de pilotos desde cedo, o que facilitou sua entrada na Fórmula 1.</Text>
            </View>
          </View>
        </View>


      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container2: {
    alignItems: "center"
  },
  container3: {
    marginTop: 20,
    margin: 10,
    flexDirection: "column",
    flex: 1
  },
  container4: {
  },
  nome: {
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10,
    fontWeight: "bold",
    alignItems: "flex-start",
    marginLeft: 40
  },
  foto: {
    width: 400,
    height: 230
  },
  descricao: {
    marginLeft: 42,
    marginRight: 42,
    marginTop: 10,
    marginBottom: 10
  },
  foto1: {
    width: 100,
    height: 100
  },
  altura: {
    marginLeft: 10,
    fontWeight: "bold",
    fontSize: 15,
  },
  altura2: {
    marginLeft: 10,
  }
});
