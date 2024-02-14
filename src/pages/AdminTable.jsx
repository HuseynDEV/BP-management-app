import React, { useEffect, useState } from 'react'
import image from '../assets/halliburton.png'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUser } from '../features/userSlice'
import NavbarItems from '../components/NavbarItems'



const AdminTable = () => {
    const dispatch = useDispatch()
    const data = useSelector(state => state.usersData.users)

    useEffect(() => {
        dispatch(fetchUser())
    }, [])

    return (
<>
<NavbarItems/>
<div className='flex items-center mt-[100px] bg-white h-full mx-auto flex-col justify-center w-[80%]'>
                <img src={image} className=' top-0 -z-1 w-full h-full fixed object-cover' alt="" />
                {
                    data?.map((user,index) => {
                        return (
                            <div  className=" rounded overflow-auto z-[100]  bg-white w-full shadow-lg m-4" key={user.id} >
                                <div className="px-6 py-4 ">
                                    <div className="font-bold text-xl mb-2 flex items-center gap-2">
                                        <div>Name: {user.firstName} {user.lastn}</div>

                                    </div>
                                    <div className="text-gray-700 text-base flex items-center gap-2">
                                        <div>Email: {user.email}</div>

                                    </div>

                                    <Link to={`/admintable/${user.id}`} type='button' className='mt-3 border-[1px] px-4 py-1 rounded-lg text-white bg-[#007F00]'>Details</Link>
                                </div>
                            </div>
                        )
                    })
                } 
            </div>
</>
    )
}

export default AdminTable