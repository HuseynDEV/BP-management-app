import React, { useState } from 'react';

const FormComponent = () => {
  const [numberInput, setNumberInput] = useState('');
  const [textInput, setTextInput] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleNumberInputChange = (e) => {
    setNumberInput(e.target.value);
  };

  const handleTextInputChange = (e) => {
    setTextInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (textInput.trim() === '') {
      setErrorMessage('Text input cannot be empty');
    } else {
      // Handle form submission here
      console.log('Number Input:', numberInput);
      console.log('Text Input:', textInput);
      // Clear inputs and error message after successful submission
      setNumberInput('');
      setTextInput('');
      setErrorMessage('');
    }
  };

  // Enable/disable button based on text input value
  React.useEffect(() => {
    setIsButtonDisabled(textInput.trim() === '');
  }, [textInput]);

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-8">
      <div className="mb-4">
        <label htmlFor="numberInput" className="block text-sm font-medium text-gray-700">
          Number Input
        </label>
        <input
          type="number"
          id="numberInput"
          value={numberInput}
          onChange={handleNumberInputChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="textInput" className="block text-sm font-medium text-gray-700">
          Text Input
        </label>
        <input
          type="text"
          id="textInput"
          value={textInput}
          onChange={handleTextInputChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
        {errorMessage && (
          <p className="mt-2 text-sm text-red-600" role="alert">
            {errorMessage}
          </p>
        )}
      </div>
      <button
        type="submit"
        className={`w-full bg-indigo-500 text-white rounded-md py-2 px-4 ${
          isButtonDisabled ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        disabled={isButtonDisabled}
      >
        Submit
      </button>
    </form>
  );
};

export default FormComponent;