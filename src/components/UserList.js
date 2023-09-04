import React, { useContext, useEffect } from 'react'
import UserContext from '../context/user/UserContext'


export default function UserList() {

  const { getUsers, users } = useContext(UserContext)

  useEffect(() => {
    getUsers()
  }, [])

  useEffect(() => {
    console.log(users)
  }, [users])

  return (
    <div>
      {(users !== undefined && users.length > 0) &&
        users.map((user, ix) =>
          <>
            <div style={{ display: "flex", justifyContent: "left", justifyItems: "left", alignContent: "left", alignItems: "left", flexDirection: "column" }} key={ix}>
              <img src={user.avatar} alt='image usr.avatar' />
              <div>{`${user.first_name} ${user.last_name}`}</div>
            </div>
          </>
        )}
    </div>
  )
}
