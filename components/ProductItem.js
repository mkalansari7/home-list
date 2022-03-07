import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Avatar, HStack, useToast } from "native-base";

import { baseURL } from "../stores/instance";
import { FontAwesome } from "@expo/vector-icons";
import NumericInput from "react-native-numeric-input";
import cartStore from "../stores/cartStore";

const ProductItem = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const toast = useToast();

  const handleChange = (e) => {
    setQuantity(e);
  };

  const handleAdd = () => {
    cartStore.addToCart(product, quantity);
    toast.show({
      description: "Product added",
    });
  };
  return (
    <HStack w="100%" alignItems="center" space="3">
      <Avatar
        source={{
          uri: baseURL + product.image,
        }}
        alt="image"
        style={{ width: 100, height: 100 }}
      />
      <Text>{product.name}</Text>
      <FontAwesome
        name="cart-plus"
        size={24}
        color="black"
        onPress={handleAdd}
      />
      <NumericInput
        rounded
        totalWidth={80}
        minValue={1}
        value={quantity}
        onChange={(value) => handleChange(value)}
      />
    </HStack>
  );
};

export default ProductItem;

const styles = StyleSheet.create({});
