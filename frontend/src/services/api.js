import axios from "axios";

const API = axios.create({
  baseURL: "https://portfolio-backend-5c4o.onrender.com/api",
});


API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      sessionStorage.removeItem("adminToken");
      delete API.defaults.headers.common["Authorization"];
      window.location.href = "/admin/login";
    }
    return Promise.reject(error);
  }
);

export default API;
