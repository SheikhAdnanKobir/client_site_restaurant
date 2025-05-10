import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import "./index.css";
import Router from './Router/Router';
import AuthContext from './AuthContext/AuthContext';
import 'atropos/css'
import { ToastContainer } from 'react-toastify';
import AxiosSecure from './AuthContext/AxiosSecure';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastContainer />
    <AuthContext><RouterProvider router={Router} ></RouterProvider></AuthContext>

  </StrictMode>,
)
