import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import image from '../assets/halliburton.png'
import NavbarItems from '../components/NavbarItems'
import { useSelector } from 'react-redux'
import {toast} from 'react-toastify'



const UserTable = () => {
    let { id } = useParams()
  const userId = useSelector(state => state.usersData)
    const initialState = {
        marineDaysOn: "",
        trainingDays: "",
        sickDays: "",
        vacationDays: "",
        unpaidWorkingDays: "",
    }
    const [inputs, setInputs] = useState(initialState);
    const [errorMessage, setErrorMessage] = useState('');
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    const handleOnchange = (event) => {
        setInputs({ ...inputs, [event.target.name]: event.target.value })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputs.marineDaysOn.trim() === '' || inputs.trainingDays.trim() === '' ||
            inputs.sickDays.trim() === '' || inputs.vacationDays.trim() === '' || inputs.unpaidWorkingDays.trim() === ''
        ) {
            setErrorMessage('Text input cannot be empty');
        } else {
            setErrorMessage('');
        }
    };

    const saveBtn = async () => {
        const url = `https://ragged-yak-production.up.railway.app/api/v1/workers/${id}`; // Your POST endpoint
        const data = {
            firstName: "Huseyn",
            lastname: "Alizada",
            number: 788979,
            email: "fuad@mail.com",
            marineDaysOn: inputs.marineDaysOn,
            trainingDays: inputs.trainingDays,
            sickDays: inputs.sickDays,
            vacationDays: inputs.vacationDays,
            unpaidWorkingDays: inputs.unpaidWorkingDays,
            username: "fuad",
            password: "54321",
            educationalVacation: 0
        }

        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok.');
                }
                return response.json();
            })
            .then(data => {
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
            })
            .catch(error => {
                console.error('There was a problem with the POST request:', error);
            });
    }

    React.useEffect(() => {
        setIsButtonDisabled(inputs.marineDaysOn.trim() === '' || inputs.trainingDays.trim() === "" ||
            inputs.sickDays.trim() === '' || inputs.vacationDays.trim() === '' || inputs.unpaidWorkingDays.trim() === ''
            || inputs.unpaidWorkingDays.trim() === '')
    }, [inputs]);
    return (
            <div className='flex items-center justify-center h-screen'>

                <img src={image} className='absolute top-0 w-full h-full -z-1 object-cover' alt="" />
               <NavbarItems/>

                <form onSubmit={handleSubmit} className="w-[400px] bg-white  p-5 rounded-lg mx-auto mt-8 form-user z-[999]">
                    
                    <div className="mb-4 ">
                        <label htmlFor="numberInput" className="block text-sm font-medium text-gray-700">
                            Dənizdə iş günləri
                        </label>
                        <input
                            type="number"
                            id="numberInput"
                            name='marineDaysOn'
                            onChange={handleOnchange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        />

                    </div>

                    <div className="mb-4 ">
                        <label htmlFor="numberInput" className="block text-sm font-medium text-gray-700">
                            Təlim günləri
                        </label>
                        <input
                            type="number"
                            id="numberInput"
                            name='trainingDays'
                            onChange={handleOnchange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="numberInput" className="block text-sm font-medium text-gray-700">
                            Xəstəlik günləri
                        </label>
                        <input
                            type="number"
                            id="numberInput"
                            name='sickDays'
                            onChange={handleOnchange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        />
                    </div>


                    <div className="mb-4">
                        <label htmlFor="numberInput" className="block text-sm font-medium text-gray-700">
                            Məzuniyyət günləri
                        </label>
                        <input
                            type="number"
                            id="numberInput"
                            name='vacationDays'
                            onChange={handleOnchange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        />


                    </div>

                    <div className="mb-4">
                        <label htmlFor="numberInput" className="block text-sm font-medium text-gray-700">
                            Ödənilməmiş iş günləri
                        </label>
                        <input
                            type="number"
                            id="numberInput"
                            name='unpaidWorkingDays'
                            onChange={handleOnchange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        />


                    </div>

                    <button
                        type="submit"
                        className={`w-full bg-red-500 text-white rounded-md py-2 px-4 ${isButtonDisabled ? 'opacity-50 cursor-not-allowed' : ''
                            }`}
                        disabled={isButtonDisabled}
                        onClick={saveBtn}
                    >
                        Save
                    </button>
                </form>
            </div>

    )
}

export default UserTable


