import styles from "./HomePageAdmin.module.css"
import Footer from "../../Footer/Footer"
import { Link } from "react-router-dom"
import HeaderAdmin from "../../HeaderAdmin/HeaderAdmin"

const HomePageAdmin = () => {
    return (
        <div>
            <HeaderAdmin/>
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