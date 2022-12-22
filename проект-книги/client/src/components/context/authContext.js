import {createContext, useEffect, useState} from "react";
import axios from "axios";

export const AuthContext = createContext()

export const AuthContextProvider = ({children})=>{
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null)

    const logIn  = async (inputs)=>{
        const res = await axios.post("http://127.0.0.1:5000/auth/login", inputs)
        setCurrentUser(res.data)
    }



    const logout = async ()=>{
        localStorage.setItem('books', null)
        localStorage.setItem('mybooks', null)
        setCurrentUser(null)
    }

    const check = async ()=>{
        console.log(localStorage.getItem('user'));

    }



    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser))
    }, [currentUser])
    
    return(
        <AuthContext.Provider value={{currentUser, logIn, logout,check}}>
            {children}
        </AuthContext.Provider>
    )
}