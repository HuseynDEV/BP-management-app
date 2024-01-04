import React, { useState } from 'react';

const Report = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const uploadImage = async () => {
        if (!selectedFile) {
            console.error('Please select a file.');
            return;
        }

        const formData = new FormData();
        formData.append('image', selectedFile);

        try {
            const response = await fetch('https://ragged-yak-production.up.railway.app/image/', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                console.log('Image uploaded successfully!');
                // Handle success if needed
            } else {
                console.error('Image upload failed.');
                // Handle failure if needed
            }
        } catch (error) {
            console.error('There was a problem with the request:', error);
            // Handle error if needed
        }
    };

    return (
        <div>
            <input type="file" accept="image/*" onChange={handleFileChange} />
            <button onClick={uploadImage}>Upload Image</button>
        </div>
    );
};

export default Report;
