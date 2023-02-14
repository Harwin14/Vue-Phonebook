import axios from "axios";

export const request = axios.create({
  baseURL: "http://localhost:3001/",
  timeout: 1000,
  headers: { Authorization: "token" },
});
