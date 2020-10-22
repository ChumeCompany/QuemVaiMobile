import axios from "axios";

const api = axios.create({
  baseURL: "http://15.228.10.74:6868/api",
});
export default api;
