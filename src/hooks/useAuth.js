import React, {useCallback, useEffect, useState} from 'react'

export const useAuth = () => {
    const [token, setToken] = useState(null)
    const login = useCallback((jwtToken) => {
        setToken(jwtToken)
        localStorage.setItem('userData', JSON.stringify({token: jwtToken}))
    }, [])
    const logout = () => {
        setToken(null)
        localStorage.removeItem('userData')
    }
    useEffect(() => {
        const data  = JSON.parse(localStorage.getItem('userData'))
        if(data) {
            login(data.token)
        }
    }, [login])
    return {login, logout, token}
}
