import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './pages/Home'
import User from "./pages/User"
import Admin from "./pages/Admin"
import UserLogin from "./pages/UserLogin"
import UserRegister from "./pages/UserRegister"
import AdminLogin from "./pages/AdminLogin"
import AdminRegister from "./pages/AdminRegister"
import UserTable from "./pages/UserTable"
import Admintable from "./pages/Admintable"
import AdminTableDetails from "./pages/AdminTableDetails"

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/user", element: <User /> },
  { path: "/admin", element: <Admin /> },
  { path: "/userlogin", element: <UserLogin /> },
  { path: "/userregister", element: <UserRegister /> },
  { path: "/adminlogin", element: <AdminLogin /> },
  { path: "/adminregister", element: <AdminRegister /> },
  { path: "/usertable/:id", element: <UserTable /> },
  { path: "/admintable", element: <Admintable /> },
  { path: "/admintable/:id", element: <AdminTableDetails /> }
])

function App() {

  return (
    < div >
      <RouterProvider router={router} />
    </div>
  )
}

export default App
