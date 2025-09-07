"use client";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    // os: "web",
  },
});
axiosInstance.interceptors.request.use(
  (config) => {
    const locale = Cookies.get("NEXT_LOCALE") || "en";
    const token = Cookies.get("token");
    // const guest_token = Cookies.get("guest_token");
    
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    else {
        config.params = {
            ...config.params,
            // guest_token: guest_token
        }
      }
    
    if (!config.headers) {
      // config.headers = {};
    }
       
    config.headers["Accept-Language"] = locale;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Response interceptor to handle 401 errors
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      const router = useRouter();

      const locale = Cookies.get("NEXT_LOCALE");
      router.push(locale === "ar" ? "/ar/auth" : "en/auth");
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
