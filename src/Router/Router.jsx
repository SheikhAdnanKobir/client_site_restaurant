import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Component/Home';

const Router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>
    },
  ]);

export default Router;