import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainSection from '../Layout/MainSection';
import ErrorPage from '../Layout/ErrorPage';
import FoodsItems from './../Component/FoodsItems';
import Homefront from './../Component/Homefront';
import Login from '../Authentication/Login';

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
        path: "/allcategory",
        element: <FoodsItems></FoodsItems>
      },
      {
        path: "/login",
        element:<Login></Login>
      }
    ],
  },
  ]);

export default Router;