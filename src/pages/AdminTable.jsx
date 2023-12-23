import React, { useEffect, useState } from 'react'
import image from '../assets/halliburton.png'
import { Link } from 'react-router-dom'



const AdminTable = () => {
    const [data, setData] = useState()
    useEffect(() => {
        fetch('https://ragged-yak-production.up.railway.app/api/v1/workers')
            .then(response => response.json())
            .then(commits => setData(commits));
    }, [])
    return (
        <div className='flex items-center h-screen mx-auto flex-col justify-center w-[80%]'>
                 <img src={image} className='absolute -z-1 w-full h-full object-cover' alt="" />
            {
                data?.map(user => {
                    return (
                        <div className=" rounded overflow-auto z-[999] h-[700px] w-full shadow-lg m-4" key={user.id}>
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2 flex items-center gap-2">
                                    <div>Name: {user.firstName} {user.lastn}</div>
                                </div>
                                <div className="text-gray-700 text-base flex items-center gap-2">
                                    <div>Email: {user.email}</div>
                                </div>

                                <Link to={`/admintable/${user.id}`} type='button' className='mt-3 border-[1px] px-4 py-1 rounded-lg text-white bg-[#CC0000]'>Details</Link>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default AdminTable