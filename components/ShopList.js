import { observer } from "mobx-react";
import { StyleSheet, View } from "react-native";

import shopStore from "../stores/shopStore";
import ShopItem from "./ShopItem";

const ShopList = ({ navigation }) => {
  const shopList = shopStore.shops.map((shop) => (
    <ShopItem shop={shop} key={shop._id} navigation={navigation} />
  ));

  return <View>{shopList}</View>;
};

export default observer(ShopList);

const styles = StyleSheet.create({});
