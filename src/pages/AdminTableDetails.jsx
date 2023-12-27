import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import image from '../assets/halliburton.png'
import Layout from '../components/Layout'


const AdminTableDetails = () => {
  let { id } = useParams()

  const [user, setUser] = useState([])

  useEffect(() => {
    fetch('https://ragged-yak-production.up.railway.app/api/v1/workers')
      .then(response => response.json())
      .then(commits => setUser(commits.filter(data => data.id === Number(id))));

    // setUser(data.filter(data => data.id === Number(id)))
  }, [])


  const deleteButton = (item) => {
    fetch(`https://ragged-yak-production.up.railway.app/api/v1/workers/${Number(item)}`, { method: 'DELETE' })
    console.log('error')
  }


  return (
    <Layout>
      <div className='flex items-center justify-center w-full h-full bg-white'>
        <img src={image} className='absolute -z-1 top-0 bottom-0 w-full h-full object-cover' alt="" />


        <div className="bg-white mt-[110px] overflow-auto shadow rounded-lg z-[999] border w-[500px]  mx-auto ">
          <h1 className='text-3xl w-full  py-3 text-center mx-auto'> Hello {user[0]?.firstName + " " + user[0]?.lastname}</h1>

          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Əməkdaş Profili
            </h3>
            <h3 className='mt-1'>  Email: {user[0]?.email}</h3>
            <h3 className='mb-1'>Number: {user[0]?.number}</h3>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
            <dl className="sm:divide-y sm:divide-gray-200">
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Əməkdaşın adı
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {`${user[0]?.firstName}  ${user[0]?.lastname} `}
                </dd>
              </div>
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Dənizdə iş günləri
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {user[0]?.marineDaysOn}

                </dd>
              </div>
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Təlim günlərinin tarixi
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {user[0]?.trainingDays}
                </dd>
              </div>

              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Təlim günlərinin tarixi
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {user[0]?.vacationDays}
                </dd>
              </div>
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Xəstəlik günləri
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {user[0]?.sickDays}
                </dd>
              </div>
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Təhsil məzuniyyət günləri
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {user[0]?.unpaidWorkingDays}
                </dd>
              </div>
            </dl>
          </div>

        </div>
      </div>
    </Layout>

  )
}

export default AdminTableDetails