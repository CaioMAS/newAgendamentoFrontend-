import axios from "axios"
import Footer from "../../Footer/Footer"
import HeaderAdmin from "../../HeaderAdmin/HeaderAdmin"
import styles from "./AddProfessional.module.css"
import { useState, useEffect } from "react"

interface IProfessional {
    adminId: string
    id: string
    photo: string
    professional_name: string
    service: string[]
}

interface IService {
    type: string
    value?: number
    professionalId: string
}

const AddProfessional = () => {
    const [professionalName, setProfessionalName] = useState<string>("")
    const [urlPhoto, setUrlPhoto] = useState<string>("")
    const [adminId, setAdminId] = useState<string>("")
    const [professional, setProfessional] = useState<IProfessional[]>([])
    const [service, setService] = useState<string>("")
    const [serviceValue, setServiceValue] = useState<number>()
    const [professionalSelected, setProfessionalSelected] = useState<string>("")

    useEffect(() => {
        const id = localStorage.getItem("@Auth:user") // Obtém o id do usuário logado
        setAdminId(id) // Define o adminId com o id do usuário logado
    }, [])

    useEffect(() => {
        if (adminId) {
            getProfessional() // Obtém a lista de profissionais quando o adminId é definido
        }
    }, [adminId])

    const getProfessional = async () => {
        try {
            const response = await axios.get(
                `http://localhost:3000/admin/${adminId}`,
            )
            setProfessional(response.data) // Define a lista de profissionais com os dados da resposta
        } catch (error) {
            console.log(error)
        }
    }

    const handleSaveProfessional = async () => {
        if (professionalName === "") {
            alert("Favor preencher o nome do profissional")
            return
        }

        const data = {
            professional_name: professionalName,
            photo: urlPhoto,
            adminId: adminId,
        }

        try {
            const response = await axios.post(
                "http://localhost:3000/professional",
                data,
            )
            alert("Professional cadastrado com sucesso")
            setProfessionalName("")
            setUrlPhoto("")
        } catch (error) {
            alert(error)
        }
    }

    const handleSaveService = async () => {
        if (
            service === "" ||
            serviceValue === null ||
            professionalSelected === ""
        ) {
            alert("Falor preencher os dados")
            return
        }

        const dataService: IService = {
            type: service,
            value: serviceValue,
            professionalId: professionalSelected,
        }

        try {
            const response = await axios.post(
                "http://localhost:3000/services",
                dataService,
            )
            alert("Serviço cadastrado com sucesso")
            setService("")
            setServiceValue(0)
        } catch (error) {
            alert(error)
        }
    }

    return (
        <div>
            {/* Componentes de cabeçalho e rodapé */}
            <HeaderAdmin />
            <div className={styles.mainContent}>
                <div className={styles.cards}>
                    <h3>Adicionar profissional</h3>
                    <div className={styles.containerInput}>
                        <label htmlFor="name">Nome:</label>
                        <input
                            value={professionalName}
                            onChange={(e) =>
                                setProfessionalName(e.target.value)
                            }
                            placeholder="Nome do profisisonal"
                            type="text"
                            id="name"
                        />
                    </div>

                    <div className={styles.containerInput}>
                        <label htmlFor="photo">URL foto:</label>
                        <input
                            value={urlPhoto}
                            onChange={(e) => setUrlPhoto(e.target.value)}
                            placeholder="URL de hospedagem da foto"
                            type="text"
                            id="photo"
                        />
                    </div>

                    <button onClick={handleSaveProfessional}>Enviar</button>
                </div>

                <div className={styles.cards}>
                    <h3>Adicionar serviços ao profissional</h3>
                    <div className={styles.containerInput}>
                        <label htmlFor="name">Profissionais:</label>
                        <select
                            onChange={(e) =>
                                setProfessionalSelected(e.target.value)
                            }
                            value={professionalSelected}
                            name="selectProfessional"
                            id="selectProfessional"
                        >
                            <option value="" disabled selected>
                                Selecione um profissional
                            </option>
                            {professional.map((item) => (
                                <option key={item.id} value={item.id}>
                                    {item.professional_name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className={styles.containerInput}>
                        <label htmlFor="service">Serviço:</label>
                        <input
                            value={service}
                            onChange={(e) => setService(e.target.value)}
                            placeholder="Adicione o nome do serviço"
                            type="text"
                            id="service"
                        />
                    </div>

                    <div className={styles.containerInput}>
                        <label htmlFor="valueService">Valor do serviço:</label>
                        <input
                            value={serviceValue || ""}
                            onChange={(e) =>
                                setServiceValue(parseFloat(e.target.value))
                            }
                            placeholder="Adicione o valor do serviço"
                            type="number"
                            id="valueService"
                        />
                    </div>

                    <button
                        onClick={handleSaveService}
                        className={styles.button}
                    >
                        Enviar
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AddProfessional
