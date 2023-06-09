import { useEffect, useState } from "react"
import { useParams, useLocation } from "react-router-dom"
import Footer from "../../Footer/Footer"
import HeaderInit from "../../HeaderInit/HeaderInit"
import styles from "./FindSchedule.module.css"
import axios from "axios"
import HeaderAdmin from "../../HeaderAdmin/HeaderAdmin"

interface ISchedule {
  id: string
  professional_id: string
  service: string
  date: string
  time: string
  client_name: string
  client_telephone: string
}

const FindSchedule = () => {
  const { previousProfessionalId, date } = useParams<{ previousProfessionalId: string; date: string }>();
  const [schedule, setSchedule] = useState<ISchedule[]>([])

  const getSchedule = () => {
    axios.get(`http://localhost:3000/professional/${previousProfessionalId}/${date}`)
      .then(response => setSchedule(response.data))
      .catch(error => console.log(error))
  }

  useEffect(() => {
    getSchedule()
  }, []) // Remova a dependência do useEffect para evitar loops infinitos

  console.log(schedule)

  return (
    <div>
      <HeaderAdmin/>
      <div className={styles.containerGlobal}>
        <table className={styles.tg}>
          <thead>
            <tr>
              <th className={styles.tgAmwm}>Horário</th>
              <th className={styles.tgAmwm}>Cliente</th>
              <th className={styles.tgAmwm}>Serviço</th>
              <th className={styles.tgAmwm}>Telefone</th>                            
            </tr>
          </thead>
          <tbody>
            {schedule.map((item, index) => (
              <tr key={index}>
                <td className={styles.tgBaqh}>{item.time}</td>
                <td className={styles.tgBaqh}>{item.client_name}</td>
                <td className={styles.tgBaqh}>{item.service}</td>
                <td className={styles.tgBaqh}>{item.client_telephone}</td>                            
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  )
}

export default FindSchedule