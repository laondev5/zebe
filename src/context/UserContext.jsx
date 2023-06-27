import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebaseConfig";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    sendPasswordResetEmail,
    sendEmailVerification
} from 'firebase/auth'

const userAuthContext = createContext()

export function UserAuthContextProvider ({children}){
    const [user, setUser] = useState('')
    function signUp(email, password){
        return (
            createUserWithEmailAndPassword(auth, email, password)
        )
    }
    function login(email, password){
        return (
            signInWithEmailAndPassword(auth, email, password)
        )
    }
    function logout (){
        return signOut(auth)
    }
    function goodleSignin(){
        const googleAuthProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleAuthProvider)
    }
    function forgetPssword(email){
        return sendPasswordResetEmail(auth, email)
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
        }) 
        return ()=>{
            unsubscribe();
        }
    }, [])
    return <userAuthContext.Provider value={{signUp, user, login, logout, goodleSignin, forgetPssword}}>{children}</userAuthContext.Provider>
    
}

export function useUserAuth(){
    return useContext(userAuthContext)
}