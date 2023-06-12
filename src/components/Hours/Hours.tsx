import Header from "../Header/Header"
import { Link, useParams } from "react-router-dom"
import styles from "./Hours.module.css"
import { addMinutes, format } from "date-fns"
import { useContext, useEffect, useState } from "react"
import axios from "axios"
import { ScheduleContext } from "../../AppContext"
import HeaderInit from "../HeaderInit/HeaderInit"
import Footer from "../Footer/Footer"

interface IHourContext {
    hour: string
    setHour: (hour: string) => void
}

const Hours = () => {
    interface Hour {
        id: string
        hour: string
    }

    const generateHours = (
        startHour: Date,
        endHour: Date,
        interval: number,
    ): Hour[] => {
        const hours: Hour[] = []
        let currentHour = startHour

        while (currentHour <= endHour) {
            const hourFormatted = format(currentHour, "HH:mm:ss") // Formatar a hora
            hours.push({
                id: hourFormatted,
                hour: format(currentHour, "HH:mm"),
            })
            currentHour = addMinutes(currentHour, interval)
        }

        return hours
    }

    const { previousProfessionalId, id } = useParams()

    const [occupiedHours, setOccupiedHours] = useState<string[]>([])

    const getDateHours = () => {
        axios
            .get(
                `http://localhost:3000/professional/${previousProfessionalId}/${id}`,
            )
            .then((response) => {
                // Extrair as horas ocupadas da resposta da requisição
                const occupiedHours = response.data.map(
                    (date: any) => date.time,
                )
                setOccupiedHours(occupiedHours)
            })
            .catch((error) => console.log(error))
    }

    useEffect(() => {
        getDateHours()
    }, [previousProfessionalId, id])

    const startHour = new Date()
    startHour.setHours(8, 0, 0) // Definir a hora de início desejada
    const endHour = new Date()
    endHour.setHours(19, 0, 0) // Definir a hora de término desejada
    const interval = 30 // Definir o intervalo de tempo em minutos

    const hours = generateHours(startHour, endHour, interval)

    // Filtrar as horas disponíveis excluindo as horas ocupadas
    const availableHours = hours.filter(
        (hour) => !occupiedHours.includes(hour.id),
    )

    const { hour, setHour }: IHourContext = useContext(ScheduleContext)

    const handleHourClick = (hourClick: string) => {
        setHour(hourClick)
    }

    return (
        <div>
            <HeaderInit />
            <p>Escolha a hora:</p>

            <div className={styles.containerGlobal}>
                {availableHours.map((hour, index) => (
                    <Link
                        onClick={() => handleHourClick(hour.id)}
                        className={styles.containerService}
                        to="/form"
                        key={hour.id}
                        id={hour.id}
                    >
                        <div>
                            <p className={styles.nameService}>{hour.hour}</p>
                        </div>
                    </Link>
                ))}
            </div>
            <Footer />
        </div>
    )
}

export default Hours
