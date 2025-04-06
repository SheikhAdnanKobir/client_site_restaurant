import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainSection from '../Layout/MainSection';
import ErrorPage from '../Layout/ErrorPage';
import Homefront from './../Component/Homefront';
import Login from '../Authentication/Login';
import Register from './../Authentication/Register';
import Allfoods from '../Component/Allfoods';
import Gallery from '../Component/Gallery';

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainSection></MainSection>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Homefront></Homefront>
      },
      {
        path: "/foods",
        element:<Allfoods></Allfoods>
      },
      {
        path:"/gallery",
        element:<Gallery></Gallery>
      },
      {
        path: "/signup",
        element: <Register></Register>
      },
      {
        path: "/login",
        element:<Login></Login>
      }
    ],
  },
  ]);

export default Router;