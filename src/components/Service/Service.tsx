import Header from "../Header/Header"
import { Link, useParams } from "react-router-dom"
import styles from "./Service.module.css"
import { useEffect, useState, useContext } from "react"
import axios from "axios"
import { ScheduleContext } from "../../AppContext"
import { Dispatch, SetStateAction } from "react"
import HeaderInit from "../HeaderInit/HeaderInit"
import Footer from "../Footer/Footer"

interface IService {
    id: string
    type: string
    value: number
    professionalId: string
}

interface IServiceContext {
    serviceName: string
    setServiceName: Dispatch<SetStateAction<string>>
}

const Service = () => {
    const { previousProfessionalId } = useParams()

    const [services, setServices] = useState<IService[]>([])
    const { serviceName, setServiceName }: IServiceContext =
        useContext(ScheduleContext)

    const getServices = () => {
        axios
            .get(
                `http://localhost:3000/professional/${previousProfessionalId}/services`,
            )
            .then(response => setServices(response.data))
            .catch(error => console.log(error))
    }

    const handleServiceClick = (name: string) => {
        setServiceName(name)
    }

    useEffect(() => {
        getServices()
    }, [previousProfessionalId])

    return (
        <div>
            <HeaderInit />
            <p>Escolha o serviço desejado:</p>
            <div className={styles.containerGlobal}>
                {services.map((service, index) => (
                    <Link
                        onClick={() => handleServiceClick(service.type)}
                        className={styles.containerService}
                        to={`/day/${previousProfessionalId}`}
                    >
                        <div key={index}>
                            <p className={styles.nameService}>{service.type}</p>
                            <p className={styles.valueService}>
                                R$ {service.value},00
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
            <Footer />
        </div>
    )
}

export default Service
