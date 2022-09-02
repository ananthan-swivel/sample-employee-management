import axios, { AxiosInstance } from "axios";

const http = (headers: object = {}): AxiosInstance => {
  let url = process.env.BASE_URL;

  const axiosInstance = axios.create({
    baseURL: url,
    headers: {
      "Content-type": "application/json",
      Accept: "application/json",
    },
  });

  axiosInstance.interceptors.request.use(
    (config) => {
      config.headers = {
        ...config.headers,
        ...headers,
      };
      return config;
    },
    (error) => Promise.reject(error)
  );

  axiosInstance.interceptors.response.use(undefined, (err) => {
    const status = err.response ? err.response.status : null;
    return Promise.reject(err);
  });

  return axiosInstance;
};

export default http;
