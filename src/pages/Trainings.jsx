import React from 'react'
import Layout from '../components/Layout'
import image from '../assets/halliburton.png'
import NavbarItems from '../components/NavbarItems'


const Trainings = () => {


    return (
            <div className='flex items-center justify-center h-screen  mt-5'>
                <NavbarItems />
                <img src='https://www.bp.com/content/dam/bp/country-sites/en_gb/united-kingdom/home/images/16-9/clair-ridge.jpg' className='w-full fixed top-0 object-cover h-full' alt="" />
                <div className=' p-5 mt-10  rounded-lg bg-white z-[999] h-[600px] overflow-auto w-[700px] mx-auto   '>
                    <h1 className='text-3xl mb-2 text-center w-full mx-auto'>Training Courses</h1>
                    <div className='border-b-[1px] pb-2 border-black relative ' >
                        <h2 className='font-bold text-2xl'>Introduction - Welcome to the Halliburton.</h2>
                        <h2 className=' mb-3 text-[#007F00] font-bold text-2xl'>About Halliburton</h2>
                        <a className='block text-blue-600 font-bold' href="https://youtu.be/DLGzUT-pV8o?si=GpSYNcp5UEB5wmRl">Video 1</a>
                        <a className='block text-blue-600 font-bold' href="https://youtu.be/npIksocXHCs?si=201GFcxwjPG7lCzH">Video 2</a>
                        <p className='mt-2'>
                            <span className='font-semibold text-lg '>Halliburton informative Videos from all kind of aspects which each 					Halliburton employee should be familiar with:</span> <br />
                            You can reach all valuable informations through these links which are provided below.To get a chance to achieve high level Career in your Company we suggest you to be familiar with all this links.We all wish you best career in your Company.
                            Let’s help to Improve each other together and be one of the proudly worker of our company.
                        </p>
                    </div>
                    <div className='my-4 border-b-[1px] pb-2 border-black '>
                        <h2 className='font-bold text-2xl mb-2'>Hot Helper Links:</h2>
                        <p>What to do If I have to change my Halliburton Account password and What to do if I want to reset my Microsoft Authenticator password?</p>
                        <p>Use links below to fix your current problem:</p>
                        <a className='block text-blue-600 font-bold' href="https://www.youtube.com/watch?v=NaRpFezdvgQ">Video 1</a>
                        <a className='block text-blue-600 font-bold' href="https://www.youtube.com/watch?v=fnUyTwLfA8U">Video 2</a>
                        <a className='block text-blue-600 font-bold' href="https://www.youtube.com/watch?v=9J3c8yh4hJA&t=18s">Video 3</a>
                    </div>
                    <div className='my-4 border-b-[1px] pb-2 border-black '>
                        <h2 className='font-bold text-2xl mb-2'>HSE course:</h2>
                        <h3 className='text-xl mb-3 font-semibold'>HSE ( Health Safety Environment ):</h3>
                        <div>
                            <p className='inline-block mr-2'>Content Type(Video):</p>
                            <a className='text-blue-600 font-bold' href="https://www.youtube.com/watch?v=OHkcdXyxRN4">Video</a>
                        </div>
                        <div>
                            <p className='inline-block mr-2'>Content Type(Blog):</p>
                            <a className='text-blue-600 font-bold' href="https://www.halliburton.com/en/about-us/health-safety-environment-service-quality">Blog</a>
                        </div>
                    </div>

                    <div className='my-4  border-black '>
                        <h2 className='font-bold text-2xl mb-2'>Unit course:</h2>
                        <h3 className='text-xl mb-3 font-semibold'>Centrifuge Unit:</h3>
                        <div>
                            <p className='inline-block mr-2'>Content Type(Video):</p>
                            <a className='text-blue-600 font-bold' href="https://www.youtube.com/watch?si=tLiWfT9xzYzY8X1D&v=w4bEzTEpnkc&feature=youtu.be">Video 1,</a>
                            <a className='text-blue-600 font-bold ml-3' href="https://www.youtube.com/watch?v=sj5Tds3aBkYsi%3D_VzbKJQUZG_dL4bd&feature=youtu.be">Video 2</a>
                        </div>
                        <div>
                            <h3 className='inline-block mr-2'>Content Type(Blog):</h3>
                            <a className='text-blue-600 font-bold' href="https://www.halliburton.com/en/well-construction/drilling-completion-fluids/baroid-solids-control-solutions/baroid-centrifuges">Blog</a>
                        </div>
                    </div>


                    <h1 className='text-3xl mb-2 text-center pt-4 w-full mx-auto text-[#007F00] font-bold'>OVERALL KNOWLEDGE</h1>

                    <div className='border-b-[1px] pb-2 border-black'>
                        <h2 className='font-bold text-2xl mb-2'>Drilling course:</h2>

                        <div className='flex'>
                            <h3 className='   inline-block mr-2'>Content Type(Video):</h3>
                            <div className='flex '>
                                <a className='text-blue-600 font-bold' href="https://www.youtube.com/watch?v=uVrw3InxPyc">Video 1,</a>
                                <a className='text-blue-600 font-bold mx-3' href="https://www.youtube.com/watch?v=JGQNUJoN20s">Video 2,</a>
                                <a className='text-blue-600 font-bold' href="https://www.youtube.com/watch?v=2upE6beTMkg">Video 3</a>
                            </div>
                        </div>
                        <div>
                            <h3 className=' mb-3  inline-block mr-2'>Content Type(Blog)</h3>
                            <a className='text-blue-600 font-bold' href="https://www.halliburton.com/en/well-construction/drilling">Blog 1,</a>
                            <a className='text-blue-600 font-bold ml-2' href="https://www.halliburton.com/subsurface">Blog 2(Subsurface)</a>
                        </div>
                    </div>

                    <div className='my-4'>
                        <h2 className='font-bold text-2xl mb-2'>Technical English:</h2>
                        <p className=' inline-block '>As a foreign company employee we strongly advice you to be familiar with all technical English words which have been mentioned in the link below:</p>
                        <a className='text-blue-600 font-bold' href="https://www.ef.com/wwen/english-resources/english-vocabulary/top-1000-words/">Blog</a>
                    </div>

                </div>
            </div>
    )
}

export default Trainings