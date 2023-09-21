import axios from "axios"
import { NO_BE_USERNAME, NO_BE_PASSWORD } from "react-native-dotenv"
const noBE = axios.create({
  baseURL: "https://devstringx.com",
  auth: { username: NO_BE_USERNAME, password: NO_BE_PASSWORD },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
