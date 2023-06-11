import { useState } from "react"
import logo from "../../../assets/image/logo.png"
import styles from "./CreateAccount.module.css"
import axios from "axios"
import { Navigate } from "react-router-dom"

const CreateAccount = () => {
    const [passwordError, setPasswordError] = useState("")
    const [name, setName] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [accountCreated, setAccountCreated] = useState<boolean>(false)

    const handleSaveUser = async (e) => {
        e.preventDefault()

        if (name === "" || password === "" || email === "") {
            setPasswordError("Por favor, preencha todos os campos")
            return
        }

        const passwordInput = e.target.elements.password.value
        const passwordCompare = e.target.elements.passwordCompare.value

        if (passwordInput !== passwordCompare) {
            setPasswordError("As senhas não correspondem")
            return
        }

        setName(name)
        setPassword(password)
        setEmail(email)

        const data = { name, password, email }
        try {
            const response = await axios.post(
                "http://localhost:3000/admins",
                data,
            )
            setAccountCreated(true) // Define o estado para indicar que a conta foi criada
            alert("Conta criada com sucesso")
        } catch (error) {
            alert(error)
        }
    }

    // Se a conta foi criada, redireciona para a página de login
    if (accountCreated) {
        return (
            <>
                <Navigate to="/login" />
            </>
        )
    }

    return (
        <div className={styles.mainContent}>
            <div className={styles.contentLeft}>
                <img src={logo} alt="Logo BarberShop" />
                <h1>Barber Shop</h1>
                <p>A essência da autenticidade masculina</p>
            </div>

            <div className={styles.contentForm}>
                <h2>Criar conta</h2>
                <form onSubmit={handleSaveUser}>
                    <div className={styles.inputs}>
                        <label htmlFor="name">Nome:</label>
                        <input
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            name="name"
                            id="name"
                        />
                    </div>
                    <div className={styles.inputs}>
                        <label htmlFor="email">E-mail:</label>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            name="email"
                            id="email"
                        />
                    </div>
                    <div className={styles.inputs}>
                        <label htmlFor="password">Senha:</label>
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            name="password"
                            id="password"
                        />
                    </div>
                    <div className={styles.inputs}>
                        <label htmlFor="passwordCompare">Repita a senha:</label>
                        <input
                            type="password"
                            name="passwordCompare"
                            id="passwordCompare"
                        />
                    </div>
                    <button type="submit">Criar</button>
                </form>
                {passwordError && (
                    <p className={styles.error}>{passwordError}</p>
                )}
            </div>
        </div>
    )
}

export default CreateAccount
