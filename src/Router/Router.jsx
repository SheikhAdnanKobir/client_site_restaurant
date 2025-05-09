import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainSection from '../Layout/MainSection';
import ErrorPage from '../Layout/ErrorPage';
import Homefront from './../Component/Homefront';
import Login from '../Authentication/Login';
import Register from './../Authentication/Register';
import Allfoods from '../Component/Allfoods';
import Gallery from '../Component/Gallery';
import Privatecontrol from '../PrivateRoute/Privatecontrol';
import Addfood from '../PrivateRoute/Addfood';
import Myfoods from '../PrivateRoute/Myfoods';
import Myorders from '../PrivateRoute/Myorders';
import Idsingal from '../Component/Idsingal';
import Purchase from '../Component/Purchase';
import Update from './../Component/Update';

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
      },
      {
        path:"/addfood",
        element:<Privatecontrol><Addfood></Addfood></Privatecontrol>
      },
      {
        path:"/myfoods",
        element:<Privatecontrol><Myfoods></Myfoods></Privatecontrol>
      },
      {
        path: "/myorders",
        element: <Privatecontrol><Myorders></Myorders></Privatecontrol>
      },
      {
        path: "foods/details/:id",
        loader:({ params }) =>fetch(`http://localhost:5000/users/${params.id}`),
        element:<Idsingal></Idsingal>
      },
      {
        path: "purchase/:id",
        loader:({ params }) =>fetch(`http://localhost:5000/users/${params.id}`),
        element:<Privatecontrol><Purchase></Purchase></Privatecontrol>
      },
      {
        path:"myfoods/update/:id",
        loader:({ params }) =>fetch(`http://localhost:5000/users/${params.id}`),
        element:<Privatecontrol><Update></Update></Privatecontrol>
      }
    ],
  },
  ]);

export default Router;