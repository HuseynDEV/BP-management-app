import React from 'react'
import Layout from '../components/Layout'
import image from '../assets/halliburton.png'
import NavbarItems from '../components/NavbarItems'


const Trainings = () => {
    return (
        <Layout>
            <div className='flex items-center justify-center h-screen bg-[#CC0000]'>
                <NavbarItems />
                <img src={image} className='w-full object-cover h-full' alt="" />

            </div>
        </Layout>
    )
}

export default Trainings