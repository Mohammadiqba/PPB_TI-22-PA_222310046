import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import Tugas1LabPPB from './Component/Tugas1LabPPB';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Tugas1LabPPB />
    </SafeAreaView>
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
