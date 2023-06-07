import logo from "../../../assets/image/logo.png"
import styles from "./Login.module.css"

const Login = () => {
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
                    <input type="email" name="email" id="email" />
                </div>
                <div className={styles.inputs}>
                    <label htmlFor="password">Senha:</label>
                    <input type="password" name="password" id="password" />                    
                </div>
                <button>Entrar</button>
                <p>Esqueceu sua senha ?</p>
            </div>
        </div>
    )
}

export default Login