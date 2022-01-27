import React, {useContext} from "react";

const AuthContext = React.createContext()

export const useAuthContext = () => {
    return useContext(AuthContext)
}

export const AuthProvider = ({children, ...props}) => {
    return (
        <AuthContext.Provider {...props}>
            {children}
        </AuthContext.Provider>
    )
}