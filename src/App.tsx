import styles from "./App.module.css"
import HeaderInit from "./components/HeaderInit/HeaderInit"
import Footer from "./components/Footer/Footer"
import Section from "./components/Section/Section"

function App() {
    return (
        <div className={styles.app}>
            <HeaderInit />
            <Section />
            <Footer />
        </div>
    )
}

export default App
