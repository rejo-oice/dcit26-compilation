import 'react-native-gesture-handler';
import * as React from 'react';
import { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  Button,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  useWindowDimensions,
  Platform,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

function HomeScreen({ navigation }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchUser = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://randomuser.me/api');
      const json = await response.json();
      setUser(json.results[0]);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <View style={styles.home}>
      {loading || !user ? (
        <ActivityIndicator size="large" color="#8C0709" />
      ) : (
        <>
          <TouchableOpacity
            onPress={() => navigation.navigate('Profile', { user })}
          >
            <Image source={{ uri: user.picture.large }} style={styles.homePicture} />
          </TouchableOpacity>
          <Text style={styles.name}>
            {user.name.first} {user.name.last}
          </Text>
        </>
      )}
      <View style={styles.button}>
        <Button title="RANDOM USER" color="#8C0709" onPress={fetchUser} />
      </View>
    </View>
  );
}

function DetailRow({ label, value }) {
  return (
    <View style={styles.row}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

function ProfileScreen({ route }) {
  const { height } = useWindowDimensions();
  const { user } = route.params;
  const address = `${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.country}`;

  return (
    <View style={styles.profileContainer}>
      <ScrollView
        style={[styles.scroll, Platform.OS === 'web' && { height: height - 60 }]}
        contentContainerStyle={styles.profileContent}
      >
        <View style={styles.header}>
          <Image source={{ uri: user.picture.large }} style={styles.profilePicture} />
          <Text style={styles.fullName}>
            {user.name.title} {user.name.first} {user.name.last}
          </Text>
          <Text style={styles.username}>@{user.login.username}</Text>
        </View>

        <View style={styles.card}>
          <View style={styles.sectionRow}>
            <Ionicons name="person" size={18} color="#8C0709" />
            <Text style={styles.section}>About</Text>
          </View>
          <DetailRow label="Age" value={user.dob.age} />
          <DetailRow label="Birthday" value={user.dob.date} />
          <DetailRow label="Gender" value={user.gender} />
          <DetailRow label="Address" value={address} />
          <DetailRow label="Postcode" value={String(user.location.postcode)} />
          <DetailRow
            label="Coordinates"
            value={`${user.location.coordinates.latitude}, ${user.location.coordinates.longitude}`}
          />
          <DetailRow
            label="Timezone"
            value={`${user.location.timezone.offset} (${user.location.timezone.description})`}
          />
        </View>

        <View style={styles.card}>
          <View style={styles.sectionRow}>
            <Ionicons name="mail" size={18} color="#8C0709" />
            <Text style={styles.section}>Contact</Text>
          </View>
          <DetailRow label="Email" value={user.email} />
          <DetailRow label="Phone" value={user.phone} />
          <DetailRow label="Cell" value={user.cell} />
        </View>

        <View style={styles.card}>
          <View style={styles.sectionRow}>
            <Ionicons name="ellipsis-horizontal" size={18} color="#8C0709" />
            <Text style={styles.section}>Other</Text>
          </View>
          <DetailRow label="Username" value={user.login.username} />
          <DetailRow label="UUID" value={user.login.uuid} />
          <DetailRow label="Nationality" value={user.nat} />
          <DetailRow label="ID" value={`${user.id.name} ${user.id.value}`} />
          <DetailRow
            label="Registered"
            value={`${user.registered.date} (${user.registered.age} years)`}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ cardStyle: { flex: 1 } }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eeeeee',
  },
  homePicture: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 4,
    borderColor: '#8C0709',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 15,
  },
  button: {
    marginTop: 20,
  },
  profileContainer: {
    flex: 1,
    backgroundColor: '#8C0709',
  },
  scroll: {
    flex: 1,
    width: '100%',
  },
  profileContent: {
    padding: 20,
    paddingBottom: 40,
  },
  header: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    marginBottom: 15,
  },
  profilePicture: {
    width: 130,
    height: 130,
    borderRadius: 65,
    borderWidth: 4,
    borderColor: '#8C0709',
  },
  fullName: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 12,
  },
  username: {
    fontSize: 14,
    color: 'gray',
    marginTop: 2,
  },
  card: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
  },
  sectionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#8C0709',
    paddingBottom: 8,
    marginBottom: 8,
  },
  section: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#8C0709',
    marginLeft: 6,
  },
  row: {
    marginBottom: 8,
  },
  label: {
    fontSize: 12,
    color: 'gray',
    textTransform: 'uppercase',
  },
  value: {
    fontSize: 15,
    color: '#222',
  },
});