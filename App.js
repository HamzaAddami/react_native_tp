import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function App() {

  const me = {
    nom: 'Addami',
    prenom: 'Hamza',
    date: new Date().toLocaleDateString(),
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('./assets/emsilog.png')}
          style={styles.logo}
        />
        <Text style={styles.title}>EMSI MAARIF</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Nom : <Text style={styles.value}>{me.nom}</Text></Text>
        <Text style={styles.label}>Prénom : <Text style={styles.value}>{me.prenom}</Text></Text>
        <Text style={styles.label}>Date : <Text style={styles.value}>{me.date}</Text></Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 60,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 60,
  },
  logo: {
    width: 200,
    height: 55,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2C786C',
    marginLeft: 10,
  },
  card: {
    width: '80%',
    backgroundColor: '#f2f2f2', 
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  value: {
    fontWeight: '600',
    color: '#333',
  },
});
