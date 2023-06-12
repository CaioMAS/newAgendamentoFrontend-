import { Routes, Route } from "react-router-dom"
import App from "./App.tsx"
import "./index.css"
import Professional from "./components/Professional/Professional.tsx"
import Service from "./components/Service/Service.tsx"
import Day from "./components/Day/Day.tsx"
import Hours from "./components/Hours/Hours"
import Form from "./components/Form/Form"
import Login from "./components/ownerAdmin/Login/Login.tsx"
import FindProfessional from "./components/ownerAdmin/FindProfessinal/FindProfessional.tsx"
import FindDay from "./components/ownerAdmin/FindDay/FindDay.tsx"
import FindSchedule from "./components/ownerAdmin/FindSchedule/FindSchedule.tsx"
import HomePageAdmin from "./components/ownerAdmin/HomePageAdmin/HomePageAdmin"
import AddProfessional from "./components/ownerAdmin/AddProfessional/AddProfessional.tsx"
import CreateAccount from "./components/ownerAdmin/CreateAccount/CreateAccount.tsx"
import { PrivateRoutes } from "./privateRoutes.tsx"

export function Routers() {
    return (
        <Routes>
            <Route path="/:idBarberShop" element={<App />} />
            <Route path="/professional/:idBarberShop" element={<Professional  />} />
            <Route
                path="/service/:previousProfessionalId"
                element={<Service />}
            />
            <Route path="/day/:id" element={<Day />} />
            <Route
                path="/hours/:previousProfessionalId/:id"
                element={<Hours />}
            />
            <Route path="/form" element={<Form />} />
            <Route path="/" element={<Login />} />
            <Route path="/homePageAdmin" element={<PrivateRoutes />}>
                <Route path="/homePageAdmin" element={<HomePageAdmin />} />
            </Route>

            <Route path="/findProfessional" element={<PrivateRoutes />}>
                <Route
                    path="/findProfessional"
                    element={<FindProfessional />}
                />
            </Route>

            <Route path="/addProfessional" element={<PrivateRoutes />}>
                <Route path="/addProfessional" element={<AddProfessional />} />
            </Route>

            <Route
                path="/findDay/:previousProfessionalId"
                element={<PrivateRoutes />}
            >
                <Route
                    path="/findDay/:previousProfessionalId"
                    element={<FindDay />}
                />
            </Route>

            <Route
                path="/findSchedule/:previousProfessionalId/:date"
                element={<PrivateRoutes />}
            >
                <Route
                    path="/findSchedule/:previousProfessionalId/:date"
                    element={<FindSchedule />}
                />
            </Route>

            <Route path="/createAccount" element={<CreateAccount />} />
        </Routes>
    )
}

export default Routers
