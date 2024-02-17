import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logoutForeman, logoutUser } from '../features/userSlice';
import '../assets/navbar.css'

const NavbarItems = () => {
    const navigate = useNavigate();
    const id = useSelector(state => state.usersData.userID);
    const foreman = useSelector(state => state.usersData.foreman);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logoutForeman());
        navigate('/');
    };

    const handleLogoutUser = () => {
        dispatch(logoutUser());
        navigate('/');
    };

    return (
        <nav className='fixed top-0 right-0 z-20 w-full bg-white h-[70px] px-4'>
            <ul className='flex items-center justify-between h-full mx-auto gap-5'>
                <div className='w-[30%]'>
                    <Link className='w-[200px] text-center text-[#007F00] font-medium text-3xl uppercase tracking-wide' to='/'>
                        <img src="https://www.bp.com/apps/settings/wcm/designs/refresh/bp/images/navigation/bp-logo.svg" alt="" className='w-[60px] h-[60px]' />
                    </Link>
                </div>
                <div className='flex items-center justify-end gap-10 w-[70%]'>
                    {
                        id && (
                            <div className='text-[#007F00]'>
                                <Link className='text-center text-[#007F00] hover:text-white hover:bg-[#007F00] h-[70px] leading-[70px] px-4 block font-medium text-xl' to={`/usertable/${id}/profile`}>My Profile</Link>
                                <Link className='text-center text-[#007F00] hover:text-white hover:bg-[#007F00] h-[70px] leading-[70px] px-4 block font-medium text-xl whitespace-nowrap' to='/comments'>Thoughts and Opinions</Link>
                                <Link className='text-center text-[#007F00] hover:text-white hover:bg-[#007F00] h-[70px] leading-[70px] px-4 block font-medium text-xl' to={`/usertable/${id}`}>TimeSheet</Link>
                                <button onClick={handleLogoutUser} className='text-center text-[#007F00] font-medium text-xl hover:text-white hover:bg-[#007F00] h-[70px] leading-[70px] px-4 block'>Logout</button>
                            </div>
                        )
                    }
                    {
                        foreman && (
                            <>
                                <Link className='text-center text-[#007F00] hover:text-white hover:bg-[#007F00] font-medium text-xl h-[70px] leading-[70px] px-4 block' to='/raport'>Raport</Link>
                                <Link className='text-center text-[#007F00] hover:text-white hover:bg-[#007F00] font-medium text-xl h-[70px] leading-[70px] px-4 block' to='/archive'>Archive</Link>
                                <button onClick={handleLogout} className='text-center text-[#007F00] font-medium text-xl hover:text-white hover:bg-[#007F00] h-[70px] leading-[70px] px-4 block'>Logout</button>
                            </>
                        )
                    }
                    <Link className='text-center text-[#007F00] hover:bg-[#007F00] hover:text-white h-[70px] leading-[70px] px-6 block font-medium text-xl' to='/emails'>Emails</Link>
                    <Link className='text-center text-[#007F00] hover:bg-[#007F00] hover:text-white h-[70px] leading-[70px] px-4 block font-medium text-xl' to='/trainings'>Trainings</Link>
                </div>
            </ul>
        </nav>
    );
};

export default NavbarItems;
