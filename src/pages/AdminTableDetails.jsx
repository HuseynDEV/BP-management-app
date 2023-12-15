import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import datas from '../data.json'

const AdminTableDetails = () => {
  let { id } = useParams()

  const [user, setUser] = useState([])

  useEffect(() => {
    fetch(`https://callous-knot-production.up.railway.app/api/v1/workers`)
      .then(response => response.json())
      .then(commits => setUser(commits.filter(data => data.id === Number(id))));

    // setUser(data.filter(data => data.id === Number(id)))
  }, [])

  // setUser(datas.filter(data=>{
  //   return data.id===id
  // }))

  const deleteButton =  (item) => {
     fetch(`https://callous-knot-production.up.railway.app/api/v1/workers/${Number(item)}`, { method: 'DELETE' })
    console.log('error')
  }

  console.log(user[0]?.id)

  return (
    <div className='flex items-center justify-center h-screen'>
      <div class="bg-white overflow-hidden shadow rounded-lg border w-[500px] mx-auto ">
        <div class="px-4 py-5 sm:px-6">
          <h3 class="text-lg leading-6 font-medium text-gray-900">
            Əməkdaş Profili
          </h3>
        </div>
        <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
          <dl class="sm:divide-y sm:divide-gray-200">
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">
                Əməkdaşın adı
              </dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {`${user[0]?.firstName}  ${user[0]?.lastname} `}
              </dd>
            </div>
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">
                Dənizdə iş günləri
              </dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {user[0]?.marineDaysOn}

              </dd>
            </div>
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">
                Təlim günlərinin tarixi
              </dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {user[0]?.trainingDays}
              </dd>
            </div>
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">
                Təlim günlərinin tarixi
              </dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {user[0]?.educationalVacation}
              </dd>
            </div>
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">
                Təlim günlərinin tarixi
              </dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {user[0]?.vacationDays}
              </dd>
            </div>
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">
                Xəstəlik günləri
              </dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {user[0]?.sickDays}
              </dd>
            </div>
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">
                Təhsil məzuniyyət günləri
              </dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {user[0]?.unpaidWorkingDays}
              </dd>
            </div>
          </dl>
        </div>
        {/* <button onClick={() => deleteButton(user[0]?.id)}>delete</button> */}

      </div>
    </div>

  )
}

export default AdminTableDetails