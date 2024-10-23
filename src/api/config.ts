import axios from "axios";

// define axios headers
const headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer <token>',
  'Accept': 'application/json',
  'Content-Security-Policy': "default-src 'self' https: ; script-src 'self' ; object-src 'none'"
}

// creating the axios instance
const instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  headers
});

// create interceptor for requests
instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// create interceptors for response
instance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default instance;