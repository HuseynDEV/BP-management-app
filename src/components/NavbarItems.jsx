import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'



const NavbarItems = () => {
    const navigate = useNavigate();
    let id = useSelector(state => state.usersData.userID)


    return (
        <nav className='fixed top-0 right-0 z-[999] bg-white flex items-center justify-center  h-[50px] px-4 '>
            <ul className='flex items-center gap-4'>
                <Link className='w-[200px] text-center text-[#CC0000] font-medium text-xl'>HOC/SWA</Link>
                <Link className='w-[200px] text-center text-[#CC0000] font-medium text-xl'>Fikir ve iradlar</Link>
                <Link className='w-[200px] text-center text-[#CC0000] font-medium text-xl' to={`/usertable/${id}`}>TimeSheet</Link>
                <Link className='w-[200px] text-center text-[#CC0000] font-medium text-xl' to='/emails'>Emails</Link>
                <Link className='w-[200px] text-center text-[#CC0000] font-medium text-xl' to='/trainings'>Trainings</Link>
            </ul>
        </nav>
    )
}

export default NavbarItems