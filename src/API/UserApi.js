import React, { useCallback, useEffect, useState } from 'react'
import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com'

function useUserApi() {
    const [user,setUser] = useState([])

    const getUsers = useCallback(() => {
        const readusers = async () => {
            const res = await axios.get(`${url}/users`)
            setUser(res.data)
        }

        readusers()
    },[])

    useEffect(() => {
        getUsers()
    },[])
    
  return {
        users: [user, setUser]
  }
}

export default useUserApi
