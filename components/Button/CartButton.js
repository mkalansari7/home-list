import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Badge, Center } from "native-base";
import { Alert, Pressable } from "react-native";
import authStore from "../../stores/authStors";
import cartStore from "../../stores/cartStore";

const CartButton = () => {
  const navigation = useNavigation();
  const handlePress = () => {
    if (authStore.user) navigation.navigate("Cart");
    else {
      Alert.alert("Signin", "You need to signin first", [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => navigation.navigate("Signin") },
      ]);
    }
  };
  return (
    <Pressable>
      <Badge // bg="red.400"
        colorScheme="danger"
        rounded="full"
        mb={-4}
        mr={-4}
        zIndex={1}
        width={6}
        height={6}
        variant="solid"
        alignSelf="flex-end"
        _text={{
          fontSize: 10,
          textAlign: "center",
        }}
      >
        {cartStore.totalQuantity}
      </Badge>
      <Ionicons name="cart" size={24} color="black" onPress={handlePress} />
    </Pressable>
  );
};

export default CartButton;
