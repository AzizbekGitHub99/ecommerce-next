import { ENDPOINT } from "@/constants";
import axios from "axios";

const request = axios.create({
  baseURL: ENDPOINT,
  timeout: 10000,
});

export default request;