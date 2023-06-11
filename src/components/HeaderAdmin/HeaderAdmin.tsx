import logo from "../../assets/image/logo.png"
import { AuthContext } from "../../contexts/authContext"
import styles from "./HeaderAdmin.module.css"
import { useContext } from "react"

const HeaderAdmin = () => {
    const { signOut } = useContext(AuthContext)

    const handleSingOut = async (e) => {
        await signOut()
    }

    return (
        <div className={styles.header}>
            <a href="./">
                <img src={logo} alt="Logomarca BarberShop" />
            </a>
            <h1>Barber Shop</h1>
            <button onClick={handleSingOut} className={styles.signOut}>
                Sair
            </button>
        </div>
    )
}

export default HeaderAdmin
