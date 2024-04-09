import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import ErrorPage from './Page/ErrorPage';
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import AuthProvider from './Providers/AuthProviders';
import Profile from './Components/Profile';
import SelectOption from './Components/SelectOption';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import SignUp from './Components/SignUp';
import MainLayout from './Layout/MainLayout';

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element:  <SignUp></SignUp>,
    errorElement:<ErrorPage></ErrorPage>,
  },
  {
    path: "/profile",
    element: <Profile></Profile>,
    
  },
  {
    path: "/selectOption",
    element: <SelectOption></SelectOption>,
    
  },
  {
    path: "/email",
    element: <MainLayout></MainLayout>,
    
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider>
     <QueryClientProvider client={queryClient}>
     <RouterProvider router={router} />
     
     </QueryClientProvider>
     </AuthProvider>
  </React.StrictMode>,
)
