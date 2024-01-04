import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import image from '../assets/halliburton.png'
import NavbarItems from '../components/NavbarItems'

const Profile = () => {
    const id = useSelector(state => state.usersData.userID)

    const [user, setUser] = useState([])

    useEffect(() => {
        fetch('https://ragged-yak-production.up.railway.app/api/v1/workers')
            .then(response => response.json())
            .then(commits => setUser(commits.filter(data => data.id === Number(id))));

    }, [])

    console.log(user)

    return (
        <div className='flex items-center justify-center h-screen'>

            <img src={image} className='absolute top-0 w-full h-full -z-1 object-cover' alt="" />
            <NavbarItems />

            <div className="bg-white mt-[110px] overflow-auto shadow rounded-lg z-[999] border w-[500px]  mx-auto ">
                <h1 className='text-3xl w-full  py-3 text-center mx-auto'> Hello {user[0]?.firstName + " " + user[0]?.lastname}</h1>

                <div className="px-4 py-0 sm:px-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                        Əməkdaş Profili
                    </h3>
                    <h3 className='mt-1'>  Email: {user[0]?.email}</h3>
                    <h3 className='mb-1'>Number: {user[0]?.number}</h3>
                </div>
                <div className="border-t border-gray-200  sm:p-5">
                    <div className='flex items-center gap-5 mb-5'>
                        <h3 className='w-[200px]'>Əməkdaşın adı:</h3>
                        <p className='font-bold text-center '>{`${user[0]?.firstName}  ${user[0]?.lastname} `}</p>
                    </div>
                    <div className='flex items-center gap-5 mb-5'>
                        <h3 className='w-[200px]'> Dənizdə iş günləri:</h3>
                        <p className='font-bold text-center '> {user[0]?.marineDaysOn}</p>
                    </div>
                    <div className='flex items-center gap-5 mb-5'>
                        <h3 className='w-[200px]'>Təlim günlərinin tarixi:</h3>
                        <p className='font-bold text-center '>{user[0]?.trainingDays}</p>
                    </div>
                    <div className='flex items-center gap-5 mb-5'>
                        <h3 className='w-[200px]'> Tətil günlərinin tarixi:</h3>
                        <p className='font-bold text-center '>  {user[0]?.vacationDays}</p>
                    </div>
                    <div className='flex items-center gap-5 mb-5'>
                        <h3 className='w-[200px]'>
                            Xəstəlik günləri:
                        </h3>
                        <p className='font-bold text-center  '>{user[0]?.sickDays}</p>
                    </div>
                    <div className='flex items-center gap-5 mb-5'>
                        <h3 className='w-[200px]'> Təhsil məzuniyyət günləri:</h3>
                        <p className='font-bold text-center '>{user[0]?.unpaidWorkingDays}</p>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Profile