import React from 'react'
import { Link } from 'react-router-dom'
import Login from './AdminLogin'
import Layout from '../components/Layout'
import NavbarItems from '../components/NavbarItems'


const Admin = () => {
  return (
   <>
   <NavbarItems/>
    <Login/>
   </>
  )
}

export default Admin