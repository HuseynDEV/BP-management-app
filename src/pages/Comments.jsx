import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import image from '../assets/halliburton.png'
import NavbarItems from '../components/NavbarItems'

const Comments = () => {
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    useEffect(() => {
        const checkTime = () => {
            const options = {
                timeZone: 'Asia/Baku',
                hour12: false,
                hour: 'numeric',
            };

            const currentDate = new Date().toLocaleString('en-US', options);
            const currentHour = parseInt(currentDate);

            if (currentHour < 9 || currentHour >= 18) {
                setIsButtonDisabled(true);
            } else {
                setIsButtonDisabled(false);
            }
        };

        checkTime();

        const interval = setInterval(checkTime, 60000);

        return () => clearInterval(interval);
    }, []);
    return (

            <div className='flex items-center justify-center h-screen'>

                <img src={image} className='absolute top-0 w-full h-full -z-1 object-cover' alt="" />
                <NavbarItems />
                <div className='z-[999] bg-white p-5 rounded-md'>
                    <h1 className='text-2xl text-center' >Thoughts and suggestions can be sent through this email.</h1>
                    <h3 className='text-4xl my-3 text-red-600 text-center'>Attention!!!</h3>
                    <p className='text-xl text-red-600'>Messages to this email can only be sent during business hours (09:00 - 18:00).</p>
                    <div className='flex items-center justify-center'>
                        <button className='bg-blue-600 px-4 rounded-md py-2 mt-4 ' disabled={isButtonDisabled}>
                            {isButtonDisabled ? (
                                <span className=' block font-semibold text-xl text-white'>Unable to send an email as it is outside of business hours                            </span>
                            ) : (
                                <a className=' block font-semibold text-xl text-white' href="mailto:paisa2558@hotmail.com"> David Obandos Email </a>
                            )}
                        </button>
                    </div>
                </div>
            </div>
    )
}

export default Comments