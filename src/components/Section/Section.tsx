import { Link } from "react-router-dom"
import styles from "./Section.module.css"

const Section = () => {
    return (
        <div className={styles.section}>
            <Link to="/professional">
                <div className={styles.card}>
                    <h2>Agende seu horário</h2>
                </div>
            </Link>

            <a href="">
                <div className={styles.card}>
                    <h2>Onde estamos ?</h2>
                </div>
            </a>
            <a href="">
                <div className={styles.card}>
                    <h2>Nos avalie</h2>
                </div>
            </a>
        </div>
    )
}

export default Section
