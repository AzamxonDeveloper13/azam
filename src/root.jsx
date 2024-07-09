import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx';
import Employes from './pages/Employes.jsx';
import Userlist from './pages/UserList.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: 'home', element: <Home /> },
      { path: 'products', element: <Products /> },
      { path: 'employes', element: <Employes /> },
      { path: 'userlist', element: <Userlist /> },
    ],
  },
]);

const Root = () => {
  return <RouterProvider router={router} />;
};

export default Root;
