import React from 'react'
import { Link } from 'react-router-dom'
import image from '../assets/halliburton.png'
import NavbarItems from '../components/NavbarItems'

const Home = () => {
    return (
      <>
       <NavbarItems/>
         <div className='flex items-center justify-center h-screen bg-[#CC0000]'>
            <img  src={image}  className='w-full object-cover h-full' alt="" />
            <div className='border-[1px] absolute bg-white rounded-lg w-[300px] p-3' >
                <h1 className='text-[#CC0000]  text-3xl mb-6 text-center'>Welcome!</h1>
                <div className='flex flex-col gap-3'>
                    <Link to='admin' className='border-[1px] h-[40px] text-center leading-[40px] w-[90%] mx-auto border-black  rounded-lg'>Admin</Link>
                    <Link to='user' className='border-[1px] h-[40px] text-center leading-[40px] border-black  w-[90%] mx-auto  rounded-lg'>User</Link>
                    <Link to='foreman' className='border-[1px] h-[40px] text-center leading-[40px] border-black  w-[90%] mx-auto  rounded-lg'>Foreman</Link>
                </div>
            </div>
        </div>
      </>
    )
}

export default Home