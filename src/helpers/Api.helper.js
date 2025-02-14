import axios from "axios";
import Cookies from "js-cookie";

const instance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

instance.interceptors.request.use((request) => {

    // Cookies.set("accessToken", response.data.token, {
    //     expires: 7, // Expires in 7 days
    //     secure: process.env.NODE_ENV === "production",
    //     sameSite: "Strict",
    // });

    // if (typeof window !== "undefined") {
    //     const token = Cookies.get("accessToken");
    //     if (token) {
    //         request.headers.Authorization = `Bearer ${token}`; // Add token to request header
    //     }
    // }

    return request;

}, (error) => Promise.reject(error));

instance.interceptors.response.use((response) => response, (error) => {

    const { response } = error;

    if (response) {

        const { status, data } = response;

        if (status === 401) {

            if (typeof window !== "undefined" && data?.message === "Token has expired.") {
                Cookies.remove("accessToken");
            }

            return Promise.reject({ ...error, isAuthError: true });
        }
    }

    return Promise.reject(error);
});

export default instance;
