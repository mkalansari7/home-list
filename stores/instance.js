import axios from "axios";

export const baseURL = "http://192.168.100.168:8080";
export const instance = axios.create({
  baseURL: `${baseURL}/api`,
});
