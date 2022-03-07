import { observer } from "mobx-react";
import { HStack, VStack } from "native-base";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { baseURL } from "../stores/instance";
import shopStore from "../stores/shopStore";
import ProductList from "./ProductList";
const ShopDetail = ({ route }) => {
  const { shop } = route.params;
  return (
    <VStack w="100%" alignItems="center" space="2">
      <Image style={styles.image} source={{ uri: baseURL + shop.image }} />
      <Text>{shop.name}</Text>
      <ProductList products={shop.products} />
    </VStack>
  );
};
export default observer(ShopDetail);

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
  },
});
