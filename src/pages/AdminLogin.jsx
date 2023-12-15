import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const AdminLogin = () => {
  const [password, setPassword] = useState()
  const navigate = useNavigate()

  const handleRoute = () => {
    if (password === '40710') {
      navigate('/admintable')
    }
   else{
    alert('Xahiş olunur düzgün parolu daxil edin')
   }
  }

  return (
    <div className='flex items-center justify-center h-screen'>
      <div class="w-full max-w-xs">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
              Password
            </label>
            <input onChange={(e) => setPassword(e.target.value)} class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
          </div>
          <div class="flex items-center justify-between">
            <Link onClick={handleRoute} >Daxil Ol</Link>
          </div>
        </form>

      </div>
    </div>
  )
}

export default AdminLogin