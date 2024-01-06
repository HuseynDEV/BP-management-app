import React, { useEffect, useState } from 'react'

const Raport = () => {


    const [user, setUser] = useState([])

    useEffect(() => {
        fetch('https://ragged-yak-production.up.railway.app/api/images/with-links')
            .then(response => response.json())
            .then(commits => setUser(commits[1].imageUrl));

    }, [])
    console.log(user, 'user')

    return (
        <div>
            <img src={user} alt="wdawda" />
        </div>
    )
}

export default Raport