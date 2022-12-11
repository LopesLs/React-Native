import { StyleSheet, View } from 'react-native';
import Title from './src/components/screens/Title/index.js';
import Form from './src/components/screens/Form/index.js'

export default function App() {
  return (
    <View style={styles.container}>
      <Title/>
      <Form/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e5e5',
    paddingTop: 80
  },
});
