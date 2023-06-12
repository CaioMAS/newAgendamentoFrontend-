import { Link, useParams } from "react-router-dom"
import styles from "./Professional.module.css"
import { useContext, useEffect, useState } from "react"
import axios from "../../../node_modules/axios/index"
import { ScheduleContext } from "../../AppContext"
import { Dispatch, SetStateAction } from "react"
import HeaderInit from "../HeaderInit/HeaderInit"
import Footer from "../Footer/Footer"

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

const Professional = () => {
    const { idBarberShop } = useParams()
    const [professional, setProfessional] = useState<IProfessional[]>([])
    const { professionalName, setProfessionalName }: IProfessionalContext =
        useContext(ScheduleContext)

        console.log(idBarberShop)
    const getProfessional = () => {
        axios
            .get(`http://localhost:3000/admin/${idBarberShop}`)
            .then((response) => setProfessional(response.data))
            .catch((error) => console.log(error))
    }

    const handleProfessionalClick = (name: string) => {
        setProfessionalName(name)
    }

    useEffect(() => {
        getProfessional()
    }, [setProfessional])

    return (
        <div>
            <HeaderInit />
            <p>Escolha um dos nossos profissionais abaixo:</p>

            <div className={styles.containerGlobal}>
                {professional.map((professional, index) => (
                    <Link
                        key={index}
                        onClick={() => handleProfessionalClick(professional.id)}
                        className={styles.containerService}
                        to={`/service/${professional.id}`}
                    >
                        <div key={index}>
                            <p className={styles.nameService}>
                                {professional.professional_name}
                            </p>
                            <img
                                className={styles.imgService}
                                src={professional.photo}
                                alt="foto profissional"
                            />
                        </div>
                    </Link>
                ))}
            </div>
            <Footer />
        </div>
    )
}

export default Professional
