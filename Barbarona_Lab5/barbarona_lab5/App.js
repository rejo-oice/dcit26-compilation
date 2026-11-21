import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Button, StyleSheet, Platform } from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.screen}>
      <Button title="PROFILE" 
      color="#D66B6C"
      onPress={() => navigation.navigate('Profile')} />
    </View>
  );
}

function ProfileScreen({ navigation }) {
  return (
    <View style={styles.screen}>
      <Button title="GO BACK HOME" 
      color="#D66B6C"
      onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

function AboutScreen({ navigation }) {
  return (
    <View style={styles.screen}>
      <Button title="GO BACK" 
      color="#D66B6C"
      onPress={() => navigation.navigate('HomeStack')} />
    </View>
  );
}

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const menuButton = (navigation) => ({
  headerLeft: () => (
    <Button
  title="="
  color={Platform.OS === 'ios' ? 'white' : '#8C0709'}
  onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
/>
  ),
});

// Stack 1: Home and Profile
function HomeStack() {
  return (
    <Stack.Navigator
  screenOptions={{
    headerStyle: { backgroundColor: '#8C0709' },
    headerTintColor: 'white',
  }}
>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }) => menuButton(navigation)}
      />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}

// Stack 2: About (separate stack)
function AboutStack() {
  return (
    <Stack.Navigator
  screenOptions={{
    headerStyle: { backgroundColor: '#8C0709' },
    headerTintColor: 'white',
  }}
>
      <Stack.Screen
        name="About"
        component={AboutScreen}
        options={({ navigation }) => menuButton(navigation)}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{ headerShown: false }}>
        <Drawer.Screen
          name="HomeStack"
          component={HomeStack}
          options={{ title: 'Home' }}
        />
        <Drawer.Screen
          name="AboutStack"
          component={AboutStack}
          options={{ title: 'About' }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});