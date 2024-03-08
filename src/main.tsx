import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from './pages/homePage/index.tsx';
import { Card } from './pages/details/index.tsx';
import App from './App.tsx';
import { ErrorPage } from './pages/ErrorPage/index.tsx';
import 'bootstrap/dist/css/bootstrap.min.css'; //Aplica o Bootstrap css


// 1 - config router
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    // 3- ErrorPage
    
    children:[
      {
        path: "/",
        element: <HomePage/>,
        errorElement:<ErrorPage/>,
      },
      // {
      //   path: "/details",
      //   element: <Card/>,
      // },

      // 5 - nested routes - unic index
      {
        path:`details/:id`,
        element: <Card/>,
        errorElement:<ErrorPage/>,
      },

      // // 7 - navigate for page non-existent page
      // {
      //   path: "oldcontact",
      //   element: <Navigate to="/contact" />
      // },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
