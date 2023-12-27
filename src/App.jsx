import { createBrowserRouter, RouterProvider, Link } from "react-router-dom"
import Home from './pages/Home'
import User from "./pages/User"
import Admin from "./pages/Admin"
import UserLogin from "./pages/UserLogin"
import AdminLogin from "./pages/AdminLogin"
import UserTable from "./pages/UserTable"
import AdminTable from "./pages/AdminTable"
import AdminTableDetails from "./pages/AdminTableDetails"
import Emails from "./pages/Emails"
import Trainings from './pages/Trainings'

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/user", element: <User /> },
  { path: "/admin", element: <Admin /> },
  { path: "/userlogin", element: <UserLogin /> },
  { path: "/adminlogin", element: <AdminLogin /> },
  { path: "/usertable/:id", element: <UserTable /> },
  { path: "/admintable", element: <AdminTable /> },
  { path: "/admintable/:id", element: <AdminTableDetails /> },
  { path: "/emails", element: <Emails /> },
  { path: "/trainings", element: <Trainings /> },
])

function App() {

  return (
    < div >
      <RouterProvider router={router} />
    </div>
  )
}

export default App
