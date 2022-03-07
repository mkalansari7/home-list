import { makeAutoObservable } from "mobx";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { instance } from "./instance";

class CartStore {
  items = [];

  constructor() {
    makeAutoObservable(this);
    // this will turn our class into a mobx store and all components can observe the changes that happen in the store
  }

  addToCart = async (product, quant) => {
    try {
      const foundProduct = this.items.find(
        (item) => item.product._id === product._id
      );
      if (foundProduct) {
        foundProduct.quantity = foundProduct.quantity + quant;
      } else {
        const prod = { product, quantity: quant };
        this.items.push(prod);
      }
      await AsyncStorage.setItem("items", JSON.stringify(this.items));
    } catch (e) {
      console.log(e);
    }
  };

  fetchItems = async () => {
    try {
      const items = await AsyncStorage.getItem("items");
      if (items) this.items = JSON.parse(items);
      else {
        this.items = [];
      }
    } catch (e) {
      console.log(e);
    }
  };

  get totalQuantity() {
    return this.items
      .map((item) => item.quantity)
      .reduce((acc, cur) => acc + cur, 0);
  }

  removeFromCart = async (product) => {
    try {
      this.items = this.items.filter(
        (item) => item.product._id !== product._id
      );
      await AsyncStorage.setItem("items", JSON.stringify(this.items));
    } catch (e) {
      console.log(e);
    }
  };

  checkout = async (user) => {
    try {
      const cartProducts = this.items.map((item) => {
        return { product: item.product._id, quantity: item.quantity };
      });
      console.log(cartProducts);

      const newOrder = { buyer: user, products: cartProducts };

      await instance.post("/checkout", newOrder);
      this.items = [];

      await AsyncStorage.setItem("items", JSON.stringify(this.items));
    } catch (e) {
      console.log(e);
    }
  };
}

const cartStore = new CartStore();
cartStore.fetchItems();
export default cartStore;
