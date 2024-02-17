import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from '../pages/Home'
import User from "../pages/User"
import Admin from "../pages/Admin"
import UserLogin from "../pages/UserLogin"
import AdminLogin from "../pages/AdminLogin"
import UserTable from "../pages/UserTable"
import AdminTable from "../pages/AdminTable"
import AdminTableDetails from "../pages/AdminTableDetails"
import Emails from "../pages/Emails"
import Trainings from '../pages/Trainings'
import React from 'react';
import Comments from "../pages/Comments"
import Profile from "../pages/Profile"
import Raport from "../pages/Raport"
import ForeMan from "../pages/ForeMan"
import Archive from "../pages/Archive"

const Router = () => {
    const BrowserRoutes = createBrowserRouter([
        { path: "/", element: <Home /> },
        { path: "/user", element: <User /> },
        { path: "/foreman", element: <ForeMan /> },
        { path: "/admin", element: <Admin /> },
        { path: "/userlogin", element: <UserLogin /> },
        { path: "/adminlogin", element: <AdminLogin /> },
        { path: "/usertable/:id", element: <UserTable /> },
        { path: "/admintable", element: <AdminTable /> },
        { path: "/admintable/:id", element: <AdminTableDetails /> },
        { path: "/emails", element: <Emails /> },
        { path: "/trainings", element: <Trainings /> },
        { path: "/comments", element: <Comments /> },
        { path: "/raport", element: <Raport /> },
        { path: "/archive", element: <Archive /> },
        { path: "/usertable/:id/profile", element: <Profile /> },
    ])


    return (
        <RouterProvider router={BrowserRoutes} />
    )
}

export default Router;
