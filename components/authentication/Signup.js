import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { Button, HStack, VStack } from "native-base";
import authStore from "../../stores/authStors";

const Signup = ({ navigation }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
    firstName: "",
    lastName: "",
  });

  const handleSubmit = async () => {
    await authStore.signup(user, navigation);
  };

  return (
    <VStack style={styles.container}>
      <Text style={{ fontWeight: "bold" }}>Signup</Text>
      <VStack>
        <Text style={styles.title}>Username:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(username) => setUser({ ...user, username })}
        />
      </VStack>
      <VStack>
        <Text style={styles.title}>Password:</Text>
        <TextInput
          style={styles.input}
          secureTextEntry
          onChangeText={(password) => setUser({ ...user, password })}
        />
      </VStack>
      <VStack>
        <Text style={styles.title}>Email:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(email) => setUser({ ...user, email })}
        />
      </VStack>
      <VStack>
        <Text style={styles.title}>firstName:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(firstName) => setUser({ ...user, firstName })}
        />
      </VStack>
      <VStack>
        <Text style={styles.title}>LastName:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(lastName) => setUser({ ...user, lastName })}
        />
      </VStack>

      <Button colorScheme="blue" onPress={handleSubmit}>
        Signup
      </Button>
      <HStack>
        <Text>Already user? </Text>
        <Pressable>
          <Text
            onPress={() => navigation.navigate("Signin")}
            style={{ fontWeight: "bold" }}
          >
            Signin
          </Text>
        </Pressable>
      </HStack>
    </VStack>
  );
};

export default Signup;

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
