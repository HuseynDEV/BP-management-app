import React from 'react'
import { Link } from 'react-router-dom'

const Layout = ({ children }) => {
    return (
        <>
            <nav className='bg-white z-[999] fixed top-0 left-0 w-[300px] h-[50px]   inline-flex items-center justify-center text-[#007F00] uppercase text-[25px] tracking-widest font-bold   '>
                <Link to='/'>Halliburton</Link>
            </nav>
            {children}
        </>
    )
}

export default Layout