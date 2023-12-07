import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Admin from './components/Admin/Admin';
import User from './components/User/User';
import ErrorPage from './components/Error/ErrorPage';
import HomePage from './components/home/HomePage';
import DashBoard from './components/Admin/adminContent/DashBoard';
import ManageUsers from './components/Admin/adminContent/ManageUsers';
import Login from './components/Auth/Login';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "users",
        element: <User/>
      },
      {
        index: true,
        element: <HomePage/>
      }
    ],
  },
  {
    path: "admin",
    element: <Admin />,
    children: [
      {
        index: true,
        element: <DashBoard/>
      },
      {
        path: "/admin/manage-users",
        element: <ManageUsers/>
      }
    ]
  },{
    path: "login",
    element: <Login/>
  }

]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    {/* <React.StrictMode> */}
    <RouterProvider router={router}/>
    {/* </React.StrictMode> */}
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
