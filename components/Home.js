import { observer } from "mobx-react";
import { Alert, Button, StyleSheet, View } from "react-native";
import authStore from "../stores/authStors";

const Home = ({ navigation }) => {
  return (
    <View>
      <Button title="Shops" onPress={() => navigation.navigate("Shops")} />
      {authStore.user ? (
        <Button title="Sign out" onPress={authStore.signout} />
      ) : (
        <Button title="Signin" onPress={() => navigation.navigate("Signin")} />
      )}
    </View>
  );
};

export default observer(Home);
