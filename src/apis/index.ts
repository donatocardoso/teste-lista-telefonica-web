import axios from "axios";

export const ApiTokiToki = axios.create({
  baseURL: "https://toki-toki-api.herokuapp.com/api/toki-toki"
});
