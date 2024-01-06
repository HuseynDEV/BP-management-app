import React from 'react'
import UserLogin from './UserLogin'
import NavbarItems from '../components/NavbarItems'

const User = () => {
  return (
     <div>
      <NavbarItems/>
      <div className='z-[999]'>
        <UserLogin />
      </div>
    </div>
  )
}

export default User