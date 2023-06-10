import logo from "../../assets/image/logo.png"
import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa"
import styles from "./HeaderInit.module.css"

const HeaderInit = () => {
    return (
        <div className={styles.header}>
            <a href="./">
                <img src={logo} alt="Logomarca BarberShop" />
            </a>
            <h1>Barber Shop</h1>
            <ul>
                <li>
                    <a href="">
                        <FaInstagram />
                    </a>
                </li>
                <li>
                    <a href="">
                        <FaWhatsapp />
                    </a>
                </li>
                <li>
                    <a href="">
                        <FaFacebook />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default HeaderInit
