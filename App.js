import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./navigation/AppNavigator";
import AuthProvider, { AuthContext } from "./context/AuthContext";
import AppDrawer from "./navigation/AppDrawer";
import LoginScreen from "./screens/LoginScreen";
import { Provider } from "react-redux";
import { store } from "./store/store";

function RootNavigator() {
  const { user } = React.useContext(AuthContext);
  return user ? <AppDrawer /> : <LoginScreen />;
}

// Main App pour le TP_4
/* export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}*/

// Main App pour le TP_5 et TP_6 avec AuthContext et Redux
/* export default function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </AuthProvider>
    </Provider>
  );
} */

// Main App pour le TP_7 avec ThemeContext

import { useContext, useState } from "react";
import { ThemeProvider, ThemeContext } from "./context/ThemeContext";
import { View, StyleSheet, Button, Text } from "react-native";
import TodoListFetchScreen from "./screens/TodoListFetchScreen";
import TodoListOfflineScreen from "./screens/TodoListOfflineScreen";
function MainApp() {
  const { theme } = useContext(ThemeContext);
  const [isOffline, setIsOffline] = useState(false);

  return (
    <View
      style={[styles.container, theme === "dark" ? styles.dark : styles.light]}
    >
    <View style={styles.testButtons}>
        <Text style={{ color: theme === "dark" ? "#fff" : "#000", textAlign: 'center' }}>
          Mode actuel : {isOffline ? "HORS LIGNE (SQLite)" : "EN LIGNE (API)"}
        </Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 10 }}>
          <Button 
            title="Mode Online" 
            onPress={() => setIsOffline(false)} 
            color={!isOffline ? "green" : "gray"}
          />
          <Button 
            title="Mode Offline" 
            onPress={() => setIsOffline(true)} 
            color={isOffline ? "red" : "gray"}
          />
        </View>
      </View>
      {isOffline ? <TodoListOfflineScreen /> : <TodoListFetchScreen />}
    </View>
  );
}
export default function App() {
  return (
    <ThemeProvider>
      <MainApp />
    </ThemeProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  light: {
    backgroundColor: "#ffffff",
  },
  dark: {
    backgroundColor: "#121212",
  },
});


// Main App pour le TP_8 avec Firebase

import { ThemeProvider } from "./context/ThemeContext";
import { AuthProvider } from "./context/AuthContext";
import AppStack from "./navigation/AppStack";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
return (
  <SafeAreaProvider>
    <ThemeProvider>
      <AuthProvider>
        <AppStack />
      </AuthProvider>
    </ThemeProvider>
  </SafeAreaProvider>
);
}
