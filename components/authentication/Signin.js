import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { Button, HStack, VStack } from "native-base";
import authStore from "../../stores/authStors";

const Signin = ({ navigation }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async () => {
    await authStore.signin(user, navigation);
  };

  return (
    <VStack style={styles.container}>
      <Text style={{ fontWeight: "bold" }}>Signin</Text>
      <VStack>
        <Text style={styles.title}>Username:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(value) => setUser({ ...user, username: value })}
        />
      </VStack>
      <VStack>
        <Text style={styles.title}>Password:</Text>
        <TextInput
          style={styles.input}
          secureTextEntry
          onChangeText={(value) => setUser({ ...user, password: value })}
        />
      </VStack>
      <Button colorScheme="blue" onPress={handleSubmit}>
        Signin
      </Button>
      <HStack>
        <Text>Not a user? </Text>
        <Pressable>
          <Text
            onPress={() => navigation.navigate("Signup")}
            style={{ fontWeight: "bold" }}
          >
            Signup
          </Text>
        </Pressable>
      </HStack>
    </VStack>
  );
};

export default Signin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    bottom: 80,
  },

  input: {
    height: 40,
    width: 300,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    margin: 12,
  },
  title: {},
});
