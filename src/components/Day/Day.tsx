import styles from "./Day.module.css"
import { Link, useLocation } from "react-router-dom"
import { addDays, format } from "date-fns"
import { ptBR } from "date-fns/locale"
import { useContext } from "react"
import { ScheduleContext } from "../../AppContext"
import HeaderInit from "../HeaderInit/HeaderInit"
import Footer from "../Footer/Footer"

interface IDayContext {
    day: string
    setDay: string
}

const Day = () => {
    const today = new Date()
    today.setHours(0, 0, 0, 0) // seta hora, minuto, segundo e milissegundo como zero
    const dataAvailable = Array.from({ length: 15 }).map((_, index) => ({
        data: format(addDays(today, index), "EEEE, dd 'de' MMMM 'de' yyyy", {
            locale: ptBR
        }),
        id: addDays(today, index).toISOString().replace(/T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, 'T00:00:00.000Z') // adiciona ao ID a hora renderizada
    }))

    const location = useLocation();
    const previousProfessionalId = location.pathname.split("/")[2]; // Obtém o ID do profissional do URL atual

    const { day, setDay }: IDayContext = useContext(ScheduleContext)

    const handleDayClick = (day: string) => {
        setDay(day)
    }

    return (
        <div >
            <HeaderInit/>
            <p>Escolha o dia:</p>
            <div className={styles.containerGlobal}>
                {dataAvailable.map((data, index) => ( // tenho que receber no link de baixo ID fo professional / ID da data
                    <Link onClick={() => handleDayClick(data.id)} to={`/hours/${previousProfessionalId}/${data.id}`} key={data.id}>
                        <div className={styles.containerDay} >
                            <p className={styles.descriptionDay}>{data.data}</p>
                            
                        </div>
                    </Link>
                ))}
            </div>
            <Footer/>
        </div>
    )
}

export default Day