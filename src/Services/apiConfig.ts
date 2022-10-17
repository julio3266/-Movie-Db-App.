import axios from "axios";
import { baseUrl } from "./api";

export const api = axios.create({ baseURL: baseUrl });
