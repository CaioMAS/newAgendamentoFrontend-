import Footer from "../../Footer/Footer"
import HeaderInit from "../../HeaderInit/HeaderInit"
import styles from "./AddProfessional.module.css"


const AddProfessional = () => {
    return (
        <div>
            <HeaderInit />
            <div className={styles.mainContent}>
                <div className={styles.cards}>
                    <h3>Adicinar profissional</h3>
                    <div className={styles.containerInput}>
                        <label htmlFor="name">Nome:</label>
                        <input placeholder="Nome do profisisonal" type="text" id="name" />
                    </div>

                    <div className={styles.containerInput}>
                        <label htmlFor="photo">URL foto:</label>
                        <input placeholder="URL de hospedagem da foto" type="text" id="photo" />
                    </div>

                    <button>Enviar</button>
                </div>

                <div className={styles.cards}>
                    <h3>Adicinar serviços ao profissional</h3>
                    <div className={styles.containerInput}>
                        <label htmlFor="name">Profissionais:</label>
                        <select name="" id="">
                            <option value="" disabled selected>
                                Selecione um profissional
                            </option>
                            <option value="profissional1">Profissional 1</option>
                            <option value="profissional2">Profissional 2</option>
                        </select>
                    </div>

                    <div className={styles.containerInput}>
                        <label htmlFor="valueService">Serviço:</label>
                        <input placeholder="Adicione o nome do serviço" type="text" id="valueService" />
                    </div>

                    <div className={styles.containerInput}>
                        <label htmlFor="valueService">Valor do serviço:</label>
                        <input placeholder="Adicione o valor do serviço" type="number" id="valueService" />
                    </div>

                    <button>Enviar</button>

                </div>


            </div>
            <Footer />
        </div>
    )
}

export default AddProfessional