import styles from "./HomePageAdmin.module.css"
import Footer from "../../Footer/Footer"
import { Link } from "react-router-dom"
import HeaderAdmin from "../../HeaderAdmin/HeaderAdmin"

const HomePageAdmin = () => {
    const id = localStorage.getItem("@Auth:user")
    console.log(id)
    return (
        <div>
            <HeaderAdmin />
            <div className={styles.mainContent}>
                <Link
                    to="/findProfessional"
                    className={`${styles.card} ${styles.cardLeft}`}
                >
                    <div>
                        <p>Acessar agenda dos profissionais</p>
                    </div>
                </Link>

                <Link
                    to="/addProfessional"
                    className={`${styles.card} ${styles.cardRight}`}
                >
                    <div>
                        <p>Cadastrar novo profissional</p>
                    </div>
                </Link>
                <div className={`${styles.card} ${styles.cardRight}`}>
                    <p>O link da sua barbearia é:</p>
                    <p>{`http://localhost:5173/${id}`}</p>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default HomePageAdmin
