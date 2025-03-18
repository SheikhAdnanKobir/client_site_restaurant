import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom";
import "./index.css";
import Router from './Router/Router';
import AuthContext from './AuthContext/AuthContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContext><RouterProvider router={Router} /></AuthContext>
  </StrictMode>,
)
