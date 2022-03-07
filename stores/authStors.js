import { makeAutoObservable } from "mobx";
import { instance } from "./instance";
import decode from "jwt-decode";
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

class AuthStore {
  user = null;
  constructor() {
    makeAutoObservable(this);
  }
  signup = async (user, navigation) => {
    try {
      const res = await instance.post("/signup", user);
      const { token } = res.data;
      //   localStorage.setItem("token", token);

      await this.setUser(token);
      navigation.replace("Shops");

      console.log(token);
    } catch (error) {
      console.log(error);
    }
  };

  signin = async (user, navigation) => {
    try {
      const res = await instance.post("/signin", user);
      const { token } = res.data;
      //   localStorage.setItem("token", token);
      await this.setUser(token);

      navigation.replace("Shops");
      console.log(token);
    } catch (error) {
      console.log(error);
    }
  };

  signout = async () => {
    try {
      // localStorage.removeItem("token");
      await AsyncStorage.removeItem("token");
      this.user = null;
    } catch (error) {
      console.log(error);
    }
  };

  setUser = async (token) => {
    try {
      const decodedToken = decode(token);
      this.user = decodedToken;
      instance.defaults.headers.common.Authorization = `Bearer ${token}`;
      console.log(token);
      // localStorage.setItem("token", token);
      await AsyncStorage.setItem("token", token);
    } catch (error) {
      console.log(error);
    }
  };

  checkForToken = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      console.log(token);
      if (token) {
        const decodedToken = decode(token);
        console.log(decodedToken);

        if (Date.now() < +decodedToken.exp) {
          await this.setUser(token);
        } else {
          this.signout();
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
}

const authStore = new AuthStore();
authStore.checkForToken();
export default authStore;
