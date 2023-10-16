
import { axiosPrivate } from "../api/axios";
import { useEffect } from "react";
import useRefreshToken from "./useRefreshToken";
import useAuth from "./useAuth";

const useAxiosPrivate = () => {
    const refresh = useRefreshToken();
    const { auth } = useAuth();
   
    useEffect(() => {
        // Add an interceptor to automatically refresh the access token
        const requestInterceptor = axiosPrivate.interceptors.request.use(
            (config) => {
                // Check if the request has an Authorization header, and if not, add the access token
                if (!config.headers['Authorization']) {
                    config.headers['Authorization'] = `Bearer ${auth?.accessToken}`;
                }
                return config;
            },
            (error) => Promise.reject(error)
        );

        const responseInterceptor = axiosPrivate.interceptors.response.use(
            (response) => response,
            async (error) => {
                const prevRequest = error.config;
                if (error.response?.status === 403 && !prevRequest._isRetry) {
                    prevRequest._isRetry = true;
                    try {
                        // Refresh the access token using the refresh function
                        const newAccessToken:string = await refresh();
                        // Update the Authorization header with the new access token
                        prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
                        // Retry the original request with the updated access token
                        return axiosPrivate(prevRequest);
                    } catch (refreshError) {
                        // Handle the refresh token error, for example, by logging the user out
                        // and redirecting them to the login page
                        // You might want to define your own error handling logic here
                        console.error('Token refresh failed:', refreshError);
                        // Handle token refresh error here, e.g., log out the user
                    }
                }
                // Skip the interceptor for refresh requests
                if (!prevRequest._skipInterceptor) {
                    return Promise.reject(error);
                }
            }
        );

        // Remove interceptors when the component unmounts to prevent memory leaks
        return () => {
            axiosPrivate.interceptors.request.eject(requestInterceptor);
            axiosPrivate.interceptors.response.eject(responseInterceptor);
        };
    }, [auth, refresh]);

    return axiosPrivate;
};

export default useAxiosPrivate;
