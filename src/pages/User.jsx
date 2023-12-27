import React from 'react'
import UserLogin from './UserLogin'
import Layout from '../components/Layout'


const User = () => {
  return (
   <Layout>
     <div>
      <div className='z-[999]'>
        <UserLogin />
      </div>
    </div>
   </Layout>
  )
}

export default User