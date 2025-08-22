import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import random from 'random';

const randomNumber = random.int(1, 10); // Generates a random integer between 1 and 10 (inclusive)
console.log(randomNumber);

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>randomNumber</Text>
      <StatusBar style="auto" />
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
