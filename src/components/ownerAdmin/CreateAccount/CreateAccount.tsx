import { useState } from "react";
import logo from "../../../assets/image/logo.png";
import styles from "./CreateAccount.module.css";
import axios from "axios";

const CreateAccount = () => {
  const [passwordError, setPasswordError] = useState("");
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")

  const handleSaveUser = async (e) => {
    e.preventDefault();

    // Obtenha os valores dos campos de senha
    const passwordInput = e.target.elements.password.value;
    const passwordCompare = e.target.elements.passwordCompare.value;

    // Verifique se as senhas correspondem
    if (passwordInput !== passwordCompare) {
      setPasswordError("As senhas não correspondem");
      return;
    }

    setName(name)
    setPassword(password)
    setEmail(email)

    const data = { name, password, email }
    try {
    const response = await axios.post("http://localhost:3000/admins", data) 
    console.log(response.data) 
    } catch (error) {
      alert(error)      
    }  
    
  }

  return (
    <div className={styles.mainContent}>
      <div className={styles.contentLeft}>
        <img src={logo} alt="Logo BarberShop" />
        <h1>Barber Shop</h1>
        <p>A essência da autenticidade masculina</p>
      </div>

      <div className={styles.contentForm}>
        <h2>Criar conta</h2>
        <form onSubmit={handleSaveUser}>
          <div className={styles.inputs}>
            <label htmlFor="name">Nome:</label>
            <input onChange={(e) => setName(e.target.value)} type="text" name="name" id="name" />
          </div>
          <div className={styles.inputs}>
            <label htmlFor="email">E-mail:</label>
            <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" />
          </div>
          <div className={styles.inputs}>
            <label htmlFor="password">Senha:</label>
            <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" />
          </div>
          <div className={styles.inputs}>
            <label htmlFor="passwordCompare">Repita a senha:</label>
            <input type="password" name="passwordCompare" id="passwordCompare" />
          </div>
          <button type="submit">Criar</button>
        </form>
        {passwordError && <p className={styles.error}>{passwordError}</p>}
      </div>


    </div>
  );
};

export default CreateAccount;