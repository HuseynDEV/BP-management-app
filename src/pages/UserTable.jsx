import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'


const UserTable = () => {
    let { id } = useParams()
    const initialState = {
        marineDaysOn: "",
        trainingDays: "",
        sickDays: "",
        vacationDays: "",
        unpaidWorkingDays: "",
        educationalVacation: ""
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
            || inputs.educationalVacation.trim() === '') {
            setErrorMessage('Text input cannot be empty');
        } else {
            setErrorMessage('');
        }
    };

    const saveBtn = async () => {
        const url = `https://callous-knot-production.up.railway.app/api/v1/workers/${id}`; // Your POST endpoint
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
            educationalVacation: inputs.educationalVacation,
            username: "fuad",
            password: "54321"
        }

        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json', // Specify the content type if sending JSON data
                // Add any other headers as needed
            },
            body: JSON.stringify(data), // Convert the data to JSON format
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok.');
                }
                // Handle the response data here if needed
                return response.json();
            })
            .then(data => {
                // Handle the data received from the server
                console.log('POST request successful with response:', data);
                alert("Əməliyyat uğurla başa çatdı")
            })
            .catch(error => {
                // Handle errors here
                console.error('There was a problem with the POST request:', error);
            });


    }

    React.useEffect(() => {
        console.log(inputs)
        setIsButtonDisabled(inputs.marineDaysOn.trim() === '' || inputs.trainingDays.trim() === "" ||
            inputs.sickDays.trim() === '' || inputs.vacationDays.trim() === '' || inputs.unpaidWorkingDays.trim() === '' 
            || inputs.unpaidWorkingDays.trim() === '' || inputs.educationalVacation.trim()==='')
    }, [inputs]);
    return (
        <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-8 form-user">

            <div className="mb-4">
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

            <div className="mb-4">
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

            <div className="mb-4">
                <label htmlFor="numberInput" className="block text-sm font-medium text-gray-700">
                    Təhsil tətil günləri
                </label>
                <input
                    type="number"
                    id="numberInput"
                    name='educationalVacation'
                    onChange={handleOnchange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />


            </div>

            <button
                type="submit"
                className={`w-full bg-indigo-500 text-white rounded-md py-2 px-4 ${isButtonDisabled ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                disabled={isButtonDisabled}
                onClick={saveBtn}
            >
                Save
            </button>
        </form>
    )
}

export default UserTable


