import React from "react"
import { createRoot } from "react-dom"
import "./index.css"
import { BrowserRouter } from "react-router-dom"
import { ScheduleContextProvider } from "./AppContext"
import Routers from "./routes"
import { AuthProvider } from "./contexts/authContext"

createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AuthProvider>
            <ScheduleContextProvider>
                <BrowserRouter>
                    <Routers />
                </BrowserRouter>
            </ScheduleContextProvider>
        </AuthProvider>
    </React.StrictMode>,
)
