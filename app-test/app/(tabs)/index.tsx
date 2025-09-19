import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Page() {
  const [count, setCount] = useState<number>(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>👋 Hello iPhone avec Expo Router (TS) !</Text>
      <Text style={styles.counter}>Compteur : {count}</Text>
      <Button title="➕ Incrémenter" onPress={() => setCount(count + 1)} />
      <Button title="🔄 Réinitialiser" onPress={() => setCount(0)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  counter: {
    fontSize: 22,
    marginBottom: 20,
  },
});
