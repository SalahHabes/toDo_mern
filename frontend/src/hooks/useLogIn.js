import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import axios from 'axios'

export const useLogIn = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()

    const login = async (email, password) => {
        setIsLoading(true)
        setError(null)

        await axios.post('api/user/login', {email, password})
            .then((response) => {
                const json = response.data
                console.log(json)
                // save the user to local storage
                localStorage.setItem('user', JSON.stringify(json))

                // update the auth context
                dispatch({type: 'LOGIN', payload: json})
                
                setIsLoading(false)

            }).catch((error) => {
                setIsLoading(false)
                setError(error.response.data.error);
            })
    }

    return { login, isLoading, error}
}