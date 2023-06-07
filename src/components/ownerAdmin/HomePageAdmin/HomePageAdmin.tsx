import styles from "./HomePageAdmin.module.css"
import HeaderInit from "../../HeaderInit/HeaderInit"
import Footer from "../../Footer/Footer"
import { Link } from "react-router-dom"

const HomePageAdmin = () => {
    return (
        <div>
            <HeaderInit />
            <div className={styles.mainContent}>
                <Link to="/findProfessional" className={`${styles.card} ${styles.cardLeft}`}>
                    <div >
                        <p>Acessar agenda dos profissionais</p>
                    </div>
                </Link>

                <Link to="/addProfessional" className={`${styles.card} ${styles.cardRight}`}>
                    <div>
                        <p>Cadastrar novo profissional</p>
                    </div>
                </Link>


            </div>
            <Footer />
        </div>
    )
}

export default HomePageAdmin