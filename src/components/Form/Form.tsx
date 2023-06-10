import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { ScheduleContext } from "../../AppContext"
import styles from "./Form.module.css"
import axios from "axios"
import HeaderInit from "../HeaderInit/HeaderInit"
import Footer from "../Footer/Footer"

interface DataSchedule {
    service: string
    date: string
    time: string
    client_name: string
    client_telephone: string
    professional_id: string
}

const Form = () => {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const navigate = useNavigate()

    const {
        professionalName,
        day,
        hour,
        serviceName,
        setNameContext,
        setPhoneContext,
    } = useContext(ScheduleContext)

    const data: DataSchedule = {
        service: serviceName,
        date: day,
        time: hour,
        client_name: name,
        client_telephone: phone,
        professional_id: professionalName,
    }

    const postSchedule = async (data: DataSchedule) => {
        try {
            const response = await axios.post(
                "http://localhost:3000/schedule/",
                data,
            )
            console.log(response.data)
            navigate("/") // Redireciona para a rota principal ("/") após o agendamento ser feito com sucesso
        } catch (error) {
            console.log(error)
        }
    }

    const clearInput = () => {
        setName("")
        setPhone("")
    }

    const formatPhoneNumber = (phoneNumber: string) => {
        // Remove todos os caracteres que não são dígitos
        const cleanedPhoneNumber = phoneNumber.replace(/\D/g, "")

        // Verifica se o número tem o DDD
        if (cleanedPhoneNumber.length >= 11) {
            // Formata o número no formato "(00) 00000-0000"
            return cleanedPhoneNumber.replace(
                /^(\d{2})(\d{5})(\d{4})$/,
                "($1) $2-$3",
            )
        }

        return cleanedPhoneNumber
    }

    const validatePhoneNumber = (phoneNumber: string) => {
        // Verifica se o número tem o DDD
        if (phoneNumber.length < 11) {
            return false
        }

        return true
    }

    const handleClick = (e: React.FormEvent) => {
        e.preventDefault()
        setNameContext(name)
        setPhoneContext(phone)

        const formattedPhone = formatPhoneNumber(phone)

        if (data.client_name === "" || !validatePhoneNumber(formattedPhone)) {
            alert(
                "Dados estão incompletos ou telefone está em formato incorreto. Não é possível agendar.",
            )
            return
        }

        postSchedule(data)
        clearInput()
        e.target.reset()

        alert("Agendamento feito com sucesso")
    }

    const handlePhoneBlur = () => {
        const formattedPhone = formatPhoneNumber(phone)
        setPhone(formattedPhone)
    }

    console.log(data)

    return (
        <div>
            <HeaderInit />
            <p>Preencha seus dados</p>
            <div className={styles.containerDados}>
                <form onSubmit={handleClick}>
                    <div className={styles.containerInput}>
                        <label htmlFor="name">Seu nome e sobrenome: </label>
                        <input
                            placeholder="Seu nome e sobrenome"
                            id="name"
                            onChange={e => setName(e.target.value)}
                            type="text"
                        />
                    </div>
                    <div className={styles.containerInput}>
                        <label htmlFor="phone">Telefone: </label>
                        <input
                            id="phone"
                            onChange={e => setPhone(e.target.value)}
                            onBlur={handlePhoneBlur}
                            type="text"
                            placeholder="(00) 00000-0000"
                            value={phone}
                        />
                    </div>
                    <input
                        className={styles.buttonShedule}
                        type="submit"
                        value="Agendar"
                    />
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default Form
