import axios from "axios";

const customFetch = axios.create({
  baseURL: "https://api.twelvedata.com",
  headers: {
    Authorization: `apikey ${import.meta.env.VITE_APP_API_KEY}`,
  },
});

export default customFetch;
