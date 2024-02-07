import React, { useEffect, useState, useRef } from 'react';
import { imgDB, txtDB } from '../firebase/raportConfig';
import { v4 } from 'uuid';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { addDoc, collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import NavbarItems from '../components/NavbarItems';
import image from '../assets/halliburton.png';
import { toast } from 'react-toastify';

const Raport = () => {
    const [productName, setProductName] = useState('');
    const [productQuantity, setProductQuantity] = useState('');
    const [imgs, setImgs] = useState([]); // State to store image URLs
    const [data, setData] = useState([]);



    const mainImage = useRef(null)



    const handleUpload = (e) => {
        const files = Array.from(e.target.files);
        const promises = files.map((file) => {
            const imgRef = ref(imgDB, `Imgs/${v4()}`);
            return uploadBytes(imgRef, file).then((data) => getDownloadURL(data.ref));
        });

        Promise.all(promises)
            .then((downloadUrls) => {
                setImgs(downloadUrls); // Store image URLs in state
            })
            .catch((error) => {
                console.error('Error uploading images: ', error);
            });
    };

    const handleClick = async () => {
        const valRef = collection(txtDB, 'txtData');
        await addDoc(valRef, { product: productName, quantity: productQuantity, imgUrls: imgs });
        toast.success('Added', {
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

    const getData = async () => {
        const valRef = collection(txtDB, 'txtData');
        const dataDb = await getDocs(valRef);
        const allData = dataDb.docs.map((val) => ({ ...val.data(), id: val.id }));
        setData(allData);
    };

    const handleDelete = async (id) => {
        const docRef = doc(txtDB, 'txtData', id);
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



    const handleImage = (e) => {
        console.log()
        mainImage.current.src = e.target.src
    }


    return (
        <div className='flex items-center justify-center h-full bg-[#CC0000]'>
            <NavbarItems  />
            <img src={image} className='absolute top-0 left-0 bottom-0 -z-1 w-full object-cover h-[100%]' alt='' />
            <div className='p-5 z-10 md:mt-[500px] mt-[100px] rounded-lg bg-white  w-[90%]  mx-auto overflow-auto'>
                <div className='md:inline-flex     md:items-center gap-3'>
                    <input type='file'  multiple onChange={(e) => handleUpload(e)} />
                    <input
                        className='border-[1px] m-2 border-black h-[30px] placeholder:text-black'
                        placeholder='Product Name'
                        type='text'
                        onChange={(e) => setProductName(e.target.value)}
                    />
                    <input
                        className='border-[1px] m-2 border-black h-[30px] placeholder:text-black'
                        placeholder='Product Quantity'
                        type='number'
                        onChange={(e) => setProductQuantity(e.target.value)}
                    />
                    <button onClick={handleClick} className='w-[150px] m-2 h-[32px] rounded-md bg-[#CC0000] text-white'>
                        Add
                    </button>
                </div>
                <div className='mt-5 flex flex-wrap gap-3'>
                    {data.map((value) => {
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
                                        <img key='12' ref={mainImage} className={`w-[300px] h-[250px] rounded-md object-cover`} src={value.imgUrls[0]} alt='' />
                                        {value.imgUrls.map((url, index) => (
                                            <div key={index} className='inline-flex mx-1 mt-2 items-center'> <img  onClick={handleImage} className={`image${index} inline-flex w-[40px] h-[40px] rounded-md object-cover`} src={url} alt='' /></div>
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

export default Raport;
