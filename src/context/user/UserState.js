
import React, { useReducer } from 'react'
import UserReducer from './UserReducer'
import UserContext from './UserContext'
// import {GET_USERS, GET_PROFILE} from '../types'

export default function UserState(props) {

    const initialState = {
        users: [],
        selectedUser: null
    }

    const [state, dispatch] = useReducer(UserReducer, initialState)

    const getUsers = async () => { 
        const res = await fetch('https://reqres.in/api/users')
        const data = await res.json()
        console.log(data.data)
        dispatch({
            type: 'GET_USERS',
            payload: data.data
        })
    }

    const getProfile = async (id) => {
        const res = await fetch('https://reqres.in/api/users/'+id)
        const data = await res.json()
        console.log(data.data)
        dispatch({
            type: 'GET_PROFILE',
            payload: data.data
        })
     }

    return (
        <UserContext.Provider value={{
            users: state.users,
            selectedUser: state.selectedUser,
            getUsers,
            getProfile
        }}>
            {props.children}
        </UserContext.Provider>
    )
}

