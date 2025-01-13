import axios from "axios";
const randApi = axios.create({
  baseURL: "https://randomuser.me/api",
});

export default randApi;
