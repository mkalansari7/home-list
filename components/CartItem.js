import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { HStack, VStack, useToast } from "native-base";
import { baseURL } from "../stores/instance";
import { AntDesign } from "@expo/vector-icons";
import cartStore from "../stores/cartStore";
import { observer } from "mobx-react";

const CartItem = ({ product, quantity }) => {
  const toast = useToast();
  const hendleDelete = () => {
    cartStore.removeFromCart(product);
    toast.show({
      description: "Product deleted",
    });
  };
  return (
    <HStack style={styles.info}>
      <Image source={{ uri: baseURL + product.image }} style={styles.image} />
      <VStack>
        <Text>name: {product.name}</Text>
        <Text>price: {product.price}</Text>
        <Text>quantity: {quantity}</Text>
        <Text>
          {product.price} x {quantity}KD = {product.price * quantity}KD
        </Text>
      </VStack>
      <AntDesign
        name="delete"
        size={24}
        color="black"
        onPress={hendleDelete}
        style={{ marginRight: 12 }}
      />
    </HStack>
  );
};

export default observer(CartItem);

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  info: {
    margin: 5,
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 10,
    padding: 7,
  },
});
