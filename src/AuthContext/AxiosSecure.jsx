import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { AuthUse } from './AuthContext';
import { Navigate } from 'react-router-dom';
import { auth } from '../Firebase/Firebase.init';

const axiosInstsnce = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true,
});

const AxiosSecure = () => {

    useEffect(() => {
        axiosInstsnce.interceptors.request.use(
            Response =>{
                // console.log("Request", Response);
                return Response;
            },error=>{
                if(error.sttus === 401 || error.status === 403){
                    // console.log("Unauthorized");
                    console.log("Need to log out");
                    handelSingOut(auth)
                    .then(() => {
                        // console.log("Logout successful");
                        Navigate('/login');
                    })
                    .catch((error) => {
                        console.error("Logout error:", error);
                    });
                }
            }
        )
    }, []);
    return axiosInstsnce;
};

export default AxiosSecure;