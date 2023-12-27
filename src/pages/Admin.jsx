import React from 'react'
import { Link } from 'react-router-dom'
import Login from './AdminLogin'
import Layout from '../components/Layout'


const Admin = () => {
  return (
   <Layout>
    <Login/>
   </Layout>
  )
}

export default Admin