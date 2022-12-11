import { StyleSheet, View } from 'react-native';
import Title from './src/components/screens/Title/index.js';
import Main from './src/components/screens/Main/index.js';

export default function App() {
  return (
    <View style={styles.container}>
      <Title/>
      <Main/>
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
