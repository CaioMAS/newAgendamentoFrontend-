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

const AddProfessional = () => {
    const [professionalName, setProfessionalName] = useState<string>("")
    const [urlPhoto, setUrlPhoto] = useState<string>("")
    const [adminId, setAdminId] = useState<string>("")
    const [service, setService] = useState<string>("")
    const [serviceValue, setServiceValue] = useState<number>()
    const [professional, setProfessional] = useState<IProfessional[]>([])

    useEffect(() => {
        const id = localStorage.getItem("@Auth:user") // Obtém o id do usuário logado
        setAdminId(id) // Define o adminId com o id do usuário logado
    }, [])

    const getProfessional = () => {
        axios
            .get(`http://localhost:3000/admin/${adminId}`)
            .then(response => setProfessional(response.data)) // Define a lista de profissionais com os dados da resposta
            .catch(error => console.log(error))
    }

    useEffect(() => {
        if (adminId) {
            getProfessional() // Obtém a lista de profissionais quando o adminId é definido
        }
    }, [adminId, professional]) // Adiciona professional como dependência para atualizar a lista após adicionar um novo profissional

    console.log(professional)

    const handleSaveProfessional = async () => {
        if (professionalName === "") {
            alert("Valor preencher o nome do profissional")
        }

        setProfessionalName(professionalName)
        setUrlPhoto(urlPhoto)

        const data = {
            professional_name: professionalName,
            photo: urlPhoto,
            adminId: adminId,
        }

        console.log(data)
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

    return (
        <div>
            {/* Componentes de cabeçalho e rodapé */}
            <HeaderAdmin />
            <div className={styles.mainContent}>
                <div className={styles.cards}>
                    <h3>Adicinar profissional</h3>
                    <div className={styles.containerInput}>
                        <label htmlFor="name">Nome:</label>
                        <input
                            value={professionalName}
                            onChange={e => setProfessionalName(e.target.value)}
                            placeholder="Nome do profisisonal"
                            type="text"
                            id="name"
                        />
                    </div>

                    <div className={styles.containerInput}>
                        <label htmlFor="photo">URL foto:</label>
                        <input
                            value={urlPhoto}
                            onChange={e => setUrlPhoto(e.target.value)}
                            placeholder="URL de hospedagem da foto"
                            type="text"
                            id="photo"
                        />
                    </div>

                    <button onClick={handleSaveProfessional}>Enviar</button>
                </div>

                <div className={styles.cards}>
                    <h3>Adicinar serviços ao profissional</h3>
                    <div className={styles.containerInput}>
                        <label htmlFor="name">Profissionais:</label>
                        <select name="" id="">
                            <option value="" disabled selected>
                                Selecione um profissional
                            </option>
                            {professional.map(item => (
                                <option key={item.id} value={item.id}>
                                    {item.professional_name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className={styles.containerInput}>
                        <label htmlFor="valueService">Serviço:</label>
                        <input
                            placeholder="Adicione o nome do serviço"
                            type="text"
                            id="valueService"
                        />
                    </div>

                    <div className={styles.containerInput}>
                        <label htmlFor="valueService">Valor do serviço:</label>
                        <input
                            placeholder="Adicione o valor do serviço"
                            type="number"
                            id="valueService"
                        />
                    </div>

                    <button className={styles.button}>Enviar</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AddProfessional
