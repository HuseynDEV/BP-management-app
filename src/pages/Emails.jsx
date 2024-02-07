import React from 'react'
import image from '../assets/halliburton.png'
import NavbarItems from '../components/NavbarItems'


const Emails = () => {
    const datas = [
        { name: "Nurlan Mahmudov", position: "Advanced Drilling Fluids Plant Manager at BP", email: "nurlanmn@gmail.com" },
        { name: "David Obando ", position: 'Baroid Area Manager', email: "paisa2558@hotmail.com" },
        { name: "Elnur Hajiyev ", position: "AFF Base Manager", email: " el3196ur@yahoo.com" },
        { name: "Teymur Mehdiyev", position: "AFF Base Manager", linkedin: "https://www.linkedin.com/in/teymur-mehdiyev-92547a2b/" },
        { name: 'Qahraman Valiyev', position: "Base Manager Assistant", linkedin: "https://www.linkedin.com/in/gahraman-valiyev-300102149/" },
        { name: 'Zaur Rahimov', position: "Health Safety Environment Coordinator", email: 'zaur.rahimov@hotmail.com' },
        { name: "Ziya Agabalayev", position: "Health Safety Environment Coordinator", linkedin: "https://www.linkedin.com/in/ziya-agabalayev-ba1441b0/" },
        { name: 'Vusala Akbarova', position: "Area HR Business Partner Manager/Caspian", email: 'Vusala.Akbarova@halliburton.com' }
    ]
    return (
            <div className='flex items-center justify-center h-screen bg-[#CC0000]'>
                <NavbarItems />
                <img src={image} className='absolute  -z-1 w-full object-cover h-full' alt="" />
                <div className=' p-5 rounded-lg bg-white z-[999]  '>
                    {
                        datas.map((item,index) => (
                            <div key={index} className='my-4'>
                                <h3 className='font-bold'>{item.name} ({item.position})</h3>
                                {item.email ? <h3>Email: <a target='_blank' className='font-bold text-blue-600 ' href={`mailto:${item.email}`} >{item.email}</a> </h3> : <h3>Linkedin: <a target='_blank' className='font-bold text-blue-600' href={item.linkedin}>{item.linkedin}</a> </h3>}
                            </div>
                        ))
                    }
                </div>  

            </div>
    )
}

export default Emails