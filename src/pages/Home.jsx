import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='flex items-center justify-center h-screen'>
            <div className='border-[1px] border-black w-[300px] p-3' >
                <h1 className='text-[#CC0000] text-3xl mb-6 text-center'>Welcome!</h1>
                <div className='flex flex-col gap-3'>
                    <Link to='admin' className='border-[1px] h-[40px] text-center leading-[40px] w-[90%] mx-auto border-black  rounded-lg'>Admin</Link>
                    <Link to='user' className='border-[1px] h-[40px] text-center leading-[40px] border-black  w-[90%] mx-auto  rounded-lg'>User</Link>
                </div>
            </div>
        </div>
    )
}

export default Home