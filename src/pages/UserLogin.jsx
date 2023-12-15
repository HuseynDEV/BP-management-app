import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const UserLogin = () => {
  const [userId, setUserId] = useState(0)
  let {id}=useParams()
  return (
    <div className='flex items-center justify-center h-screen'>
      {id}
      <div class="w-full max-w-xs">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
              İstifadəçi id
            </label>
            <input value={id} onChange={e => setUserId(e.target.value)} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="İD" />
          </div>
          {/* <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
      <p class="text-red-500 text-xs italic">Please choose a password.</p>
    </div> */}
          <div class="flex items-center justify-between">
            <Link to={`/usertable/${userId}`} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Keç
            </Link>
            {/* <Link to='/userregister' class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
       Register
      </Link> */}
          </div>
        </form>

      </div>
    </div>
  )
}

export default UserLogin