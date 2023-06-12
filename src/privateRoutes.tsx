import { Navigate, Outlet } from "react-router-dom"
import { AuthContext } from "./contexts/authContext"
import { useContext } from "react"

export const PrivateRoutes = () => {
    const { signed } = useContext(AuthContext)

    return signed ? <Outlet /> : <Navigate to="/" />
}
