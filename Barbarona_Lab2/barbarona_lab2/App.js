import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Student Profile</Text>

      <Text style={styles.label}>Name:</Text>
      <Text style={styles.value}>Rejoice T. Barbarona</Text>

      <Text style={styles.label}>Age:</Text>
      <Text style={styles.value}>20</Text>

      <Text style={styles.label}>Course/Year/Section:</Text>
      <Text style={styles.value}>BS Computer Science, 3rd Year, Section 5</Text>

      <Text style={styles.label}>About Me:</Text>
      <Text style={styles.value}>
        I am a dedicated individual who strives to achieve my goals and aspirations in life. I am also a passionate and creative person who enjoys turning imaginative ideas into reality.
      </Text>

      <Text style={styles.label}>Achievements:</Text>
      <Text style={styles.value}>- Student Organization Member (2026)</Text>

      <Text style={styles.label}>Skills:</Text>
      <Text style={styles.value}>- Java</Text>
      <Text style={styles.value}>- Web Development</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
    backgroundColor: '#8C0709',
  },
  title: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    marginTop: 12,
  },
  value: {
    fontSize: 14,
    marginTop: 2,
    color: 'white',
  },
});