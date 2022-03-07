import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ProductItem from "./ProductItem";
import { observer } from "mobx-react";

const ProductList = ({ products }) => {
  const productList = products.map((product) => (
    <ProductItem product={product} key={product._id} />
  ));
  return <View>{productList}</View>;
};

export default observer(ProductList);

const styles = StyleSheet.create({});
