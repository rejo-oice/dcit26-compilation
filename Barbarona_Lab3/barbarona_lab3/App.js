import { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, FlatList } from 'react-native';

export default function App() {
  const [text, setText] = useState('');
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (text.trim() === '') return;
    setItems([...items, text]);
    setText('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TextInput
          style={styles.input}
          placeholder="Enter Item"
          placeholderTextColor="#FFEFDE"
          value={text}
          onChangeText={setText}
        />
        <Pressable style={styles.button} onPress={addItem}>
          <Text style={styles.buttonText}>ADD</Text>
        </Pressable>
      </View>

      <FlatList
        data={items}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>{item}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
    backgroundColor: '#8C0709',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  input: {
    flex: 1,
    borderWidth: 3,
    borderColor: '#FFEFDE',
    color: '#FFEFDE',
    padding: 8,
    marginRight: 10,
    borderRadius: 4,
  },
  button: {
    backgroundColor: '#D66B6C',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 4,
  },
  buttonText: {
    color: '#FFEFDE',
    fontWeight: 'bold',
  },
  item: {
    backgroundColor: '#757575',
    padding: 12,
    marginBottom: 8,
    borderRadius: 4,
  },
  itemText: {
    color: '#FFEFDE',
    fontSize: 16,
  },
});