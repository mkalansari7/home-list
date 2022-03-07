import { Alert, StyleSheet, Text, View } from "react-native";
import React from "react";
import cartStore from "../stores/cartStore";
import CartItem from "./CartItem";
import { observer } from "mobx-react";
import { Button } from "native-base";
import authStore from "../stores/authStors";

const CartList = () => {
  const user = authStore.user;
  const handleCheckout = () => {
    cartStore.checkout(user);
    Alert.alert("Thank you");
  };
  const cartList = cartStore.items.map((item) => (
    <CartItem
      key={item.product._id}
      product={item.product}
      quantity={item.quantity}
    />
  ));
  return (
    <>
      <View>{cartList}</View>
      <Button style={styles.btn} onPress={handleCheckout}>
        Checkout
      </Button>
    </>
  );
};

export default observer(CartList);

const styles = StyleSheet.create({
  btn: {
    margin: 20,
    backgroundColor: "black",
  },
});
