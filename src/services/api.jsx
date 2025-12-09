import axios from "axios";
const api = axios.create({
baseURL:"http://localhost:8000",
headers: {
      "Content-Type": "application/json",
},
})
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    console.log("Request:", config);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
api.interceptors.response.use(
  (response) => {
    console.log("Response:", response);
    return response;
  },
  (error) => {
    if (error.response) {
      console.error("Response Error:", error.response.data);
      alert(`Error: ${error.response.status} - ${error.response.statusText}`);
    } else {
      console.error("Network Error:", error.message);
    }
    return Promise.reject(error);
  }
);

export default api;