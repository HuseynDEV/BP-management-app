import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'



const NavbarItems = () => {
    const navigate = useNavigate();
    let id = useSelector(state => state.usersData.userID)


    return (
        <nav className='fixed top-0 right-0 z-[999] w-full  bg-white  h-[50px] px-4 '>
            <ul className='flex items-center justify-between h-full  mx-auto gap-5'>
                <div className='w-[30%]'>
                    <Link className='w-[200px] text-center  text-[#CC0000] font-medium text-3xl uppercase tracking-wide' to='/'>Halliburton</Link>

                </div>
                <div className='flex items-center gap-3 w-[70%]'>
                    <Link className='  w-full text-center text-[#CC0000] font-medium text-xl' to={`/usertable/${id}/profile`}>My Profile</Link>
                    <Link className='w-full  text-center text-[#CC0000] font-medium text-xl  whitespace-nowrap' to='/comments'>Thoughts and Opinions</Link>
                    <Link className='  w-full text-center text-[#CC0000] font-medium text-xl' to={`/usertable/${id}`}>TimeSheet</Link>
                    <Link className=' w-full text-center text-[#CC0000] font-medium text-xl' to='/emails'>Emails</Link>
                    <Link className='  w-full text-center text-[#CC0000] font-medium text-xl' to='/trainings'>Trainings</Link>
                </div>
            </ul>
        </nav>
    )
}

export default NavbarItems