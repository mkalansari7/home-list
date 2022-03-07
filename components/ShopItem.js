import { HStack, Pressable, VStack } from "native-base";
import { Image, StyleSheet, Text, View } from "react-native";
import { baseURL } from "../stores/instance";

const ShopItem = ({ shop, navigation }) => {
  return (
    <Pressable
      onPress={() => {
        navigation.navigate("ShopDetail", { shop: shop });
      }}
    >
      <VStack w="100%" alignItems="center" space="2">
        <Image source={{ uri: baseURL + shop.image }} style={styles.image} />
        <Text>{shop.name}</Text>
      </VStack>
    </Pressable>
  );
};
export default ShopItem;

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
  },
});
