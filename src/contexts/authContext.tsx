import axios from "axios"
import { createContext, useEffect, useState } from "react"
import { Navigate } from "react-router-dom"

interface ISignInParams {
    email: string
    password: string
}

const api = axios.create({
    baseURL: "http://localhost:3000",
})

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        const loadingStoreData = async () => {
            const storageUser = localStorage.getItem("@Auth:user")
            const storageToken = localStorage.getItem("@Auth:token")

            if (storageUser && storageToken) {
                setUser(storageUser)
            }
        }
        loadingStoreData()
    }, [])

    const signIn = async ({ email, password }: ISignInParams) => {
        try {
            const response = await api.post("/authenticate", {
                email,
                password,
            })

            setUser(response.data)
            api.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${response.data.token}`
            localStorage.setItem("@Auth:token", response.data.token)
            localStorage.setItem("@Auth:user", response.data.admin.id)
        } catch (error) {
            alert(error.response.data.error)
        }
    }

    const signOut = () => {
        localStorage.clear()
        setUser(null)
        return <Navigate to="/login" />
    }

    return (
        <AuthContext.Provider
            value={{
                user,
                signIn,
                signOut,
                signed: !!user,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}
