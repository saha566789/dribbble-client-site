import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import ErrorPage from './Page/ErrorPage';
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import MainLayout from './Layout/MainLayout';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
