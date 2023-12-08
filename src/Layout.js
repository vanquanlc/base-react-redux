
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import App from './App';
  import Admin from './components/Admin/Admin';
  import User from './components/User/User';
  import ErrorPage from './components/Error/ErrorPage';
  import HomePage from './components/home/HomePage';
  import DashBoard from './components/Admin/adminContent/DashBoard';
  import ManageUsers from './components/Admin/adminContent/ManageUsers';
  import Login from './components/Auth/Login';
  import SignUp from './components/Auth/SignUp';
  import { ToastContainer } from 'react-toastify';
  
  
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
    },
    {
      path: "signup",
      element: <SignUp/>
    },
  
  
  ]);

const Layout = () => {
    return(
        <>
            <RouterProvider router={router}/>
            <ToastContainer/>
        </>
    )
}

export default Layout;