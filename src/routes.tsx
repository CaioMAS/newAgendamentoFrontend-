import App from './App.tsx'
import './index.css'
import { createBrowserRouter } from "react-router-dom"
import Professional from './components/Professional/Professional.tsx'
import Service from './components/Service/Service.tsx'
import Day from './components/Day/Day.tsx'
import Hours from './components/Hours/Hours'
import Form from './components/Form/Form'
import Login from './components/ownerAdmin/Login/Login.tsx'
import FindProfessional from './components/ownerAdmin/FindProfessinal/FindProfessional.tsx'
import FindDay from './components/ownerAdmin/FindDay/FindDay.tsx'
import FindSchedule from './components/ownerAdmin/FindSchedule/FindSchedule.tsx'
import HomePageAdmin from './components/ownerAdmin/HomePageAdmin/HomePageAdmin'
import AddProfessional from './components/ownerAdmin/AddProfessional/AddProfessional.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/professional",
    element: <Professional />
  },
  {
    path: "/service/:previousProfessionalId",
    element: <Service />
  },
  {
    path: "/day/:id",
    element: <Day />
  },
  {
    path: "/hours/:previousProfessionalId/:id",
    element: <Hours />
  },
  {
    path: "/form",
    element: <Form />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/homePageAdmin",
    element: <HomePageAdmin />
  },
  {
    path: "/findProfessional",
    element: <FindProfessional />
  },
  {
    path: "/addProfessional",
    element: <AddProfessional />
  },
  {
    path: "/findDay/:previousProfessionalId",
    element: <FindDay />
  },
  {
    path: "/findSchedule/:previousProfessionalId/:date",
    element: <FindSchedule />
  }
])

export { router }
