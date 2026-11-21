import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Array of products
const products = [
  { key: '1', title: 'Gossip Girl', description: "Rich kids that lack parents' guidance ", rating: '5/5' },
  { key: '2', title: 'The O.C.', description: 'hmm', rating: '3/5' },
  { key: '3', title: 'Pretty Little Liars', description: 'Questionable', rating: '4/5' },
];

function HomeScreen({ navigation }) {
  return (
    <View style={styles.screen}>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('Product', { product: item })}
          >
            <Text style={styles.itemText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

function ProductScreen({ route }) {
  const { product } = route.params;

  return (
    <View style={styles.screen}>
      <Text style={styles.label}>Key: {product.key}</Text>
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.text}>Rating: {product.rating}</Text>
      <Text style={styles.text}>Description: {product.description}</Text>
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
  screenOptions={{
    headerStyle: { backgroundColor: '#8C0709' },
    headerTintColor: '#FFEFDE',
  }}
>
        <Stack.Screen name="Home"
        component={HomeScreen} />
        <Stack.Screen name="Product" component={ProductScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFEFDE',
  },
  item: {
    padding: 15,
    marginBottom: 10,
    borderWidth: 5,
    borderColor: '#8C0709',
    backgroundColor: '#BF6464',
  },
  itemText: {
    fontSize: 16,
    color: '#FFEFDE',
  },
  label: {
    fontSize: 14,
    marginBottom: 5,
    color: '#8C0709',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#8C0709',
  },
  text: {
    fontSize: 19,
    marginBottom: 5,
    color: '#8C0709',
  },
});