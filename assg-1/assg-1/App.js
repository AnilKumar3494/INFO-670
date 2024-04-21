import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const userID = 'ak4448'

  return (
    <View style={styles.container}>
      <Text style={styles.textbox}>`Hello, I'm Anil Kumar Karapa - ${userID} . Using React Native to build Apps!`</Text>
      <StatusBar style="auto" />
      <Button title='Press me'>
        Press me
      </Button>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  textbox: {
    backgroundColor: '#ffeedd',
    fontSize: 20,
    fontWeight: "bold",
  }
});
