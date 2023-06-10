import { useState, useContext } from "react"
import logo from "../../../assets/image/logo.png"
import styles from "./Login.module.css"
import { Link, Navigate } from "react-router-dom"
import { AuthContext } from "../../../contexts/authContext"

const Login = () => {
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const { signIn, signed } = useContext(AuthContext)

    const handleLogin = async e => {
        e.preventDefault()
        const data = {
            email,
            password,
        }
        await signIn(data)
        console.log(email, password)
    }

    if (signed) {
        return <Navigate to="/homePageAdmin" />
    } else {
        return (
            <div className={styles.mainContent}>
                <div className={styles.contentLeft}>
                    <img src={logo} alt="Logo BarberShop" />
                    <h1>Barber Shop</h1>
                    <p>A essência da autenticidade masculina</p>
                </div>

                <div className={styles.contentForm}>
                    <h2>Acessar sua conta</h2>
                    <div className={styles.inputs}>
                        <label htmlFor="email">E-mail:</label>
                        <input
                            onChange={e => setEmail(e.target.value)}
                            type="email"
                            name="email"
                            id="email"
                            value={email || ""} // Define o valor do email para o estado atual ou uma string vazia
                        />
                    </div>
                    <div className={styles.inputs}>
                        <label htmlFor="password">Senha:</label>
                        <input
                            onChange={e => setPassword(e.target.value)}
                            type="password"
                            name="password"
                            id="password"
                            value={password || ""} // Define o valor da senha para o estado atual ou uma string vazia
                        />
                    </div>
                    <button onClick={handleLogin}>Entrar</button>
                    <Link to={"/createAccount"}>
                        <p>Criar conta</p>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Login
