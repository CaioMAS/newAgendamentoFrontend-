import { Link } from "react-router-dom"
import styles from "./FindProfessional.module.css"
import Footer from "../../Footer/Footer"
import { useContext, useEffect, useState } from "react"
import axios from "axios"
import { ScheduleContext } from "../../../AppContext"
import HeaderAdmin from "../../HeaderAdmin/HeaderAdmin"

interface IProfessional {
    adminId: string
    id: string
    photo: string
    professional_name: string
    service: string[]
}

interface IProfessionalContext {
    professionalName: string
    setProfessionalName: Dispatch<SetStateAction<string>>
}

const FindProfessional = () => {
    const [professional, setProfessional] = useState<IProfessional[]>([])
    const { setProfessionalName }: IProfessionalContext =
        useContext(ScheduleContext)
    const id = localStorage.getItem("@Auth:user")

    const getProfessional = () => {
        axios
            .get(`http://localhost:3000/admin/${id}`)
            .then((response) => setProfessional(response.data))
            .catch((error) => console.log(error))
    }

    const handleProfessionalClick = (id: string) => {
        setProfessionalName(id)
    }

    useEffect(() => {
        getProfessional()
    }, [])

    return (
        <div>
            <HeaderAdmin />
            <p>Selecione um profissional:</p>
            <div className={styles.containerGlobal}>
                {professional.map((professional, index) => (
                    <Link
                        key={index}
                        onClick={() => handleProfessionalClick(professional.id)}
                        className={styles.containerService}
                        to={`/findDay/${professional.id}`}
                    >
                        <div>
                            <p className={styles.nameService}>
                                {professional.professional_name}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
            <Footer />
        </div>
    )
}

export default FindProfessional
