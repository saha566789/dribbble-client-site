import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import ErrorPage from './Page/ErrorPage';
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import MainLayout from './Layout/MainLayout';
import AuthProvider from './Providers/AuthProviders';
import Profile from './Components/Profile';
import SelectOption from './Components/SelectOption';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
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
