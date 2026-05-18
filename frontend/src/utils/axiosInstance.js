import axios from "axios";
import {BASE_URL} from "./apiPaths";

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    }
});

// Request interceptor to add auth token
axiosInstance.interceptors.request.use(
    (config) => {
        const accesstoken = localStorage.getItem("token");
        if (accesstoken) {
            config.headers.Authorization = `Bearer ${accesstoken}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor to handle errors globally
axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response) {
            // Handle specific status codes
            if (error.response.status === 401) {
                // Unauthorized, token might be invalid or expired
                localStorage.removeItem("token");
                window.location.href = "/login"; // Redirect to login page
            }
            else if (error.response.status === 500) {
                // Internal server error
                console.error("Internal server error: Try again later", error.response.data);
            }
        }else if (error.code === "ECONNABORTED") {
            // Handle timeout error
            console.error("Request timed out: Try again later");
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;