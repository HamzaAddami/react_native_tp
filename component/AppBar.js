// /components/AppBar.js

import React, { useContext } from "react"; 
import { View, Text, Button, StyleSheet, SafeAreaView } from "react-native"; 
import { AuthContext } from "../context/AuthContext"; 

export default function AppBar({ title }) {
  const { logout } = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.bar}>
        <View style={styles.buttonContainer}>
          <Button title="Logout" onPress={logout} color="#fff" />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#ce162bff', 
  },
  bar: {
    height: 60, 
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  buttonContainer: {
    position: 'center',

  }
});