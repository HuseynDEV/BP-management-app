import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import image from '../assets/halliburton.png'
import {toast} from 'react-toastify'



const AdminLogin = () => {
  const [password, setPassword] = useState()
  const navigate = useNavigate()

  const handleRoute = (e) => {
    e.preventDefault()
    if (password === '40710') {
      navigate('/admintable')
      toast.success('Success', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
   else{
    toast.error('Failed', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
   }
  }

  return (


<div className='flex items-center justify-center h-screen'>
      <img src='https://www.bp.com/content/dam/bp/business-sites/en/global/corporate/images-jpg-png/news-and-insights/bp-magazine/re-pics-of-the-year-argos.jpg.img.1280.medium.jpg' className='absolute -z-1 w-full h-full object-cover' alt="" />
      {/* <div className='bg-[#007F00]  absolute -z-1 w-full h-full object-cover'></div> */}
      <div className="w-full max-w-xs z-[999]">
     
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"  >
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input onChange={(e) => setPassword(e.target.value)} className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
          </div>
          <div className="flex items-center justify-between">
            <button className='bg-[#007F00] text-white -mt-5 px-5 py-2 rounded-md' onClick={handleRoute} >Daxil Ol</button>

          </div>
        </form>

      </div>
    </div>

  )
}

export default AdminLogin