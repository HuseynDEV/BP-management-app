import React, { useEffect, useState } from 'react'
import { imgDB, txtDB } from '../firebase/raportConfig'
import { v4 } from 'uuid';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { addDoc, collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import NavbarItems from '../components/NavbarItems';
import image from '../assets/halliburton.png'
import { toast } from 'react-toastify'

const Raport = () => {
    const [productName, setProductName] = useState('')
    const [productQuantity, setProductQuantity] = useState('')
    const [img, setImg] = useState('')
    const [data, setData] = useState([])


    const handleUpload = (e) => {
        const imgs = ref(imgDB, `Imgs/${v4()}`)
        uploadBytes(imgs, e.target.files[0]).then(data => {
            getDownloadURL(data.ref).then(val => {
                setImg(val)
            })
        })
    }

    const handleClick = async () => {
        const valRef = collection(txtDB, 'txtData')
        await addDoc(valRef, { product: productName, quantity: productQuantity, imgUrl: img })
        toast.success('Added', {
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

    const getData = async () => {
        const valRef = collection(txtDB, 'txtData')
        const dataDb = await getDocs(valRef)
        const allData = dataDb.docs.map(val => ({ ...val.data(), id: val.id }))
        setData(allData)
    }

    const handleDelete = async (id) => {
        const docRef = doc(txtDB, 'txtData', id);
        await deleteDoc(docRef);
        getData();
        toast.success('Deleted', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    };

    useEffect(() => {
        getData()
    }, [data])

    return (
        <div className='flex items-center justify-center h-screen bg-[#CC0000]'>
            <NavbarItems />
            <img src={image} className='absolute  -z-1 w-full object-cover h-full' alt="" />
            <div className=' p-5 rounded-lg bg-white z-[999] w-[90%]   mx-auto overflow-auto'>

                <div className='flex items-center gap-3'>
                    <input type="file" onChange={(e) => handleUpload(e)} />
                    <input className='border-[1px] border-black h-[30px] placeholder:text-black' placeholder='Product Name' type='text' onChange={(e) => setProductName(e.target.value)} />
                    <input className='border-[1px] border-black h-[30px] placeholder:text-black' placeholder='Product Quantity' type='number' onChange={(e) => setProductQuantity(e.target.value)} />
                    <button onClick={handleClick} className='w-[150px] h-[32px] rounded-md bg-[#CC0000] text-white'>Add</button>
                </div>
                <div className='mt-5 grid grid-cols-4  gap-3 '>
                    {
                        data.map(value => {
                            return (
                                <div className='border-[1px] rounded-md border-black p-3' key={value.id}>
                                    <div className='text-xl font-bold'> <span className='font-semibold text-xl'>Product Name</span> : {value.product}</div>
                                    <div className='text-xl font-bold mb-3'><span className='font-semibold text-xl'>Product Quantity</span> :{value.quantity}</div>
                                    <img className='w-full h-[250px] rounded-md object-cover' src={value.imgUrl} alt="" />
                                    <button onClick={() => handleDelete(value.id)} className='w-[100px] h-[30px] mt-2 rounded-md bg-[#CC0000] text-white'>Ready</button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Raport