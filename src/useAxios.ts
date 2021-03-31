import { makeUseAxios } from "axios-hooks";
import Axios from "axios";
import { uuid } from "uuidv4";

const generateToken = uuid;

const axios = Axios.create({
  baseURL: "https://sample-videos.com"
});

// request interceptor to add token to request headers
// axios.interceptors.request.use(
//   async (config) => {
//     const token = sessionStorage.getItem("msal.idtoken");
//     if (token) {
//       config.headers = {
//         authorization: `Bearer ${token}`
//       };
//       return config;
//     }
//   },
//   (error) => Promise.reject(error)
// );

// response interceptor intercepting 4** responses, refreshing token and retrying the request
// axios.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     try {
//       if (error) {
//         const config = error.config;
//         console.log(error);
//         if (
//           !!`${error.response.status}`.match(new RegExp(/4../g)) &&
//           !config._retry
//         ) {
//           config._retry = true;
//           const token = generateToken();
//           sessionStorage.setItem("msal.idtoken", token);

//           return axios(config);
//         }
//       }
//     } catch (e) {
//       console.log(e);
//       return Promise.reject(error);
//     }
//   }
// );

export default makeUseAxios({
  axios
});
