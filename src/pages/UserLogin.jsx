import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import image from '../assets/halliburton.png'
import { useSelector, useDispatch } from 'react-redux'
import { addUserID } from '../features/userSlice'



const UserLogin = () => {
  const navigate = useNavigate();
  let userId = useSelector(state => state.usersData.userID)
  const dispatch = useDispatch()

  const initialState = {
    name: "",
    password: ""
  }
  const [user, setUser] = useState(initialState)

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('https://ragged-yak-production.up.railway.app/api/v1/workers')
      .then(response => response.json())
      .then(commits => {
        commits.filter(item => {
          if (item.password === user.password && item.firstName === user.name) {
            navigate(`/usertable/${item.id}`)
            localStorage.setItem('userId', item.id)
            dispatch(addUserID(item.id))
          }
        })
      });
  }


  return (

    <div className='flex items-center justify-center h-screen'>
      <img src={image} className='absolute w-full h-full -z-1 object-cover' alt="" />

      <div className="w-full max-w-xs z-[999]">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              User Name
            </label>
            <input value={user.name} name='name' onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Name" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="userpasword">
              User Password
            </label>
            <input value={user.password} name='password' onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="userpassword" type="password" placeholder="Password" />
          </div>
          <div className="flex items-center justify-between">
            <button style={{ pointerEvents: user.name && user.password ? 'auto' : 'none' }} onClick={handleSubmit} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Keç
            </button>

          </div>
        </form>

      </div>
    </div>

  )
}

export default UserLogin