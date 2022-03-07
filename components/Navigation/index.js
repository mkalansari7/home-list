import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../Home";
import ShopList from "../ShopList";
import ShopDetail from "../ShopDetail";
import CartList from "../CartList";
import CartButton from "../Button/CartButton";
import Signin from "../authentication/Signin";
import Signup from "../authentication/Signup";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="Shops"
        component={ShopList}
        options={{ headerRight: () => <CartButton /> }}
      />
      <Stack.Screen
        name="ShopDetail"
        component={ShopDetail}
        options={{ headerRight: () => <CartButton /> }}
      />
      <Stack.Screen name="Cart" component={CartList} />
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});
