import axios from "axios"
import { NEW_43_USERNAME, NEW_43_PASSWORD } from "react-native-dotenv"
const new = axios.create({
  baseURL: "https://devstringx.com",
  auth: { username: NEW_43_USERNAME, password: NEW_43_PASSWORD },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
