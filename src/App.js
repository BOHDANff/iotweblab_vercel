import React from "react"
import Header from "./Components/Header.jsx";
import Technologies from "./Components/Technologies.jsx";
import Feedback from "./Components/Feedback.jsx";
import Footer from "./Components/Footer.jsx";
import {AuthProvider} from "./Components/Context/AuthContext";
import {useAuth} from "./hooks/useAuth";


function App() {
    const {login, logout, token} = useAuth()
    const isLogin = !!token
    return (
        <AuthProvider value={{login, logout, token, isLogin}}>
            <Header/>
            <Technologies/>
            <Feedback/>
            <Footer/>
        </AuthProvider>
    );
}

export default App;
