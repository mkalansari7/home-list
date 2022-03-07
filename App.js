import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import "react-native-gesture-handler";

import { StyleSheet, Text, View } from "react-native";
import ShopDetail from "./components/ShopDetail";

import ShopList from "./components/ShopList";
import Home from "./components/Home";

import RootNavigator from "./components/Navigation";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <RootNavigator />
        <StatusBar style="auto" />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
