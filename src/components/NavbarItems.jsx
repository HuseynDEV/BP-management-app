import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logoutForeman } from '../features/userSlice'



const NavbarItems = () => {
    const navigate = useNavigate();
    let id = useSelector(state => state.usersData.userID)
    let foreman = useSelector(state => state.usersData.foreman)
    const dispatch = useDispatch()


    const handleLogout = () => {
        dispatch(logoutForeman())
        navigate('/')
    }

    return (
        <nav className='fixed top-0 right-0 z-[999] w-full  bg-white  h-[50px] px-4 '>
            <ul className='flex items-center justify-between h-full  mx-auto gap-5'>
                <div className='w-[30%]'>
                    <Link className='w-[200px] text-center  text-[#CC0000] font-medium text-3xl uppercase tracking-wide' to='/'>Halliburton</Link>

                </div>
                <div className='flex items-center justify-end gap-10 w-[70%]'>
                    {
                        id && (
                            <>
                                <Link className='  = text-center text-[#CC0000] font-medium text-xl' to={`/usertable/${id}/profile`}>My Profile</Link>
                                <Link className='=  text-center text-[#CC0000] font-medium text-xl  whitespace-nowrap' to='/comments'>Thoughts and Opinions</Link>
                                <Link className='   text-center text-[#CC0000] font-medium text-xl' to={`/usertable/${id}`}>TimeSheet</Link>
                            </>
                        )
                    }
                    {
                        foreman && (
                            <>
                                <Link className='  text-center text-[#CC0000] font-medium text-xl' to='/raport'>Raport</Link>
                                <button onClick={handleLogout} className='  text-center text-[#CC0000] font-medium text-xl' to='/'>Logout</button>
                            </>
                        )

                    }
                    <Link className='  text-center text-[#CC0000] font-medium text-xl' to='/emails'>Emails</Link>
                    <Link className='   text-center text-[#CC0000] font-medium text-xl' to='/trainings'>Trainings</Link>
                </div>
            </ul>
        </nav>
    )
}

export default NavbarItems