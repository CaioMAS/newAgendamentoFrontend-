import { Link, useParams } from "react-router-dom"
import Footer from "../../Footer/Footer"
import HeaderInit from "../../HeaderInit/HeaderInit"
import styles from "./FindDay.module.css"
import { addDays, format } from "date-fns"
import { ptBR } from "date-fns/locale"

const FindDay = () => {
    const {previousProfessionalId} = useParams()
    console.log(previousProfessionalId)
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    const dataAvailable = Array.from({ length: 15 }).map((_, index) => ({
        data: format(addDays(today, index), "EEEE, dd 'de' MMMM 'de' yyyy", {
            locale: ptBR
        }),
        id: addDays(today, index).toISOString().replace(/T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, 'T00:00:00.000Z') // adiciona ao ID a hora renderizada
    }))
    return (
        <div>
            <HeaderInit />
            <p>Escolha o dia para olhar a agenda: </p>
            <div className={styles.containerGlobal}>
                {dataAvailable.map((data, index) => (
                    <Link key={index} to={`/findSchedule/${previousProfessionalId}/${data.id}`}>
                        <div className={styles.containerDay} >
                            <p className={styles.descriptionDay}>{data.data}</p>
                        </div>
                    </Link>
                ))}
            </div>
            <Footer />
        </div>
    )
}

export default FindDay