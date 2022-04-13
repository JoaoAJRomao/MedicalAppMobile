import { StyleSheet, SafeAreaView } from 'react-native';
import Routes from './src/Routes';

export default function App() {
  if (__DEV__) {
    require('react-devtools');
  }
  return (
    <SafeAreaView style={styles.container}>
      <Routes/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  } 
});
