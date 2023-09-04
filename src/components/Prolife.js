import React, { useContext, useEffect } from 'react'
import UserContext from '../context/user/UserContext'

export default function Prolife() {

    const { getProfile, selectedUser } = useContext(UserContext)

    useEffect(() => {
        getProfile(1)

    }, [])

    useEffect(() => {
        console.log(selectedUser)
    }, [selectedUser])

    return (
        <>
            {/* <input type='text' value={} /> */}
            <div>
                {
                    (selectedUser !== undefined && selectedUser !== null) &&
                    selectedUser.first_name
                }
            </div>
            
        </>
    )
}
