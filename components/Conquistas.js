import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'expo-image';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Pagina de Conquistas</Text>
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
});
