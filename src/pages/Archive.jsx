import React, { useEffect, useState, useRef } from 'react';
import { addDoc, collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { imgDB, txtDB } from '../firebase/raportConfig';
import NavbarItems from '../components/NavbarItems';
import image from '../assets/halliburton.png';
import { toast } from 'react-toastify';

const Archive = () => {
    const mainImage = useRef([])

    const [data, setData] = useState([]);

    const getData = async () => {
        const valRef = collection(txtDB, 'txtData2');
        const dataDb = await getDocs(valRef);
        const allData = dataDb.docs.map((val) => ({ ...val.data(), id: val.id }));
        setData(allData);
    };

    const handleDelete = async (id) => {
        const docRef = doc(txtDB, 'txtData2', id);
        await deleteDoc(docRef);
        getData();
        toast.success('Deleted', {
            position: 'top-center',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
        });
    };

  
    
    useEffect(() => {
        getData();
    }, [data]);



    const handleImage = (e, index) => {
        console.log(
            mainImage.current[index].src = e.target.src
        )
    }



    const addToRef = (el) => {
        if (el && !mainImage.current.includes(el)) {
            mainImage.current.push(el)
        }
    }




    return (
        <div className='flex items-center justify-center h-full bg-[#007F00]'>
            <NavbarItems />
            <img src='https://www.bp.com/content/dam/bp/country-sites/en_gb/united-kingdom/home/images/16-9/clair-ridge.jpg' className='absolute top-0 left-0 bottom-0 -z-1 w-full object-cover h-[100%]' alt='' />
            <div className='p-5 z-10 md:mt-[500px] mt-[100px] rounded-lg bg-white  w-[90%]  mx-auto overflow-auto'>
                
                <div className='mt-5 flex flex-wrap gap-3'>
                
                    { !data.length ? <h1 className='text-3xl text-center w-full text-[#007F00]'>Don't have a any data</h1>:
                    data.map((value, index2) => {
                        return (
                            <div className='border-[1px] rounded-md border-black p-3' key={value.id}>
                                <div className='text-xl font-bold'>
                                    {' '}
                                    <span className='font-semibold text-xl'>Product Name</span> : {value.product}
                                </div>
                                <div className='text-xl font-bold mb-3'>
                                    <span className='font-semibold text-xl'>Product Quantity</span> :{value.quantity}
                                </div>
                                <div className='flex'>
                                    {/* {
                                            <img key={index} className={`image${index} w-full h-[250px] rounded-md object-cover`}  src={value.imgUrls[0]} alt='' />
                                                                                                                                
                                    } */}
                                    <div className=''>
                                        <img key='12' ref={addToRef} className={`w-[300px] h-[250px] rounded-md object-cover`} src={value.imgUrls[0]} alt='' />
                                        {value.imgUrls.map((url, index) => (
                                            <div key={index} className='inline-flex mx-1 mt-2 items-center'> <img onClick={(e) => handleImage(e, index2)} className={`image${index} inline-flex w-[40px] h-[40px] rounded-md object-cover`} src={url} alt='' /></div>
                                        ))}
                                    </div>
                                </div>
                                <button
                                    onClick={() => handleDelete(value.id)}
                                    className='w-[100px] h-[30px] mt-2 rounded-md bg-[#CC0000] text-white'
                                >
                                    Ready
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Archive;
