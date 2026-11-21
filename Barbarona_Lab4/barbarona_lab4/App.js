import { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import SampleModal from './components/SampleModal';

export default function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <View style={styles.container}>
      <Button title="CLICK ME" onPress={() => setShowModal(true)} />
      <SampleModal visible={showModal} onClose={() => setShowModal(false)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});